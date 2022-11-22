import { createRequire } from 'module';
const require = createRequire(import.meta.url);

import { franc } from 'franc';
const langs = require('langs');

import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';


const rl = readline.createInterface({ input, output });
const languageInput = await rl.question('Enter language text: ');
rl.close();

const languageCode = franc(languageInput);


if (languageCode == 'und') {
    console.log('Not enough information to determine language');
}
else {
    const resultLanguage = langs.where('3', languageCode);
    console.log(resultLanguage.name);
}

