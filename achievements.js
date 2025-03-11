document.addEventListener("DOMContentLoaded", () => {
    // Sample achievement data
    const achievements = [
      {
        id: 1,
        title: "Cosmic Explorer",
        description: "Discover 100 new star systems",
        icon: "fas fa-globe",
        progress: 75,
        category: "exploration",
      },
      {
        id: 2,
        title: "Galactic Peacekeeper",
        description: "Resolve 50 interstellar conflicts",
        icon: "fas fa-handshake",
        progress: 100,
        category: "social",
      },
      {
        id: 3,
        title: "Master Engineer",
        description: "Craft 1000 unique items",
        icon: "fas fa-cogs",
        progress: 60,
        category: "crafting",
      },
      {
        id: 4,
        title: "Void Conqueror",
        description: "Defeat the ancient space beast",
        icon: "fas fa-dragon",
        progress: 100,
        category: "combat",
      },
      {
        id: 5,
        title: "Fleet Admiral",
        description: "Command a fleet of 100 ships",
        icon: "fas fa-space-shuttle",
        progress: 80,
        category: "combat",
      },
      {
        id: 6,
        title: "Xenolinguist",
        description: "Learn 20 alien languages",
        icon: "fas fa-language",
        progress: 40,
        category: "social",
      },
    ]
  
    // Sample timeline data
    const timelineData = [
      { date: "2025-07-15", achievement: "🔥 First Contact", game: "Stellar Diplomacy" },
      { date: "2025-08-02", achievement: "⏩ Warp Speed", game: "Cosmic Voyager" },
      { date: "2025-09-20", achievement: "🚀 Galactic Peacekeeper", game: "Interstellar Alliance" },
      { date: "2025-10-10", achievement: "🌌 Void Conqueror", game: "Deep Space Battles" },
      { date: "2025-11-05", achievement: "🚗 Master Engineer", game: "Starship Architect" },
    ]
  
    // Function to render achievement cards
    function renderAchievements() {
      const showcaseGrid = document.querySelector(".showcase-grid")
      showcaseGrid.innerHTML = ""
      achievements.forEach((achievement) => {
        const achievementCard = document.createElement("div")
        achievementCard.className = "achievement-card"
        achievementCard.innerHTML = `
                  <div class="achievement-icon">
                      <i class="${achievement.icon}"></i>
                  </div>
                  <h3 class="achievement-title">${achievement.title}</h3>
                  <p class="achievement-description">${achievement.description}</p>
                  <div class="achievement-progress">
                      <div class="achievement-progress-bar" style="width: ${achievement.progress}%"></div>
                  </div>
              `
        showcaseGrid.appendChild(achievementCard)
      })
    }
  
    // Function to render timeline
    function renderTimeline() {
      const timelineContainer = document.querySelector(".timeline-container")
      timelineData.forEach((item, index) => {
        const timelineItem = document.createElement("div")
        timelineItem.className = `timeline-item timeline-item-${index % 2 === 0 ? "left" : "right"}`
        timelineItem.innerHTML = `
                  <div class="timeline-content">
                      <p class="timeline-date">${item.date}</p>
                      <h3 class="timeline-achievement">${item.achievement}</h3>
                      <p class="timeline-game">${item.game}</p>
                  </div>
              `
        timelineContainer.appendChild(timelineItem)
      })
    }
  
    // Initialize the page
    function initPage() {
      renderAchievements()
      renderTimeline()
  
      // Category card click handler
      const categoryCards = document.querySelectorAll(".category-card")
      categoryCards.forEach((card) => {
        card.addEventListener("click", () => {
          const category = card.getAttribute("data-category")
          // Filter achievements by category (you can implement this functionality)
          console.log(`Filtering achievements by category: ${category}`)
        })
      })
    }
  
    // Call initPage when the DOM is fully loaded
    initPage()
  
    // Add hover effects and animations
    const cards = document.querySelectorAll(".achievement-card, .category-card, .stat-card")
    cards.forEach((card) => {
      card.addEventListener("mouseenter", () => {
        card.style.transform = "translateY(-10px)"
      })
      card.addEventListener("mouseleave", () => {
        card.style.transform = "translateY(0)"
      })
    })
  
    // Animate elements on scroll
    const animateOnScroll = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate")
          observer.unobserve(entry.target)
        }
      })
    }
  
    const observer = new IntersectionObserver(animateOnScroll, {
      root: null,
      threshold: 0.1,
    })
  
    document.querySelectorAll(".achievement-card, .category-card, .timeline-item").forEach((el) => {
      observer.observe(el)
    })
  
    // Particle background effect
    function createParticle() {
      const particle = document.createElement("div")
      particle.className = "particle"
      particle.style.left = Math.random() * 100 + "vw"
      particle.style.animationDuration = Math.random() * 3 + 2 + "s"
      particle.style.opacity = Math.random()
      document.body.appendChild(particle)
  
      setTimeout(() => {
        particle.remove()
      }, 5000)
    }
  
    setInterval(createParticle, 200)
  })
  
  