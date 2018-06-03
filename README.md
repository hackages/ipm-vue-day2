# Hackcamp.Vue with [Vue CLI](https://github.com/vuejs/vue-cli) version 3.0.0-beta.15

## Development server

Run `yarn start` for a dev server. Navigate to `http://localhost:8080/`. The app will automatically reload if you change any of the source files.

## Build

Run `yarn build` to build the project. The build artifacts will be stored in the `dist/` directory.

## ROADMAP

#### Important links

* [Template Syntax and built-in directives](https://fr.vuejs.org/v2/guide/syntax.html)
* [Router](https://router.vuejs.org/)
* [Form Validation](https://baianat.github.io/vee-validate/guide/#features)
* [Vuex](https://vuex.vuejs.org/)
* [Typescript](http://www.typescriptlang.org/docs/home.html)

#### Features:

* Login with email/password
* Validation Form
* Routing to Home and Details page

* Display all mock movies
  * Picture
  * Hover information
* Display all mock categories
* Filter by category
* Make active a category when selected
* Toggle Sidebar
* Implement search in sidebar

#### Breakings:

* Template Syntax & Binding
* Component
* Movies not displayed
* Categories not displayed
* Category selected not styled
* Filtering by categories not working
* Sidebar menu not working
* Search in sidebar not working
* Hovering details movies not working

#### TODO

* Bootstrap the application
* Setup the routing
* Fix issues in Authentication template
* Add Validation on email and password input

  * Email
    * required
    * email => Use the email validators to validate if the input value of email is a real email
  * Password
    * required
    * minLength
    * maxLength

* Fix the Home's template
* Implement the following features

  * Display all mock movies
    * Picture
    * Hover information ()
  * Display all mock categories
  * Filter by category
  * Make active a category when selected
  * Toggle Sidebar
  * Implement search in sidebar

- Use Http to fetch data with Promise (server & doc: https://hackflix-backend-pmuxoperml.now.sh/)

* Fix the Movie-Detail's template
* Display all comments through comment-list
* Implement all todo and fix all errors
  * Validations
    * Author
      * required
      * beginWithUppercaseLetter => to implement
    * Comment
      * required
      * 200 character max
      * If the author contains Harry, you should limit the number of
        character to 100

- Setup vuex

- Now, we will manage all our data in vuex

- let's add handle of the posting, deleting comment through vuex

- Split into several components. Make sure your application is still working

  * MovieList => movie-list
    * Movie => movie
      * MovieHoverInfo => movie-hover-info
  * MovieDetail => movie-detail
  * Menubar => menubar
  * Sidebar => sidebar
  * Header => header

// You should have a application running and working completly with

#### Bonus

* add authentication in vuex
* add search in vuex
* add typescript (strict: true)
* rewrite with vue.extend
* add vue class component


Add CommentCollapse 

