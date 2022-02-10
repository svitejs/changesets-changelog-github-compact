# @svitejs/changesets-changelog-github-compact

a more compact version of the [@changesets/changelog-github](https://github.com/changesets/changesets/tree/main/packages/changelog-github) changelog generator

## Installation

```bash
pnpm i -D @svitejs/changesets-changelog-github-compact
```

## Usage

set changelog in your `.changeset/config.json` to
```json
"changelog": ["@svitejs/changesets-changelog-github-compact", { "repo": "org/repo" }]
```

## comparison

### changelog-github

- [#PR-ID](#) [`commit`](#) Thanks [@user](#)! - some description for a changeset with a PR and commit
- [`commit`](#) Thanks [@user](#)! - some text description some description for a changeset without a PR

### changelog-github-compact
- some description for a changeset with a PR and commit ([PR](#))
- some description for a changeset without a PR ([commit](#))

## additional features

### auto-links in changeset descriptions
If you use `(see #123)`,`(fix #123)` or `(fixes #123)` in a changeset description, the `#123`will automatically be linkified to the corrosponding issue in your repo

example:
- some description (fixes [#123](#)) cool, huh? ([PR](#))
## License

[MIT](./LICENSE)
