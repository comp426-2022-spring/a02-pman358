import { coinFlips, countFlips } from "./modules/coin.mjs";
import { createRequire } from 'module';
let require = createRequire(import.meta.url)

let args = require('minimist')(process.argv.slice(2))
let flips = coinFlips(args.number)

console.log(flips, countFlips(flips))