'use strict';
console.log(process.env.BUILD_ENV);
module.exports = {
    NODE_ENV: '"production"',
    BUILD_ENV: `"${process.env.BUILD_ENV}"`
};