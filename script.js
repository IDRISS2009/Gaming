document.addEventListener("DOMContentLoaded", () => {
  // Mobile sidebar toggle
  const mobileToggle = document.getElementById("mobile-toggle")
  const sidebar = document.querySelector(".sidebar")

  mobileToggle.addEventListener("click", () => {
    sidebar.classList.toggle("active")
  })

  // Close sidebar when clicking outside on mobile
  document.addEventListener("click", (event) => {
    if (
      window.innerWidth <= 768 &&
      !sidebar.contains(event.target) &&
      !mobileToggle.contains(event.target) &&
      sidebar.classList.contains("active")
    ) {
      sidebar.classList.remove("active")
    }
  })

  // Menu item click handler
  const menuItems = document.querySelectorAll(".sidebar-menu li a")

  menuItems.forEach((item) => {
    item.addEventListener("click", function (e) {
      // Remove active class from all menu items
      menuItems.forEach((i) => {
        i.parentElement.classList.remove("active")
      })

      // Add active class to clicked menu item
      this.parentElement.classList.add("active")

      // Close sidebar on mobile after clicking a menu item
      if (window.innerWidth <= 768) {
        sidebar.classList.remove("active")
      }
    })
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

  // Animate progress bars on load
  const progressBars = document.querySelectorAll(".progress-fill")

  setTimeout(() => {
    progressBars.forEach((bar) => {
      const width = bar.style.width
      bar.style.width = "0"

      setTimeout(() => {
        bar.style.width = width
      }, 100)
    })
  }, 500)

  // Game card hover effects
  const gameCards = document.querySelectorAll(".game-card")

  gameCards.forEach((card) => {
    card.addEventListener("mouseenter", function () {
      this.style.transform = "translateX(4px)"
    })

    card.addEventListener("mouseleave", function () {
      this.style.transform = "translateX(0)"
    })
  })

  // Achievement card hover effects
  const achievementCards = document.querySelectorAll(".achievement-card")

  achievementCards.forEach((card) => {
    card.addEventListener("mouseenter", function () {
      this.style.transform = "translateX(4px)"
    })

    card.addEventListener("mouseleave", function () {
      this.style.transform = "translateX(0)"
    })
  })

  // Notification badge pulse animation
  const notificationBadge = document.querySelector(".notification-indicator")

  if (notificationBadge) {
    setInterval(() => {
      notificationBadge.classList.add("pulse")

      setTimeout(() => {
        notificationBadge.classList.remove("pulse")
      }, 1000)
    }, 3000)
  }
})

