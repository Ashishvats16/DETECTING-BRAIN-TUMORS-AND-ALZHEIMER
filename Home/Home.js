// Smooth scrolling when clicking the Back to Top link
document.getElementById('back-to-top').addEventListener('click', function(event) {
  event.preventDefault();
  window.scroll({ top: 0, behavior: 'smooth' });
});

// // SignIn as ADMIN functionality
// document.querySelector('.left').addEventListener('click', function(event) {
//   event.preventDefault();
//   // Redirect to the signIn-Admin.html page
//   window.location.href = 'C:\\Users\\nikhi\\Desktop\\Project\\Admin\\signIn-Admin.html';
// });

// // SignIn as USER functionality
// document.querySelector('.right').addEventListener('click', function(event) {
//   event.preventDefault();
//   // Redirect to the signIn-User.html page
//   window.location.href = 'C:\\Users\\nikhi\\Desktop\\Project\\User\\signIn-User.html';
// });
