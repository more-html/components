# 1. Prefix

## Status

Accepted

## Context

To not interfer with standard tags web components are always prefixed with a word and a dash, 
like so <more-h1>.

## Decision

In order to make it not too long and easy to use, this project uses the prefix "more".
Which means a tag looks like this `<more-h1>` and an is-attribute does too, e.g. like this
`<h1 is=more-h1>`. 

## Consequences

+ One consisitent prefix for all components.
- not as short as some web components do it, just one character, but hopefully less probable to collide with others
- might collide with others since "more" is a normal word