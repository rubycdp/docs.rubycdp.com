## Quick Start

```bash
git submodule init
git submodule update --recursive --remote
```

### Prerequisites

- Node.js 20 or higher
- npm (comes with Node.js)

### Installation

```bash
npm install
```

### Local Development

```bash
npm start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```bash
npm run build
```

### Build Errors

If you encounter build errors:

```bash
npm run clear  # Clear Docusaurus cache
npm install    # Reinstall dependencies
npm run build  # Try building again
```

## How docs are published

The site is Docusaurus, built from the Markdown in `docs/`. The pages come from the `docs/` folder of three projects,
tracked as submodules in `projects/`: [ferrum](https://github.com/rubycdp/ferrum),
[cuprite](https://github.com/rubycdp/cuprite) and [vessel](https://github.com/rubycdp/vessel).

Docs are published on release, not on every commit to a project's `main`:

1. A `v*` tag is pushed in a project repo.
2. That repo's `.github/workflows/docs.yml` sends a `docs-release` `repository_dispatch` event to this repo, with the
   project name and tag.
3. `.github/workflows/sync.yml` here checks out `projects/<name>` at the tag, runs `rake sync_docs`
   (deletes the project's `docs/<name>/*.md`, then copies `projects/<name>/docs/*.md`), commits
   `docs(<name>): sync docs for <tag>` to `master` and triggers `deploy.yml`.
4. `deploy.yml` builds the site and publishes it to GitHub Pages.

If nothing changed, the sync exits without a commit or deploy. Deploy is triggered explicitly because pushes made with
`GITHUB_TOKEN` don't trigger other workflows.

### Manual sync

Run it from the Actions tab (Sync docs), or:

```bash
gh workflow run sync.yml -f project=ferrum -f tag=v0.20.1
```

The tag must look like `v1.2.3`. It must contain a `docs/` folder, otherwise the project is skipped. To redeploy
without syncing, run the `Deploy to GitHub Pages` workflow.

### Adding a project

1. Add the submodule and a `projects` entry in the `Rakefile`.
2. Add the project to the allowlist and choices in `.github/workflows/sync.yml`.
3. Copy `.github/workflows/docs.yml` from another project, change the `project` value and add the
   `DOCS_DISPATCH_TOKEN` secret.

### Reminders

- **Token expiry.** The project repos authenticate with the `DOCS_DISPATCH_TOKEN` secret, a fine-grained PAT with
  Contents: write on this repo (1 year max). When it expires, the dispatch fails in the project's `Docs` workflow and
  the site silently stops updating. Create a new PAT, then update the secret in each project repo (or at org level):
  `gh secret set DOCS_DISPATCH_TOKEN --repo rubycdp/<project>`.
- **Docs lag releases.** Changes merged to a project's `main` appear only after the next release tag.
- **No tag, no docs.** A project with docs but no release containing them (vessel before `v0.3.1`) stays at the
  submodule commit recorded here until it is tagged.
- **Don't edit `docs/<project>/*.md` here.** The next sync overwrites it. Fix it in the project repo.
  `_category_.json` files are kept and are edited here.
- **Default branch is `master`.** The workflows push to and deploy from it.
