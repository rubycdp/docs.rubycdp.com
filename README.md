## 🚀 Quick Start

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
