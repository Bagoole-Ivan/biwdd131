const hamburger = document.querySelector('.topnav');
hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('hide');
    });

function formatDate(date) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
}


// Getting the current date
const currentDate = new Date();

// Inserting the formatted date into the HTML element with the id "current-date"
document.getElementById('current-date').textContent = formatDate(currentDate);


//const hamburger = document.querySelector('.hamburger-menu');
//const navMenu = document.querySelector('.nav-menu');
    
//hamburger.addEventListener('click', () => {
  //navMenu.classList.toggle('hide');
//});


