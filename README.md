# webpack
## my summary.

***

### Lessons from Kantor's screencast.
#### [learn.javascript.ru](https://learn.javascript.ru/screencast/webpack "learn.javascript.ru")

***

### Lesson 1
#### Introduction

Why webpack?

* Common build system
* php? java? Gulp/grant?... Integration with all languages and build systems
* Dynamic loading? Yep!
* AMD, UMD? Old and ugly modules? Yep!
* Preprocessors ❤
* Live Reload? Yep, advanced.
* ...

***

### Lesson 2
#### Simple build - simple configuration

*Install wepback globally* `[sudo] npm i -g webpack`.

Create configuration file *webpack.config.js*.

All documentation you can find in [webpack.github.io/docs](webpack.github.io/docs/).

`entry` - told us about what we mast to build (input file).
`output` - told us about where we mast to build (output file).

Start by `webpack` command.
Also you can use `webpack --help` to see more arguments for cl.

To see everything what we guilt we need server. For this lesson will be enough to use static server.
Install static server: `[sudo] npm i -g node-static`

***

### Lesson 2.2
#### Library and adding variables

To add possibility to invoke any build function somewhere else, just add into config field `library` with the name of new variable.

***

### Lesson 2.3
#### Add watch

To add watch option just add into config file new option `watch: true [expression]`

You can make build process more faster by add option `watchOptions: {aggregateTimeout: int}`, default value is 300.

***

### Lesson 2.4
#### Source maps

You can add `debugger` to see what is gone wrong

Source-map is very useful for debugging process through browser debug tools (sources)
It's divide whole js code in modules.
**docs** [devtool](http://webpack.github.io/docs/configuration.html#devtool)

***

### Lesson 2.5
#### Environment, NODE_ENV

Variable environment help us to divide build process and build it with different goal.
For example for development or for production/

To create such variable we need to add in config file new variable into object `process.env`

To use it in outside scripts we should:
- add plugin `environment plagin`
    - install webpack locally `npm i webpack`
    - add in config file array of plugins `plugins: [new webpack.EnvironmentPlugin([NODE_ENV, USER, ...])]`
