/*
  When I saw all that info in the navigation bar I decided to make a small template for that (I was to lazy
  to write all that in just html), so using a semantic templates with Handlebars js library looked like a good idea
 */

// Gets Template with HTML & Handlebars syntax
const source = document.getElementById("navbar-template").innerHTML;

// Compiles (source) HTML & Javascript
const template = Handlebars.compile( source );

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
document.getElementById("navbar").innerHTML = template(data);

class NavFunctionality {
  constructor(isActive, primaryNavItem) {
    this.active = isActive;
    this.primaryNavItem = primaryNavItem;
    this.allNavItems = document.querySelectorAll("[data-menu-type='primary']");
    this.overlay =  document.getElementById('bg-overlay');
    this.mobileMenu = document.getElementById('vertical-menu');
    this.mobileMenuClose = document.getElementById('close-menu');
    this.mobileMenuOpen = document.getElementById('open-menu');
    this.mobileMenuIcon = document.getElementById('logo-menu');
  }
  showSecondaryMenu() {
    // this validation could have been parsed but I'm tring to save code lines
    if (this.active === "false") {
      for (const primaryNavItem of this.allNavItems) {
        primaryNavItem.classList.remove('active');
        primaryNavItem.setAttribute('data-active', 'false');
      }
      this.primaryNavItem.classList.add('active');
      this.primaryNavItem.setAttribute('data-active', 'true');
      return false;
    }
    this.closeMenu()
  }
  closeMenu() {
    for (const navItem of this.allNavItems) {
      navItem.classList.remove('active');
      navItem.setAttribute('data-active', 'false');
    }
    if (window.screen.width > 768) {
      this.overlay.style.display = 'none'
    }
  }
  openResponsiveMenu() {
    this.overlay.style.display = 'block'
    this.mobileMenu.style.left = '0'
    this.mobileMenuIcon.style.display = 'block'
    this.mobileMenuClose.style.display = 'block'
    this.mobileMenuOpen.style.display = 'none'
  }
  closeResponsiveMenu() {
    this.overlay.style.display = 'none'
    this.mobileMenu.style.left = '-100vw'
    this.overlay.style.display = 'none'
    this.mobileMenuIcon.style.display = 'none'
    this.mobileMenuClose.style.display = 'none'
    this.mobileMenuOpen.style.display = 'block'
  }
}

window.onload = () => {

  const navFuncitonality = new NavFunctionality();
  const overlay = document.getElementById('bg-overlay');

  document.getElementById('open-menu').addEventListener('click', () => {
    navFuncitonality.openResponsiveMenu()
  })
  document.getElementById('close-menu').addEventListener('click', () => {
    navFuncitonality.closeResponsiveMenu()
  })

  // Adds functionality to all menu items that contains a secondary menu defined in data-menu-type attribute
  const primaryMenuItems = document.querySelectorAll("[data-menu-type='primary']");

  overlay.addEventListener('click', () => {
    event.stopImmediatePropagation();
    navFuncitonality.closeMenu()
    navFuncitonality.closeResponsiveMenu()
  })

  for (const primaryMenuItem of primaryMenuItems) {
    for (const menuItemChild of primaryMenuItem.children) {
      if (primaryMenuItem.children.length > 1 && menuItemChild.hasAttributes("[data-menu-type='secondary']")) {
        // Sets an extra class for the navigation items with a secondary menu
        primaryMenuItem.classList.add('arrow-down')

        primaryMenuItem.addEventListener('click', event => {

          // Prevents default "hash" in uri
          event.preventDefault()

          // Prevents event from firing twice
          event.stopImmediatePropagation();

          overlay.style.display = 'block'

          // Sets variables to work with
          const isActive = event.target.getAttribute('data-active');
          const primaryNavItem = event.target;

          /* Initializes class. "NavFunctionality" receives two parmeters a string with
            either false or true and the navigation item node */
          const navFuncitonality = new NavFunctionality(isActive, primaryNavItem);
          navFuncitonality.showSecondaryMenu()
        })
      }
      primaryMenuItem.addEventListener('click', event => {
        navFuncitonality.closeMenu()
      })
    }
  }

  // Press esc to close modal
  document.addEventListener('keyup', () => {
    navFuncitonality.closeMenu()
  })

}
