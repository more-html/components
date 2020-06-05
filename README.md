# Components
This repo provides several web components that just enhance HTML.
Some are provided as pure web components ala `<more-somecomponent>`
and others can be used via customized built-in elements (CBEs [read more on MDN][cbes]), 
such as `<h1 is=more-h1>`
which enhances an H1 with certain functionality.
See the [examples] for some more in depth explanation and examples.

Unfortunately not all browsers implement
custom elements completely (esp. not the customized built-in part, which is also used).
Polyfills might be required. But the main goal here is to provide a working version, 
even less featured, degrade gracefully or enhance progressively.
Meaning, if certain features are not provided by the browser the functionality is either
not available or just limitted, therefore you should not rely on any of the features provided here.
Just use the components to enhance the site experience not to rely on it!

[examples]: https://more-html.github.io/components/examples/ 
[cbes]: https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements

## Heading Components
Enhance `<h1>`, `<h2>`, etc. by adding a "#" after it, which links to the
headline, in case it has an `id` attribute.

**How to use it?** 
- Add `<script type="module" async defer src="https://more-html.github.io/components/src/Heading-loader.js"></script>`
  in your HTML page.
- Enhance all H1 tags with the `is` attribute like this: `<h1 is=more-h1 id="...">...</h1>`
- Make sure the H1 tags have an `id` attribute, otherwise no link-symbol will show up.
- Done, you should see the link-symbol show up behind the headline text and it should be clickable and link straight to this headline.
- Add the attribute `show-link-on-mouseover` (no value needed) to NOT render the link symbol right away, but just on hover.

[heading-examples]: https://more-html.github.io/components/examples/heading.html 

## Development

- clone the repo 
- `cd <here>`
- `./run.sh bash` will build and start a docker container in there the runtime is setup (currently nodejs)
- `npm i`  to install all npm dependencies
- `npm start` starts a local http server and 
- you can visit http://localhost:48001/examples/ and see the examples working and being served
  from this directory
- edit, change, develop, no bundling, no coffee drinking, no tweeting, no waiting, just develop
