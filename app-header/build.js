const childProgress = require('child_process');
const { Command } = require('commander');

const program = new Command();

const baseEnv = {
  REACT_APP_TIMESTAMP: `${Date.now()}`,
};

program.command('dev')
  .description('development mode')
  .action(() => {
    const child = childProgress.exec('craco start', {
      env: Object.assign({}, process.env, {
        BROWSER: 'none',
        ...baseEnv,
      }),
    });
    child.stdout.pipe(process.stdout);
    child.stderr.pipe(process.stderr);
  });

program.command('build')
  .description('production mode')
  .action(() => {
    const child = childProgress.exec('craco build', {
      env: Object.assign({}, process.env, {
        GENERATE_SOURCEMAP: 'false',
        ...baseEnv,
      }),
    });
    child.stdout.pipe(process.stdout);
    child.stderr.pipe(process.stderr);
  });

program.parse(process.argv);
