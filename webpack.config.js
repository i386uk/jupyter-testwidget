// Custom webpack rules
const rules = [
  { test: /\.ts$/, loader: 'ts-loader' },
  { test: /\.js$/, loader: 'source-map-loader' },
];

// Packages that shouldn't be bundled but loaded at runtime
const externals = ['@jupyter-widgets/base', 'three', 'jupyter-threejs'];
const path = require('path');
const pkg = require('./package.json');

module.exports = [
    {
        mode: "production",
        devtool: "source-map",
        entry: "./src/index.ts",
        output: {
            filename: "index.js",
            path: path.resolve(__dirname, "dist"),
            publicPath: "https://unpkg.com/jupyter-testwidget@" + pkg.version + "/lib/",
        },
        resolve: {
            // Add `.ts` and `.tsx` as a resolvable extension.
            extensions: [".ts", ".tsx", ".js"]
        },
        module: {
            rules: [
                // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
                { test: /\.tsx?$/, loader: "ts-loader" }
            ]
        }
    },
  {
    // Notebook extension
    entry: './src/index.ts',
    output: {
      filename: 'index.js',
      path: __dirname + '/testwidgetexample/nbextension/static',
      libraryTarget: 'amd'
    },
    module: {
      rules: rules
    },
    devtool: 'source-map',
    externals: ['@jupyter-widgets/base'],
    resolve: {
      // Add '.ts' and '.tsx' as resolvable extensions.
      extensions: [".webpack.js", ".web.js", ".ts", ".js"]
    }
  },

  {
    // embeddable bundle (e.g. for docs)
    entry: './src/index.ts',
    output: {
      filename: 'embed-bundle.js',
      path: __dirname + '/docs/source/_static',
      library: "jupyter-testwidget",
      libraryTarget: 'amd'
    },
    module: {
      rules: rules
    },
    devtool: 'source-map',
    externals: ['@jupyter-widgets/base'],
    resolve: {
      // Add '.ts' and '.tsx' as resolvable extensions.
      extensions: [".webpack.js", ".web.js", ".ts", ".js"]
    },
  },
];
