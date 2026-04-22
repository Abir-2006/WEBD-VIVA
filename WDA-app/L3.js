let userId = 4;
let currentRecipe = '';

// Show message at the top
function showAlert(message) {
  const alert = document.getElementById('alertMessage');
  alert.className = 'alert alert-success alert-custom';
  document.getElementById('alertText').textContent = message;
  alert.style.display = 'block';
  setTimeout(() => alert.style.display = 'none', 3000);
}

// When the form is submitted
let registrationForm = document.querySelector("#registrationForm");
registrationForm.addEventListener('submit', function(eve) {
  eve.preventDefault();
  let table = document.querySelector("#userTableBody");
  let row = table.insertRow();
  row.innerHTML = `
    <td>${userId++}</td>
    <td>${this.fullName.value}</td>
    <td>${this.email.value}</td>
    <td>${this.phone.value}</td>
    <td>${this.cuisine.value}</td>
    <td>${new Date().toISOString().split('T')[0]}</td>`;
    this.reset();
    showAlert('Registration Successful!');
});

// When a recipe “Apply” button is clicked
document.querySelectorAll('.btn-apply').forEach(function(button) {
  button.addEventListener('click', function() {
    currentRecipe = this.dataset.recipe;
    document.getElementById('modalRecipeName').textContent = currentRecipe;
    new bootstrap.Modal(document.getElementById('recipeModal')).show();
  });
});