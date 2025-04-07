const cardsContainer = document.querySelectorAll(".cards-container");

function updateCarousel(cards, currentPage, cardsPerPage, previousBtn, nextBtn) {
  const start = currentPage * cardsPerPage;
  const end = start + cardsPerPage;

  cards.forEach((card, index) => {
    card.style.display = index >= start && index < end ? "block" : "none";
  });

  previousBtn.disabled = currentPage === 0;
  nextBtn.disabled = currentPage >= Math.ceil(cards.length / cardsPerPage) - 1;
}

function getCardsPerPage() {
  return window.innerWidth <= 480 ? 2 : 5;
}

cardsContainer.forEach((container) => {
  const cards = Array.from(container.querySelectorAll(".card"));
  const previousBtn = container.querySelector(".previous");
  const nextBtn = container.querySelector(".next");

  let cardsPerPage = getCardsPerPage();
  let currentPage = 0;

  function handleResize() {
    const newCardsPerPage = getCardsPerPage();
    if (newCardsPerPage !== cardsPerPage) {
      cardsPerPage = newCardsPerPage;
      currentPage = 0; // Resetar a página para evitar bugs
      updateCarousel(cards, currentPage, cardsPerPage, previousBtn, nextBtn);
    }
  }

  window.addEventListener("resize", handleResize);

  previousBtn.addEventListener("click", () => {
    if (currentPage > 0) {
      currentPage--;
      updateCarousel(cards, currentPage, cardsPerPage, previousBtn, nextBtn);
    }
  });

  nextBtn.addEventListener("click", () => {
    let totalPages = Math.ceil(cards.length / cardsPerPage);
    
    if (currentPage + 1 < totalPages) {
      currentPage++;
      updateCarousel(cards, currentPage, cardsPerPage, previousBtn, nextBtn);
    }
  });

  updateCarousel(cards, currentPage, cardsPerPage, previousBtn, nextBtn);
});
