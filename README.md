# Tayls Site

This is the site for my personal site.

## Developing

This project uses SST to deploy and run the development servers. Before you get started, you need an account via the tayls.dev AWS organization. Additionally, if you are not familiar with SST, review their [documentation](https://sst.dev/docs/)

### Required dependencies

- Node, pnpm, the normal bits
- sqlite3

### Developing

- Run `pnpm sst dev`
  -- This runs `pnpm sst dev pnpm vite:dev`, which will run the project with all linked components via SST, along with running the dev server to run the site.  
  -- See the CLI docs [here](https://sst.dev/docs/reference/cli#dev)
  -- You should be able to access the site locally at [http://localhost:5173](http://localhost:5173)
