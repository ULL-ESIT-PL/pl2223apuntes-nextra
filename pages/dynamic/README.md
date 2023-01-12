## Introduction

Defining routes by using predefined paths is not always enough for complex applications. 

In Next.js you can add brackets to a page (\[param\]) to create a dynamic route (a.k.a. url slugs, pretty urls, and others).

## Running locally

```
npm install
npm run dev
```

Then visit: http://localhost:3000/nextjs-dynamic-routes


## Next.js dynamic routes references

For more info, see:

1. The lab introduction to the jam stack: <https://dmsi.netlify.app/practicas/nextjs#introduction-to-the-jam-stack-with-nextjs-react-rest-and-netlify>
2. <https://nextjs.org/learn/foundations/from-react-to-nextjs>
3. <https://nextjs.org/docs/routing/dynamic-routes>

## GH deployment with next export

To deploy to GH pages we have used 
`next export` that allow us to export our Next.js application to static HTML,
which can be run standalone without the need of a Node.js server. 
It is recommended to only use `next export` if you don't need any of the 
unsupported features requiring a server.

See <https://nextjs.org/docs/advanced-features/static-html-export>

```
➜  nextjs-dynamic-routes git:(main) npm run build

> from-react-to-nextjs@1.0.0 build
> next build && next export -o docs && touch docs/.nojekyll
```

Also we have added a `.nojekyll` file to the `docs` folder to avoid
Jekyll to process the files.

Furthermore, we have added `basePath` to the `next.config.js` file to
avoid the 404 error when we deploy to GH pages.

```js 
➜  nextjs-dynamic-routes git:(main) ✗ cat next.config.js 
module.exports = {
  //distDir: 'docs',
  basePath: '/nextjs-dynamic-routes'
}
```

The behavior is different from the GitHub deployed page and the local: true dynamicity is lost.

## 404

We have added a custom 404 page to the project. See <https://nextjs.org/docs/advanced-features/custom-error-page>

## The router Object

See <https://nextjs.org/docs/api-reference/next/router>

* `pathname`: String - The path for current route file that comes after `/pages`. 
* `query`: Object - The query string parsed to an object, including dynamic route parameters. It will be an empty object during prerendering if the page doesn't use Server-side Rendering. Defaults to `{}`

## Path

```
➜  nextjs-dynamic-routes git:(main) pwd
$HOME/campus-virtual/2223/learning/nextjs-learning/nextjs-dynamic-routes
```