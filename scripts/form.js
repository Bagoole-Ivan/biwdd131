// Get the current date and time for "Last Modification"
document.getElementById("lastModified").textContent = new Date().toLocaleString();

// Handle form submission
document.getElementById("reviewForm").addEventListener("submit", function (event) {
  event.preventDefault();
  alert("Thank you for your review! Your feedback has been submitted.");
  this.reset(); // Reset the form after submission
});
