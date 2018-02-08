/*
  When I saw all that info in the navigation bar I decided to make a small template for that
  (was to lazy to write all that in just html), so using a semantic templates looked like a good idea
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
  constructor(isActive, pimaryNavItem) {
    this.active = isActive;
    this.pimaryNavItem = pimaryNavItem;
  }
  showSecondaryMenu() {
    const primaryNavItems = document.querySelectorAll("[data-menu-type='primary']");
    if (this.active === "false") {
      this.pimaryNavItem.setAttribute('data-active', 'true');
      console.log('false')
      for (const primaryNavItem of primaryNavItems) {
        primaryNavItem.classList.remove('active');
      }
      this.pimaryNavItem.classList.add('active');
      return false;
    } else {
      console.log('verdadero')
      this.pimaryNavItem.classList.remove("active");
      this.pimaryNavItem.setAttribute('data-active', 'false');
      return false;
    }
  }
  checkValues() {
    // console.log("active: ", this.active)
    // console.log("pimaryMenuItem: ", this.pimaryNavItem)
    // console.log("secondaryMenuItem: ", this.secondaryNavItem)
  }
}

window.onload = () => {
  // Adds functionality to all menu items that contains a secondary menu defined in data-menu-type attribute
  const primaryMenuItems = document.querySelectorAll("[data-menu-type='primary']");
  for (const primaryMenuItem of primaryMenuItems) {
    for (const menuItemChild of primaryMenuItem.children) {
      primaryMenuItem.children.length > 1 && menuItemChild.hasAttributes("[data-menu-type='secondary']") ?
      primaryMenuItem.addEventListener('click', event => {

        // Prevents default "hash" in uri
        event.preventDefault()

        // Prevents event from firing twice
        event.stopImmediatePropagation();

        // Sets variables to work with
        const isActive = event.target.getAttribute('data-active');
        const pimaryNavItem = event.target;

        // Initializes class
        const navFuncitonality = new NavFunctionality(isActive, pimaryNavItem);
        navFuncitonality.checkValues()
        navFuncitonality.showSecondaryMenu()
        return false;
      }) : false;
    }
  }
}
