const entryForm = document.getElementById('entryForm');
const submitBtn = document.getElementById('submitBtn');
const discardBtn = document.getElementById('discardBtn');

submitBtn.addEventListener('click', () => {
  const confirmSubmit = confirm('Are you sure you want to submit the entry?');
  if (confirmSubmit) {
    entryForm.submit();
  }
});

discardBtn.addEventListener('click', () => {
  const confirmDiscard = confirm('Are you sure you want to discard the entry?');
  if (confirmDiscard) {
    entryForm.reset();
  }
});