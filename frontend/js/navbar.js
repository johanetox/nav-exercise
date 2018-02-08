'use strict'

class NavFunctionality {
  constructor(isActive, primaryNavItem) {
    this.active = isActive
    this.primaryNavItem = primaryNavItem
    this.allNavItems = document.querySelectorAll('[data-menu-type="primary"]')
    this.overlay = document.getElementById('bg-overlay')
    this.mobileMenu = document.getElementById('vertical-menu')
    this.mobileMenuClose = document.getElementById('close-menu')
    this.mobileMenuOpen = document.getElementById('open-menu')
    this.mobileMenuIcon = document.getElementById('logo-menu')
  }

  showSecondaryMenu() {
    // this validation could have been parsed but I'm tring to save code lines
    if (this.active === 'false') {
      for (const primaryNavItem of this.allNavItems) {
        primaryNavItem.classList.remove('active')
        primaryNavItem.setAttribute('data-active', 'false')
      }
      this.primaryNavItem.classList.add('active')
      this.primaryNavItem.setAttribute('data-active', 'true')
      return false
    }
    this.closeMenu()
  }

  closeMenu() {
    for (const navItem of this.allNavItems) {
      navItem.classList.remove('active')
      navItem.setAttribute('data-active', 'false')
    }
    if (window.screen.width > 768) {
      this.overlay.style.display = 'none'
    }
  }

  openMobileMenu() {
    this.overlay.style.display = 'block'
    this.mobileMenu.style.left = '0'
    this.mobileMenuIcon.style.left = '24px'
    this.mobileMenuClose.style.left = 'calc(100% - 70px)'
    this.mobileMenuOpen.style.left = '-100vw'
  }

  closeMobileMenu() {
    this.overlay.style.display = 'none'
    this.mobileMenu.style.left = '-100vw'
    this.mobileMenuIcon.style.left = '-100vw'
    this.mobileMenuClose.style.left = '-100vw'
    this.mobileMenuOpen.style.left = '4px'
  }
}
