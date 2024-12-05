# Go website template

Meant to bootstrap a go run website

## Requirements

- [Air](https://github.com/cosmtrek/air)
- [TailwindCSS Standalone](https://tailwindcss.com/blog/standalone-cli)
- Browser Sync: `npm install -g browser-sync`

## Stack

- **Server:** [Golang](https://go.dev). Go is used to serve all the assets, handle the state, and compile the templates. the `text/template` library is used to handle html templating. These templates live in `./templates`.
- **Server Reactivity:** [HTMX](https://htmx.org). HTMX is used to efficiently communicate from the client to the server, and update elements in the DOM without re-rendering the entire page.
- **Client Reactivity:** [AlpineJS](https://alpinejs.dev). Alpine is used anywhere it does not make sense to use HTMX. This includes handling client state such as menus being open, etc.
- **Styling:** [TailwindCSS](https://tailwindcss.com). Tailwind css is used to statically compile all lazy css classes to full form css inside of `./public/css/styles.css`.

## Development

The `./dev.sh` script will handle creating a development runtime that will automatically recompile the app on any changes, and refresh those changes to the browser. The server will run on `http://localhost:3000`, and the browser update proxy will be on `http://localhost:3001`. Use this endpoint for viewing in the browser.

## Deployment

TODO