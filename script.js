document.addEventListener('DOMContentLoaded', function () {
  const searchInput = document.getElementById('searchInput');
  const productCards = document.querySelectorAll('#productContainer > div');

  searchInput.addEventListener('input', function () {
    const searchTerm = this.value.toLowerCase();

    productCards.forEach(card => {
      const title = card.getAttribute('data-title').toLowerCase();
      const category = card.getAttribute('data-category').toLowerCase();
      const tags = card.getAttribute('data-tags').toLowerCase();

      if (title.includes(searchTerm) || category.includes(searchTerm) || tags.includes(searchTerm)) {
        card.style.display = 'flex';
        card.classList.add('fade-in');
      } else {
        card.style.display = 'none';
      }
    });
  });

  // Animasi Delay
  productCards.forEach((card, index) => {
    card.style.animationDelay = `${index * 0.1}s`;
  });
});
