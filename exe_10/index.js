import chalk from 'chalk';
import { suma, multiplica } from './controller.js'

const mul = multiplica(suma(1,2), suma(4,5));
console.log(chalk.green(mul));