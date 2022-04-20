import { coinFlips, countFlips } from "./modules/coin.mjs";
import minimist from 'minimist'

let args = minimist(process.args.slice(2))
let flips = coinFlips(args.number)

console.log(flips, countFlips(flips))