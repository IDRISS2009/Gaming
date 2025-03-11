document.addEventListener("DOMContentLoaded", () => {
    // Navigation functionality
    const navItems = document.querySelectorAll(".settings-nav-item")
    const sections = document.querySelectorAll(".settings-section")
  
    navItems.forEach((item) => {
      item.addEventListener("click", () => {
        const target = item.getAttribute("data-target")
        navItems.forEach((navItem) => navItem.classList.remove("active"))
        item.classList.add("active")
        sections.forEach((section) => {
          section.classList.remove("active")
          if (section.id === target) {
            section.classList.add("active")
          }
        })
      })
    })
  
    // Theme selection
    const themeSelect = document.getElementById("theme-select")
    themeSelect.addEventListener("change", (e) => {
      document.body.className = e.target.value
      // Here you would also update any necessary CSS variables or classes
    })
  
    // Color pickers
    const primaryColorPicker = document.getElementById("primary-color")
    const accentColorPicker = document.getElementById("accent-color")
  
    primaryColorPicker.addEventListener("input", (e) => {
      document.documentElement.style.setProperty("--neon-blue", e.target.value)
    })
  
    accentColorPicker.addEventListener("input", (e) => {
      document.documentElement.style.setProperty("--neon-purple", e.target.value)
    })
  
    // Font size slider
    const fontSizeSlider = document.getElementById("font-size")
    const fontSizeValue = document.getElementById("font-size-value")
  
    fontSizeSlider.addEventListener("input", (e) => {
      const size = e.target.value
      document.documentElement.style.fontSize = size + "px"
      fontSizeValue.textContent = size + "px"
    })
  
    // Animation toggle
    const animationToggle = document.getElementById("animation-toggle")
    animationToggle.addEventListener("change", (e) => {
      if (e.target.checked) {
        document.body.classList.remove("reduce-motion")
      } else {
        document.body.classList.add("reduce-motion")
      }
    })
  
    // Avatar preview
    const avatarInput = document.getElementById("avatar")
    const avatarPreview = document.getElementById("avatar-img")
  
    avatarInput.addEventListener("change", (e) => {
      const file = e.target.files[0]
      if (file) {
        const reader = new FileReader()
        reader.onload = (e) => {
          avatarPreview.src = e.target.result
        }
        reader.readAsDataURL(file)
      }
    })
  
    // Password change
    const changePasswordBtn = document.querySelector(".change-password-btn")
    changePasswordBtn.addEventListener("click", () => {
      // Here you would implement the password change functionality
      alert("Password change functionality to be implemented")
    })
  
    // Clear cache
    const clearCacheBtn = document.getElementById("clear-cache")
    clearCacheBtn.addEventListener("click", () => {
      if (confirm("Are you sure you want to clear the cache? This may log you out.")) {
        // Here you would implement the cache clearing functionality
        alert("Cache cleared successfully")
      }
    })
  
    // Delete account
    const deleteAccountBtn = document.getElementById("delete-account")
    deleteAccountBtn.addEventListener("click", () => {
      if (confirm("Are you sure you want to delete your account? This action cannot be undone.")) {
        // Here you would implement the account deletion functionality
        alert("Account deletion process initiated")
      }
    })
  
    // Hamburger menu functionality
    const hamburgerMenu = document.getElementById("hamburger-menu")
    const mobileNav = document.getElementById("mobile-nav")
    const body = document.body
  
    hamburgerMenu.addEventListener("click", () => {
      hamburgerMenu.classList.toggle("active")
      mobileNav.classList.toggle("active")
      body.classList.toggle("menu-open")
    })
  
    // Close mobile nav when clicking outside
    document.addEventListener("click", (event) => {
      const isClickInsideNav = mobileNav.contains(event.target)
      const isClickOnHamburger = hamburgerMenu.contains(event.target)
  
      if (!isClickInsideNav && !isClickOnHamburger && mobileNav.classList.contains("active")) {
        hamburgerMenu.classList.remove("active")
        mobileNav.classList.remove("active")
        body.classList.remove("menu-open")
      }
    })
  
    // Prevent scrolling when mobile nav is open
    function toggleScrollLock() {
      body.style.overflow = body.style.overflow === "hidden" ? "" : "hidden"
    }
  
    hamburgerMenu.addEventListener("click", toggleScrollLock)
  
    // Close mobile nav and unlock scrolling when resizing to larger screens
    window.addEventListener("resize", () => {
      if (window.innerWidth > 768 && mobileNav.classList.contains("active")) {
        hamburgerMenu.classList.remove("active")
        mobileNav.classList.remove("active")
        body.classList.remove("menu-open")
        body.style.overflow = ""
      }
    })
  })
  
  