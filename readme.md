# (Enter service name)
(Description of the service)

# Environment variables
(Be sure to describe any environment variables here by maintaining a list like this)

| name     | description      | required | default |            valid            | notes |
|----------|------------------|:--------:|---------|:---------------------------:|-------|
| NODE_ENV | Node environment |    no    |         | development,test,production |       |
| PORT     | Port number      |    no    | 3000    |                             |       |

# Prerequires

Node v8+


# (Checklist)
Once you clone this repository you'll need to make a few changes before you're ready to start:

- [ ] Add service name and description to the README above
- [ ] Check over the content of the 404 and 500 error pages and tailor to suit
- [ ] Update the `package.json` with the name, description and any git urls and authors etc.  
- [ ] Update the [views context data](/server/plugins/views.js#L39) to include the corrct service and default page title
- [ ] Finally, remove the .git folder in the root directory. This will cut the cord to this boilerplate repo.

# Running the application

`$ node index.js`


# glupe

## What is this?

A simple hapi-based enterprise-ready project govuk web boilerplate.
Click here for an  similar [api boilerplate hapi project](https://github.com/DEFRA/hapi-api-boilerplate).

- [hapijs](https://github.com/hapijs/hapi) - Framework
- [standardjs](http://standardjs.com/) - Linting
- [pm2](https://github.com/Unitech/pm2) - Process manager
- [nunjucks](http://mozilla.github.io/nunjucks/) - Default template engine
- [npm-scripts](https://docs.npmjs.com/misc/scripts) - Build tool


## Getting started

Clone this repo and run through the checklist above.

Check the server is running by pointing your browser to `http://localhost:3002`

## Project structure

Here's how to structure your project files.

* **bin** (build tasks)
* **client** (browser code)
* **server**
  * **plugins**
  * **routes**
  * **views**
  * config.js
  * index.js
* **test**
* README.md
* index.js (startup server)

## Config

The configuration file for the server is found at `server/config.js`.
This is where to put any config and all config should be read from the environment.
The final config object should be validated using joi and the application should not start otherwise.

A table of environment variables available should be maintained in this README.

## Plugins

hapi has a powerful plugin system and all server code should be loaded in a plugin.

Plugins live in the `server/plugins` directory.

## Logging

The [good](https://github.com/hapijs/good) plugin is used to bring a flexible logging solution to your application.

[good-console](https://github.com/hapijs/good-console) plugins is included

The logging plugin is only registered in when NODE_ENV=develpomnet. Logging for production should use errbit.

## Views

The [vison](https://github.com/hapijs/vision) plugin is used for template rendering support.

The template engine used in nunjucks inline with the GDS Design System with support for view caching, layouts, partials and helpers.

## Static files

The [Inert](https://github.com/hapijs/inert) plugin is used for static file and directory handling in hapi.js.

## Routes

Incoming requests are handled by the server via routes. 
Each route describes an HTTP endpoint with a path, method, and other properties.

Routes are found in the `server/routes` directory and loaded udsing the `server/plugins/router.js` plugin.

Hapi supports registering routes individually or in a batch.
Each route file can therefore export a single route object or an array of route objects.

A single route looks like this:

```js
{
  method: 'GET',
  path: '/hello-world',
  options: {
    handler: (request, h) => {
      return 'hello world'
    }
  }
}
```

There are lots of [route options](http://hapijs.com/api#route-options), here's the documentation on [hapi routes](http://hapijs.com/tutorials/routing)

## Tasks

Build tasks are created using simple shell scripts or node.js programs.
The default ones are found in the `bin` directory.

The task runner is simply `npm` using `npm-scripts`.

We chose to use this for simplicity but there's nothing to stop you adding `gulp`, `grunt` or another task runner if you prefer. 

The common predefined tasks are:

- `npm start` (Starts the server, reloads on changes if the (development pm2 config)[config.md] is used.
- `npm run build:js` (Builds the browserify client-side javascript)
- `npm run build:css` (Builds the client-side css)
- `npm run lint` (Runs the lint task using standard.js)

### Resources

For more information around using `npm-scripts` as a build tool:

- http://substack.net/task_automation_with_npm_run
- http://ponyfoo.com/articles/choose-grunt-gulp-or-npm
- http://blog.keithcirkel.co.uk/why-we-should-stop-using-grunt/
- http://blog.keithcirkel.co.uk/how-to-use-npm-as-a-build-tool/

## Testing

[lab](https://github.com/hapijs/lab) and [code](https://github.com/hapijs/code) are used for unit testing.

See the test `example/test` for more information.

## Linting

[standard.js](http://standardjs.com/) is used to lint both the server-side and client-side javascript code.

One Style to Rule Them All. No decisions to make. No .eslintrc, .jshintrc, or .jscsrc files to manage. It just works.

It's defined as a build task and can be run using `npm run lint`.