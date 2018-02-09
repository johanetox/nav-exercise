'use strict'

window.onload = () => {

  const navFuncitonality = new NavFunctionality()
  const overlay = document.getElementById('bg-overlay')

  // Adds functionality to all menu items that contains a secondary menu defined in data-menu-type attribute
  const primaryMenuItems = document.querySelectorAll('[data-menu-type="primary"]')

  for (const primaryMenuItem of primaryMenuItems) {
    for (const menuItemChild of primaryMenuItem.children) {
      if (primaryMenuItem.children.length > 1 && menuItemChild.hasAttributes('[data-menu-type="secondary"]')) {

        // Sets an extra class for the navigation items with a secondary menu
        primaryMenuItem.classList.add('arrow-down')

        primaryMenuItem.addEventListener('click', event => {

          // Prevents default 'hash' in uri
          event.preventDefault()

          // Prevents event from firing twice
          event.stopImmediatePropagation()

          overlay.style.display = 'block'

          // Sets variables to work with
          const isActive = event.target.getAttribute('data-active')
          const primaryNavItem = event.target

          /* Initializes class. 'NavFunctionality' receives two parmeters a string with
            either false or true and the navigation item node */
          const navFuncitonality = new NavFunctionality(isActive, primaryNavItem)
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

  // Click on overlay to close all menues in responsive and secondary on desktop
  overlay.addEventListener('click', () => {
    event.stopImmediatePropagation()
    navFuncitonality.closeMenu()
    navFuncitonality.closeMobileMenu()
  })

  // Mobile fuctionality
  document.getElementById('open-menu').addEventListener('click', () => {
    navFuncitonality.openMobileMenu()
  })

  document.getElementById('close-menu').addEventListener('click', () => {
    navFuncitonality.closeMobileMenu()
  })

}
