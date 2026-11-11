# my_portfolio

Portfolio for a product and web designer, rebuilt in Next.js after the structure, design system and motion of the FolioBase Framer template. All copy and images here are placeholders.

## Stack

| Area | Choice |
| --- | --- |
| Framework | Next.js 16 (App Router), React Compiler on |
| UI | React 19.3, TypeScript (strict, `^7`) |
| Styling | Tailwind CSS v4, CSS-first in `src/app/globals.css`, no `tailwind.config` |
| Motion | Motion for entrance animations and the cursor spring, Lenis for smooth scroll |
| Font | Geist (`geist` package) |
| Lint | ESLint 10 with `eslint-config-next`, zero warnings allowed |
| CI runtime | Node.js 22 (`.nvmrc`) |

## Develop

```bash
npm ci
npm run dev        # http://localhost:3000
npm run lint       # eslint, zero warnings allowed
npm run typecheck  # tsc --noEmit
npm run build
```

## How changes land

Two long-lived branches. `dev` is where work lands and `main` is the release branch. Do not push to either. The rulesets in `.github/rulesets/` block direct pushes, force-pushes and deletion. A change lands only through a pull request, only as a merge commit, and only after the **CI passed** check is green. No human review is required.

1. Open a GitHub issue and note the number.
2. Branch from `origin/dev` with one of the prefixes `feat/`, `fix/`, `docs/`, `ci/` or `build/`, number first, for example `feat/12-short-description`.
3. Commit with a Conventional Commit subject, for example `feat(home): short description`. A `Closes #12` line is optional because the branch name already carries the number.
4. Push. Three workflows take it from there:
   - **Open pull request** (`.github/workflows/open-pull-request.yml`): a prefix branch opens a pull request into `dev`. A push to `dev` opens or updates the `dev` into `main` pull request and writes the `Closes #N` lines that close the issues.
   - **CI** (`.github/workflows/ci.yml`): runs on every pull request and on pushes to `dev` and `main`. Jobs: *Lint and type check*, *Build*, and *CI passed*, the single check the rulesets require.
   - **Merge passing pull request** (`.github/workflows/merge-passing-pr.yml`): after CI succeeds on a pull request, merge-commits it if the head is still the validated commit. Eligible: a prefix branch into `dev`, and `dev` into `main`.

Production is deployed by Vercel from its Git connection, with Production tracking `main`. GitHub Actions never deploys. Dependabot opens weekly pull requests into `dev` for npm and GitHub Actions. A person merges or closes those.

### Commit co-authors

Every commit message ends with these trailers, after a blank line and with nothing after them:

```
Co-authored-by: shark314 <112891100+shark314@users.noreply.github.com>
Co-authored-by: amazing-soft-dev <208959585+amazing-soft-dev@users.noreply.github.com>
```

### Tokens

The workflows use the `GH_TOKEN` repository secret instead of the default `GITHUB_TOKEN`, because pull requests opened or merged with the default token do not start the next workflow. The token is a fine-grained personal access token of the `tomost8` account with access to this repository only. It expires, and when it does the pull request automation stops without an error on the pushes. Check the expiry date when a branch does not get its pull request, and renew the secret.

Locally, keep the token in a Windows variable named `TOMOST8_GH_TOKEN`, never in `GH_TOKEN` or `GITHUB_TOKEN` (those names are read automatically by `gh` and would clash with other accounts). Do not commit tokens. `.env*` is ignored.

### One-time bootstrap

`merge-passing-pr.yml` starts from a `workflow_run` trigger, and GitHub runs those from the default branch. Until the workflows are on `main`, the first two pull requests (the pipeline branch into `dev`, then `dev` into `main`) are merged by hand with `gh pr merge --merge` once CI is green. After that everything is automatic. Import the rulesets last:

```bash
gh api repos/tomost8/my_portfolio/rulesets --method POST --input .github/rulesets/dev.json
gh api repos/tomost8/my_portfolio/rulesets --method POST --input .github/rulesets/main.json
```

## License

MIT
