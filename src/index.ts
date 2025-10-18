import { getInput, setSecret } from '@actions/core';
const name = getInput('name');

console.log(`Hello ${name}!`);


// Set an environment variable as a secret
// This will mask the value in GitHub Actions logs
const secretValue = process.env.my_var || '';
setSecret(secretValue);