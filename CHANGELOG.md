# Next version
- [ ] Feature detect CBEs properly and only load comp when CBEs work, e.g. in Safari
- [ ] On touch devices, show the link onclick, hide it on a second click.
- [ ] use the examples page(s) for automated tests
- [ ] load CBEs polyfill (for WebKit)? 
- [ ] allow the more-hX to be configured to show a tooltip and allow copying the URL, see https://developers.google.com/analytics/devguides/collection/analyticsjs/field-reference#nonInteraction for inspiration, pretty neat, just that the link is ONLY for copying

# v3.0.0

- [x] remove nix setup, replace by docker, way more compatible with the real world
- [x] Use `id` attribute as hash if given. This is the normal style, so we should be compatible with it.
- [x] Remove `hash` attribute, cant be jumped to, at least I see no easy way now.
- [x] make examples look at least a bit nice, use ps styles
- [x] show the link by default, so using the component right away results in a visible result/improvement to the page
      this is mainly a DX feature
- [ ] make it work on current picostitch.com
  - [x] use the nicer link icons not the hashtag (or unicode char)
  - [ ] handle (or ignore) line break when the link-symbol causes it  

# v2.0.0

- [x] Apply colors of the actual heading element.
- [x] Attribute to statically show the link icon, just like MDN does it.
- [x] Rename the attribute `slug` to `hash`. Since it is the URL hash, that gets added.
- [x] Auto generate the hash if none given.
- [x] Apply style of the slotted element.
- [x] Render the link-icon to the left/right of the headline, depending on rtl setting, if there is space
- [x] Switched approach to CBEs (see [./SOLUTIONS.md])

# v1.0.0

- [x] Make `npm start` provide a dev env
- [x] Setup release scripts, including CHANGELOG check
- [x] Make the example page
- [x] Make the first version work without JS (without fancyness)
- [x] Build a version work WITH JS, as a web component (requiring a `slug` attribute)
- [x] Describe the development process
- [x] Document what the component shall do

# Ideas
- [ ] add "copy URL" icon to headings
- [ ] Move the `check-todo-list.js` into it's own repo, including the description how and why to use it.
- [ ] Write out some project guidelines (like gold standard, progressive enhancement by default, etc.)
      Every component in this orga can also use a different web component compiling framework/library, in the
      end it has to deliver a web component, no matter if it is with pure JS, stencil, skate, etc.
- [ ] Plan/Write about the core/loader component, which can be loaded for common web-component loading/polyfilling/etc.
      will land in a separate repo some day (might start out being embedded in here)
- [ ] Allow passing in a template which shall be used as the link icon.
- [ ] Use a lib that does special character replacing for hash building.
- [ ] Use hamjest for more explicit error messages.
- [ ] Do the render-when-ready trick, to prevent flickering in case the component changes the rendering.
- [ ] Write proper tests, that ensure it works in the browser as expected (pupeteer?).
- [ ] `<script src="MoreHtmlHeading.js?debug"` When loading with debug show messages like "Missing `id` attribute, no link rendered, etc." 
- [ ] provide senseful properties main, types, module, browser in package.json
- [ ] handle attributes to replace existing heading tags automatically,
      `<script defer async data-upgrade-h1 type="module" src="../src/Heading-loader.js"></script>` 
      like `data-upgrade-h1`, `data-upgrade-h2`, `data-upgrade-h3`,
      `data-config-h1-show-link`, `data-config-h2-show-link`
      rendered tags CAN NOT be upgrade see https://picostitch.com/tidbits/2020/06/html-elements-not-upgradable-to-cbes/
      if the above shall work we need to replace the existing heading node, which is heavy
      so it should not be the default
