// Calculator Logic
const sessionHours = document.getElementById('session-hours');
const editCount = document.getElementById('edit-count');
const albumTier = document.getElementById('album-tier');
const totalPrice = document.getElementById('total-price');
const valueDisplay = document.querySelector('.value-display');

// Update total when inputs change
function updateTotal() {
  const hours = parseFloat(sessionHours.value);
  const edits = parseInt(editCount.value) * 50;
  const album = parseInt(albumTier.value);
  const total = (hours * 200) + edits + album; // $200/hr avg
  totalPrice.textContent = `$${total}`;
}

// Event listeners
sessionHours.addEventListener('input', () => {
  valueDisplay.textContent = `${sessionHours.value} hrs`;
  updateTotal();
});

editCount.addEventListener('change', updateTotal);
albumTier.addEventListener('change', updateTotal);

// Initialize
updateTotal();
