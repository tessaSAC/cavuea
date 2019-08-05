console.dir(module.exports)
module.exports = process.env.PRE_COMMIT
  ? {
    '*.{png,jpeg,jpg,gif,svg}': ['imagemin-lint-staged', 'git add'],
  }

  : {
    '*.js': [
      'yarn lint',
    ],
    '{!(package)*.json,*.code-snippets,.!(browserslist)*rc}': [
      'yarn lint::prettier --parser json',
      'git push',
    ],
    'package.json': ['yarn lint:prettier', 'git push'],
    '*.vue': [
      'yarn lint',
      'git push',
    ],
    '*.scss': ['yarn lint:prettier', 'git push'],
    '*.md': ['yarn lint:prettier', 'git push'],
  }
