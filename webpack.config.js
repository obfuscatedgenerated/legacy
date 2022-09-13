const path = require('path');
const hb = require('handlebars');
const fs = require('fs');
const MomentLocalesPlugin = require('moment-locales-webpack-plugin');
//const ExtraWatchWebpackPlugin = require("extra-watch-webpack-plugin");

function hb_build() {
  console.log("ignoring hb_build, defer as concurrent watch script.");
  return;

  console.log("Compiling index");
  let index_template = fs.readFileSync("./src/index.handlebars", "utf8");
  let img_preloads = [];
  //fs.readdirSync("./public/image").forEach(p => {
  //  if (p.endsWith(".png")) {
  //    img_preloads.push(`/public/image/${p}`);
  //  }
  //});
  let audio_preloads = [];
  //fs.readdirSync("./public/sound/").forEach(p => {
  //  if (p.endsWith(".mp3")) {
  //    img_preloads.push(`/public/sound/${p}`);
  //  }
  //});
  let compiled = hb.compile(index_template);
  let html = compiled({ img_preloads: img_preloads, audio_preloads: audio_preloads });
  fs.writeFileSync(`./index.html`, html);
  console.log("Compiled index");
}

module.exports = (env, argv) => {
  let dt = argv.mode == "development" ? 'inline-source-map' : 'hidden-source-map';
  console.log(`Building in ${argv.mode} mode`);
  console.log(`Using ${dt}`);
  return {
    plugins: [
      //  {
      //    apply: (compiler) => {
      //      compiler.hooks.compile.tap("hbhook_compile", () => {
      //        hb_build();
      //      });
      //    },
      //  },
      //  new ExtraWatchWebpackPlugin({
      //    files: ['./src/*.handlebars'],
      //  }),
      new MomentLocalesPlugin(),
    ],
    entry: {
      index: './src/index.ts',
      project: './src/project.ts',
      skills: './src/skills.ts',
    },
    devtool: dt,
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader']
        }
      ],
    },
    resolve: {
      extensions: ['.ts', '.js'],
    },
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'public/script'),
    },
  }
};