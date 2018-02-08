'use strict'
/*
  When I saw all that info in the navigation bar I decided to make a small template for that (I was to lazy
  to write all that in just html), so using a semantic templates with Handlebars js library looked like a good idea
 */

// Gets Template with HTML & Handlebars syntax
const source = document.getElementById('navbar-template').innerHTML

// Compiles (source) HTML & Javascript
const template = Handlebars.compile(source)

// Defines all navbar info via json
const data = require('navbar_data.json')

// Inserts the data to navbar section
document.getElementById('navbar').innerHTML = template(data)
