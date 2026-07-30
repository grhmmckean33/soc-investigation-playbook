document.querySelectorAll('[data-copy]').forEach(button => {
  button.addEventListener('click', async () => {
    const target = document.querySelector(button.dataset.copy);
    if (!target) return;
    try {
      await navigator.clipboard.writeText(target.innerText);
      const original = button.textContent;
      button.textContent = 'Copied';
      setTimeout(() => button.textContent = original, 1400);
    } catch {
      button.textContent = 'Select manually';
    }
  });
});
