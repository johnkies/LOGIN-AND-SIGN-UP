document.addEventListener('DOMContentLoaded', function() {
  const signupLink = document.getElementById('signupLink');
  const backToLogin = document.getElementById('backToLogin');
  const loginCard = document.getElementById('loginCard');
  const signupCard = document.getElementById('signupCard');
  const signupForm = signupCard.querySelector('form');

  if (signupLink) {
    signupLink.onclick = function(e) {
      e.preventDefault();
      loginCard.style.display = 'none';
      signupCard.style.display = 'block';
    };
  }

  if (backToLogin) {
    backToLogin.onclick = function(e) {
      e.preventDefault();
      signupCard.style.display = 'none';
      loginCard.style.display = 'block';
    };
  }

  if (signupForm) {
    signupForm.onsubmit = function(e) {
      e.preventDefault();
      // You can add validation or send data to a server here
      alert('Sign up successful!');
      signupCard.style.display = 'none';
      loginCard.style.display = 'block';
    };
  }
});