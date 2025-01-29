<script>
  // Example: Redirect to product pages when buttons are clicked
  document.querySelectorAll('.product-categories button').forEach(button => {
    if (!button.classList.contains('empty-button')) {
      button.addEventListener('click', () => {
        const category = button.textContent.toLowerCase();
        window.location.href = `${category}.html`;
      });
    }
  });
</script>
