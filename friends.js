document.addEventListener("DOMContentLoaded", () => {
    // Sample friend data
    const friends = [
      {
        id: 1,
        name: "Stella Nova",
        status: "Online",
        avatar: "https://placehold.co/100x100?text=SN",
        game: "Cosmic Voyager",
      },
      { id: 2, name: "Orion Hunter", status: "Offline", avatar: "https://placehold.co/100x100?text=OH" },
      {
        id: 3,
        name: "Luna Eclipse",
        status: "In Game",
        avatar: "https://placehold.co/100x100?text=LE",
        game: "Lunar Legends",
      },
      { id: 4, name: "Zephyr Starwind", status: "Online", avatar: "https://placehold.co/100x100?text=ZS" },
      {
        id: 5,
        name: "Nova Blaze",
        status: "In Game",
        avatar: "https://placehold.co/100x100?text=NB",
        game: "Galactic Inferno",
      },
      { id: 6, name: "Cosmos Dreamer", status: "Offline", avatar: "https://placehold.co/100x100?text=CD" },
    ]
  
    // Sample activity data
    const activities = [
      { user: "Stella Nova", action: "achieved a new high score in Cosmic Voyager", time: "2 minutes ago" },
      { user: "Orion Hunter", action: "unlocked the 'Celestial Explorer' achievement", time: "15 minutes ago" },
      { user: "Luna Eclipse", action: "started playing Lunar Legends", time: "1 hour ago" },
      { user: "Zephyr Starwind", action: "added Nebula Rider to their wishlist", time: "3 hours ago" },
      { user: "Nova Blaze", action: "joined the 'Galactic Guardians' guild", time: "5 hours ago" },
    ]
  
    // Sample event data
    const events = [
      {
        title: "Cosmic Cup Tournament",
        description: "Annual space racing championship",
        date: "2025-08-15",
        participants: 128,
      },
      {
        title: "Intergalactic Game Jam",
        description: "48-hour game development challenge",
        date: "2025-09-01",
        participants: 256,
      },
      {
        title: "Virtual Reality Expo",
        description: "Showcase of the latest VR gaming tech",
        date: "2025-09-20",
        participants: 512,
      },
    ]
  
    // Function to render friend cards
    function renderFriends() {
      const friendGrid = document.querySelector(".friend-grid")
      friendGrid.innerHTML = ""
      friends.forEach((friend) => {
        const friendCard = document.createElement("div")
        friendCard.className = "friend-card"
        friendCard.innerHTML = `
                  <div class="friend-avatar">
                      <img src="${friend.avatar}" alt="${friend.name}">
                  </div>
                  <h3 class="friend-name">${friend.name}</h3>
                  <p class="friend-status">${friend.status}${friend.game ? ` - ${friend.game}` : ""}</p>
                  <div class="friend-actions">
                      <button class="friend-action-btn">Message</button>
                      <button class="friend-action-btn">Invite</button>
                  </div>
              `
        friendGrid.appendChild(friendCard)
      })
    }
  
    // Function to render activity feed
    function renderActivityFeed() {
      const activityFeed = document.querySelector(".activity-feed")
      activityFeed.innerHTML = ""
      activities.forEach((activity) => {
        const activityItem = document.createElement("div")
        activityItem.className = "activity-item"
        activityItem.innerHTML = `
                  <div class="activity-avatar">
                      <img src="https://placehold.co/50x50?text=${activity.user
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}" alt="${activity.user}">
                  </div>
                  <div class="activity-content">
                      <span class="activity-user">${activity.user}</span>
                      <span class="activity-action">${activity.action}</span>
                      <div class="activity-time">${activity.time}</div>
                  </div>
              `
        activityFeed.appendChild(activityItem)
      })
    }
  
    // Function to render event carousel
    function renderEventCarousel() {
      const eventCarousel = document.querySelector(".event-carousel")
      eventCarousel.innerHTML = ""
      events.forEach((event) => {
        const eventCard = document.createElement("div")
        eventCard.className = "event-card"
        eventCard.innerHTML = `
                  <h3 class="event-title">${event.title}</h3>
                  <p class="event-description">${event.description}</p>
                  <div class="event-date">${event.date}</div>
                  <div class="event-participants">
                      <div class="participant-avatar">
                          <img src="https://placehold.co/30x30?text=P" alt="Participant">
                      </div>
                      <span class="participant-count">${event.participants} participants</span>
                  </div>
              `
        eventCarousel.appendChild(eventCard)
      })
    }
  
    // Initialize the page
    function initPage() {
      renderFriends()
      renderActivityFeed()
      renderEventCarousel()
  
      // Add friend button functionality
      const addFriendBtn = document.querySelector(".add-friend-btn")
      addFriendBtn.addEventListener("click", () => {
        alert("Add friend functionality to be implemented")
      })
  
      // Search functionality
      const searchInput = document.querySelector(".search-input")
      searchInput.addEventListener("input", (e) => {
        const searchTerm = e.target.value.toLowerCase()
        const filteredFriends = friends.filter((friend) => friend.name.toLowerCase().includes(searchTerm))
        renderFriends(filteredFriends)
      })
    }
  
    // Call initPage when the DOM is fully loaded
    initPage()
  
    // Add hover effects and animations
    const cards = document.querySelectorAll(".friend-card, .event-card, .stat-card")
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
  
    document.querySelectorAll(".friend-card, .activity-item, .event-card").forEach((el) => {
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
  
  