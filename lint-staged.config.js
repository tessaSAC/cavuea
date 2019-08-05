console.dir(module.exports)
module.exports = process.env.PRE_COMMIT
  ? {
    '*.{png,jpeg,jpg,gif,svg}': ['imagemin-lint-staged', 'git add'],
  }

  : {
    '*.js': [
      'yarn lint',
    ],
    // '{!(package)*.json,*.code-snippets,.!(browserslist)*rc}': [
    //   'yarn lint::prettier --parser json',
    //   'git add',
    // ],
    // 'package.json': ['yarn lint:prettier', 'git add'],
    // '*.vue': [
    //   'yarn lint',
    //   'git add',
    // ],
    // '*.scss': ['yarn lint:prettier', 'git add'],
    // '*.md': ['yarn lint:prettier', 'git add'],
  }
