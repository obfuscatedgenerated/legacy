const express = require("express");
const app = express();

var blacklisted = [];

app.get("*", function (req, res, next) {
  var matched = blacklisted.some(re => re.test(req.originalUrl.replace(/\?.*$/, '')))
  if (matched) {
    var ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
    res.status(403);
    res.type('txt').send('Forbidden');
  } else {
    next();
  }
})

app.use("/public", express.static(__dirname + "/public"))

app.get("/", function (req, res) {
  var ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
  res.sendFile(__dirname + "/index.html")
  console.log("Served index to " + ip)
})

app.get("/skills/", function (req, res) {
  var ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
  res.sendFile(__dirname + "/skills/index.html")
  console.log("Served skills to " + ip)
})

app.get("/project/:project", function (req, res) {
  var ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
  res.sendFile(__dirname + "/project/" + req.params.project + ".html") // outrageously stupid for security but this is just a dev server, real site is on gh pages where this is done automatically
  console.log("Served project " + req.params.project + " to " + ip)
})

app.use(function (req, res, next) {
  res.status(404);

  // respond with html page
  if (req.accepts('html')) {
    res.sendFile(__dirname + "/404.html")
    return;
  }

  // respond with json
  if (req.accepts('json')) {
    res.json({ error: 'Not found' });
    return;
  }

  // default to plain-text. send()
  res.type('txt').send('Not found');
});

app.use((err, req, res, next) => {
    console.error(err);
    res.status(500);

  // respond with html page
  if (req.accepts('html')) {
    res.sendFile(__dirname + "/500.html")
    return;
  }

  // respond with json
  if (req.accepts('json')) {
    res.json({ error: 'Internal server error' });
    return;
  }

  // default to plain-text. send()
  res.type('txt').send('Internal server error');
})

app.listen(3001);
console.log("Live @ 3001");