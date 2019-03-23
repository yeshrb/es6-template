/* eslint-disable */

// 作为备用参考，暂无用处

require('@babel/register')({
  presets: ['@babel/env'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./'],
        alias: {
          '~': './server/',
          database: './server/database/',
        },
      },
    ],
  ],
});

require('@babel/polyfill');
require('./server');
