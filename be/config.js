/* eslint-disable @typescript-eslint/no-var-requires */

const path = require('path');
require('dotenv').config();
const prodfile = path.resolve(process.cwd(), '.env.production');
const devfile = path.resolve(process.cwd(), '.env.development');

console.log('prodfile', prodfile);
console.log('devfile', devfile);

if (process.env.NODE_ENV === 'production') {
  require('dotenv').config({ path: prodfile });
} else {
  require('dotenv').config({ path: devfile });
}

process.env.APP_VERSION = require('../package.json').version;
