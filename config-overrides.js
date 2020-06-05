const {override, addLessLoader} = require('customize-cra');

module.exports = override(
    addLessLoader({
        javascriptEnabled: true,
        cssLoaderOptions: {},
        cssModules: {
            localIdentName: "[path][name]__[local]--[hash:base64:5]", // if you use CSS Modules, and custom `localIdentName`, default is '[local]--[hash:base64:5]'.
        },
    })
);
