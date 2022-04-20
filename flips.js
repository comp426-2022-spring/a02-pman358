import { coinFlips, countFlips } from "./modules/coin.mjs";
import minimist from 'minimist'
import { createRequire } from 'module';
let require = createRequire(import.meta.url)

let args = require('minimist')(process.args.slice(2))
let flips = coinFlips(args.number)

console.log(flips, countFlips(flips))