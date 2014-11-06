
# github-compare

  Compare git branches in the GitHub UI, instead of plain old boring `git diff`.

## Example

```bash
$ cd some-repo
$ git checkout some-branch
$ github-compare
$ # opens browser at https://github.com/your-name/some-repo/compare/some-branch...master
```

  Pass a branch name to the cli in order to compare with another branch than master, e.g.

```bash
$ github-compare another-branch
```

  Feel free to create a shorter alias to make this more convenient to use, e.g. `compare`.

## Installation

```bash
$ npm install -g github-compare
```

## License

  MIT

