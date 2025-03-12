document.addEventListener("DOMContentLoaded", () => {
  // Sample game data (in a real application, this would come from a backend)
  const games = [
    { id: 1, title: "Elden Ring", genre: "Action RPG", rating: 4.9, image: "elden_img.jpeg" },
    {
      id: 2,
      title: "God of War: Ragnarök",
      genre: "Action-Adventure",
      rating: 4.8,
      image: "ragnarok.jpeg",
    },
    { id: 3, title: "Hades", genre: "Roguelike", rating: 4.7, image: "hades.jpeg" },
    { id: 4, title: "Stardew Valley", genre: "Simulation", rating: 4.8, image: "valley.jpeg" },
    {
      id: 5,
      title: "Red Dead Redemption 2",
      genre: "Action-Adventure",
      rating: 4.9,
      image: "red.jpeg",
    },
    { id: 6, title: "Hollow Knight", genre: "Metroidvania", rating: 4.7, image: "hollow.jpeg" },
    {
      id: 7,
      title: "The Witcher 3: Wild Hunt",
      genre: "Action RPG",
      rating: 4.9,
      image: "witcher.jpeg",
    },
    { id: 8, title: "Disco Elysium", genre: "RPG", rating: 4.8, image: "disco.jpeg" },
    // Add more games as needed
  ]

  const gamesGrid = document.querySelector(".games-grid")
  const filterBtn = document.querySelector(".filter-btn")
  const sortBtn = document.querySelector(".sort-btn")
  const filterContent = document.querySelector(".filter-content")
  const sortContent = document.querySelector(".sort-content")

  // Render game cards
  function renderGames(gamesToRender) {
    gamesGrid.innerHTML = ""
    gamesToRender.forEach((game) => {
      const gameCard = document.createElement("div")
      gameCard.className = "game-card"
      gameCard.innerHTML = `
                <div class="game-card-image">
                    <img src="${game.image}" alt="${game.title}">
                </div>
                <div class="game-card-content">
                    <h3 class="game-card-title">${game.title}</h3>
                    <p class="game-card-genre">${game.genre}</p>
                    <div class="game-card-rating">
                        <i class="fas fa-star"></i>
                        <span>${game.rating}</span>
                    </div>
                </div>
            `
      gamesGrid.appendChild(gameCard)
    })
  }

  // Initial render
  renderGames(games)

  // Toggle filter dropdown
  filterBtn.addEventListener("click", () => {
    filterContent.style.display = filterContent.style.display === "block" ? "none" : "block"
    sortContent.style.display = "none"
  })

  // Toggle sort dropdown
  sortBtn.addEventListener("click", () => {
    sortContent.style.display = sortContent.style.display === "block" ? "none" : "block"
    filterContent.style.display = "none"
  })

  // Close dropdowns when clicking outside
  document.addEventListener("click", (e) => {
    if (!e.target.matches(".filter-btn") && !e.target.matches(".sort-btn")) {
      filterContent.style.display = "none"
      sortContent.style.display = "none"
    }
  })

  // Filter games
  filterContent.addEventListener("click", (e) => {
    if (e.target.tagName === "A") {
      const filter = e.target.getAttribute("data-filter")
      const filteredGames = filter === "all" ? games : games.filter((game) => game.genre.toLowerCase().includes(filter))
      renderGames(filteredGames)
      filterContent.style.display = "none"
    }
  })

  // Sort games
  sortContent.addEventListener("click", (e) => {
    if (e.target.tagName === "A") {
      const sort = e.target.getAttribute("data-sort")
      const sortedGames = [...games].sort((a, b) => {
        if (sort === "name") return a.title.localeCompare(b.title)
        if (sort === "rating") return b.rating - a.rating
        // Add more sorting options as needed
      })
      renderGames(sortedGames)
      sortContent.style.display = "none"
    }
  })

  // Search functionality
  const searchInput = document.querySelector(".search-input")
  searchInput.addEventListener("input", (e) => {
    const searchTerm = e.target.value.toLowerCase()
    const filteredGames = games.filter(
      (game) => game.title.toLowerCase().includes(searchTerm) || game.genre.toLowerCase().includes(searchTerm),
    )
    renderGames(filteredGames)
  })

  // Animate game cards on scroll
  function animateGameCards() {
    const gameCards = document.querySelectorAll(".game-card")
    gameCards.forEach((card, index) => {
      setTimeout(() => {
        card.style.opacity = "1"
        card.style.transform = "translateY(0)"
      }, index * 100)
    })
  }

  // Intersection Observer for lazy loading and animations
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateGameCards()
          observer.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.1 },
  )

  observer.observe(gamesGrid)
})

