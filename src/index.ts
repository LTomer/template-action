import { getInput, setSecret } from '@actions/core';
const name = getInput('name');

console.log(`Hello ${name}!`);

const regexPattern = getInput('regex');
const ignoreCase = getInput('ignoreCase').toLowerCase() === 'true';

// Use the regex parameter if provided
if (regexPattern) {
  try {
    const regexFlags = ignoreCase ? 'i' : '';
    const regex = new RegExp(regexPattern, regexFlags);
    console.log(`Regex pattern: ${regexPattern}`);
    console.log(`Case-insensitive: ${ignoreCase}`);
    console.log(`Testing regex against name: ${regex.test(name)}`);
    
    // Go over all environment variables and check if variable names match the regex
    console.log('Checking environment variables against regex pattern:');
    const matchingEnvVars: string[] = [];
    
    for (const [envVarName, envVarValue] of Object.entries(process.env)) {
      if (regex.test(envVarName)) {
        console.log(`✓ Environment variable '${envVarName}' matches the pattern`);
        matchingEnvVars.push(envVarName);
        // Set matching environment variables as secrets to mask their values
        if (envVarValue) {
          setSecret(envVarValue);
        }
      }
    }
    
    if (matchingEnvVars.length === 0) {
      console.log('No environment variables match the regex pattern');
    } else {
      console.log(`Found ${matchingEnvVars.length} matching environment variables: ${matchingEnvVars.join(', ')}`);
    }
    
  } catch (error) {
    console.log(`Invalid regex pattern: ${regexPattern}`);
  }
}


