# SPOOKY STORY >:] <!-- omit in toc -->


![wireframe](./public/images/NITM-Wireframe.png)

[click this link to view this project's proposal](https://docs.google.com/document/d/1ewPnESOPCw304MIXz6Bu2y17ucfuHVgr6pkjIWyUSzs/edit#heading=h.kpv7qq2z2hft)

This site is for users who enjoy nostalgic horror stories with a modern twist. "The House with the Comically Bad Yelp Review" creates an immersive experience where users can put their intuition to the test and see if they would survive a night in a haunted house. Features include animation, a login/signup page, a comments section, and a spooky animated ghost "home button".

- [Development](#development)
- [Sessions](#sessions)
- [Authentication](#authentication)
- [Templates](#templates)
- [Code Style](#code-style)
- [Deploy to Heroku](#deploy-to-heroku)


## Development

This boilerplate includes [nodemon](https://nodemon.io/). Run `npm run watch` to start the server in watch mode during development.

## Sessions

[express-session](https://www.npmjs.com/package/express-session) and [connect-session-sequelize](https://www.npmjs.com/package/connect-session-sequelize) are used for session management. Configure cookies and sessions in [config/session.js](./config/session.js)

## Authentication

Passwords are hashed using [bcrypt](https://www.npmjs.com/package/bcrypt). Middleware for protected routes redirects to `/login`. This can be modified by updating [util/withAuth.js](./util/withAuth.js).

## Templates

[Handlebars.js](https://handlebarsjs.com/) and [express-handlebars](https://www.npmjs.com/package/express-handlebars) are used for rendering templates.

You can add your own custom helper functions by exporting them from [util/helpers.js](./util/helpers.js).

## Code Style

[ESLint](https://eslint.org/) and [Prettier](https://prettier.io/) are included for enforcing consistent code quality and format. The default configuration includes the ESLint recommended plugin, the Prettier plugin, plus a couple of additional rules. Modify [.eslintrc.js](./.eslintrc.json) to customize the rules.

## Deploy to Heroku

### Prerequisites

Sign up for an [Heroku](https://id.heroku.com/login) account and install the [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli).

The app must be setup using Git for version control in order to deploy on Heroku
following this guide. Be sure to initialize Git before proceeding if you did not
initially create this project by using the template repo.

### Create and Configure a Heroku App

The code for this boilerplate is pre-configured to deploy to Heroku and connect to the JAWS DB add-on for MySQL. In order to deploy, you must provision the JAWS DB add-on.

**IMPORTANT:** Payment info. must be provided in order to use the JawsDB MySQL
add-on. You must provide a credit card to use the service. **With the exception that all of you must be using the student package**

1. Create a Heroku app in the command line. `heroku create <optionally-provide an app name>`

2. Provision the [JawsDB MySQL add-on](https://elements.heroku.com/addons/jawsdb) with the free pricing plan. `heroku addons:create jawsdb:kitefin`

3. Add environmental variables to the heroku config. The boilerplate uses
   `SECRET` to sign the session id cookie. Use a tool to generate a long
   randomized string for this value. (e.g. `hsKVlvYcC5b#Fw1FS*qz`) Add `SECRET`
   to config by running `heroku config:set SECRET=<your long random secret>`.

4. Use the same command to add any other environmental variables required for
   your app to function. (`heroku config:set <name>=<value>`)

5. Deploy the app by running `git push heroku main`. (Use the command again to deploy updates.)

6. Open your app in the browser with `heroku open`.

### Seed JawsDB

Running `heroku run npm run seed` will run the seed script in Heroku if your
seeds are required for production.
