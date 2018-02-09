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
const data = {
  nemus_items: [
    {
      name: "Work",
      url: "#"
    },
    {
      name: "About",
      url: "#",
      secondary: [
        "What we do", "How we work", "Leadership"
      ]
    },
    {
      name: "Careers",
      url: "#",
      secondary: [
        "Client Services", "Creative", "Motion & Media", "Operations", "People", "Strategy", "Technology", "UX & Product Design"
      ]
    },
    {
      name: "Ideas",
      url: "#",
      secondary: [
        "Reports", "Perspectives", "Books", "Videos"
      ]
    },
    {
      name: "News",
      url: "#"
    },
    {
      name: "Events",
      url: "#"
    },
    {
      name: "Contact",
      url: "#",
      secondary: [
        "Atlanta", "Brooklyn", "DC", "London", "Los Angeles", "Oakland", "Toronto"
      ]
    }
  ]
};

// Inserts the data to navbar section
document.getElementById('navbar').innerHTML = template(data)
