# Ideas for Components or CBEs (one could build)

## `is=more-li-toc`
Feature list:
- optionally generate the toc content
- render the toc, e.g. position=fixed when scrolling up
- when scrolling highlight the toc-item which is visible on the page

The code might look likes this:
- `<ul is=more-li-toc><li is=more-li-toc-item>Heading</li>`
- `<ul is=more-li data-toc><li>Heading</li>`

## `<more-tldr>`
Mark one or many parts in an article with `<more-tldr>` tags.
Using that one can generate a "TL;DR" chapter at the top of the article which contains
all the things marked enclosed in `<more-tldr>`.

## `<a href="" is="more-a-git-commit">`
When hovering over a link starting with "https://github.com/???" show the code
or a preview of the code. If a range of lines are linked show the code on hover.

The code might look like this:
- `<a href="" is="more-a" data-git-commit>`
- `<a href="" is="more-a-git-commit">`
- `<more-git-commit>`

## Syntax highlighter
Feature ideas:
- syntax highlight when come into view
- highlight on demand
- dark mode switch
- add line numbers

The code might look like this:
- `<code is=more-code-syntax-highlight>`
- `<code is=more-code data-sytnax-highlight>`

## `is=more-sharable`
One example article:

I wanted to upgrade all picostitch sites automatically by just including a <script> 
which upgrades all headings on the page and adds this functionality.
`<span is=more-sharable>`It is not possible to upgrade a parsed and rendered element (like an H1) afterwards.`</span>`
There is a very good longer explanation of that on stackoverflow.

The `is=more-sharable` marks text that can be used to share (on social media).
This might allow to auto generate tweets, etc.

## Others
- spoiler
- abstract
- highlight anchor
