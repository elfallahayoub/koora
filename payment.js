// Quand l'utilisateur soumet le formulaire
document.getElementById('payment-form').addEventListener('submit', function(e) {
  e.preventDefault(); // Empêche le rechargement de la page

  // Récupération des valeurs
  const name = document.getElementById('name').value.trim();
  const card = document.getElementById('card-number').value.trim();
  const expiry = document.getElementById('expiry').value.trim();
  const cvv = document.getElementById('cvv').value.trim();

  // Vérification simple
  if (name && card && expiry && cvv) {
    // Affiche le message de succès
    document.getElementById('success-message').style.display = 'block';
    
    // Vide le formulaire
    document.getElementById('payment-form').reset();
  } else {
    alert("Veuillez remplir tous les champs !");
  }
});
