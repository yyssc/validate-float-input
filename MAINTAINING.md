# Maintaining

## First release

- Modify `package.json`, set `version` to `0.0.0`
- run `npm run version:minor` to bump version from v0.0.0 to v0.1.0

## Next release

- run `npm run version:patch` for patch release.

## How to publish

How to update from v0.2.1 to v0.2.2, and publish to npm

run test

```
npm run test
```

Modify `CHANGELOG.md` to add information for v0.2.2

```
npm run version:patch
```
