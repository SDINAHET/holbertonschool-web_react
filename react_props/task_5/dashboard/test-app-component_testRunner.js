#!/usr/bin/env node
/* eslint-env node */

// Minimal runner: executes only this spec and prints OK/NOK.
const { spawnSync } = require('node:child_process');

try {
  const jestBin = require.resolve('jest/bin/jest.js');

  const res = spawnSync(
    process.execPath,
    [jestBin, '--runInBand', '--silent', 'test-app-component.spec.js'],
    { encoding: 'utf8' }
  );

  // Uncomment to debug locally:
  // console.log(res.stdout);
  // console.error(res.stderr);

  console.log(res.status === 0 ? 'OK' : 'NOK');
  process.exitCode = res.status === 0 ? 0 : 1;
} catch {
  // If anything goes wrong resolving or spawning Jest.
  console.log('NOK');
  process.exitCode = 1;
}
