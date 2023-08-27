# tagged-classnames-free

[![NPM version](https://img.shields.io/npm/v/tagged-classnames-free?color=a1b858&label=)](https://www.npmjs.com/package/tagged-classnames-free)

## Usage

```tsx
import { cls, tw } from 'tagged-classnames-free'

const className = tw`mx-auto max-w-4xl`
const className = cls`
  w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto
  object-cover
`
const className = tw`text-lg ${moreClassName}`
```

## Functions

### [`cls`](./src/cls.ts)

Based on [clsx](https://github.com/lukeed/clsx), support inline comment. Free to use [`clsx` supported expressions](https://github.com/lukeed/clsx#usage).

### [`tw`](./src/tw.ts)

Based on [cls](#cls), support inline comment. Merge Tailwind CSS classes without style conflicts by [tailwind-merge](https://github.com/dcastil/tailwind-merge).

## Furthermore

### Developer eXperience

**Wrap/unwrap** tagged classnames by functions or html tags at sometime is unavoidable, you must **NOT** want to **indent/dedent** manually.

Luckily, [eslint-plugin-unicorn](https://github.com/sindresorhus/eslint-plugin-unicorn) has a **[template-indent](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/template-indent.md)** rule for us to auto indent/dedent.

### Runtime performance

You might also worried about the package increase extra burdens to **runtime performance? Don't worry.** there is a plugin [`unplugin-polish-tagged-templates`](https://github.com/yunsii/unplugin-polish-tagged-templates) to optimize for you.

After enhanced by [`unplugin-polish-tagged-templates`](https://github.com/yunsii/unplugin-polish-tagged-templates), feel free to use `cls` and `tw` tags.

> _Try **overall features** on [Gitpod](https://gitpod.io/#https://github.com/yunsii/tagged-classnames-free)._

## Build & Publish

- `npm run build`
- `npx changeset`
- `npx changeset version`
- `git commit`
- `npx changeset publish`
- `git push --follow-tags`

> [`changeset` prerelease doc](https://github.com/changesets/changesets/blob/main/docs/prereleases.md)

## License

[MIT](./LICENSE) License © 2023 [Yuns](https://github.com/yunsii)
