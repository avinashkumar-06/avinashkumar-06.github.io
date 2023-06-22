const date = document.getElementById('date')
const setCurrentYear = () => {
	const currentYear = new Date().getFullYear()
	date.textContent = currentYear
}

// hamburger menu
const hamburger = document.querySelector('.hamburger')
const navList = document.querySelector('.nav-list')
const socials = document.querySelector('.social-nav')
const navLinks = document.querySelectorAll('.nav-links')

const toggleMobileMenu = () => {
	hamburger.classList.toggle('open')
	navList.classList.toggle('open')
	socials.classList.toggle('open')
	document.body.classList.toggle('open')
}

navLinks.forEach((link) => link.addEventListener('click', toggleMobileMenu))
hamburger.addEventListener('click', toggleMobileMenu)

// initialize aos (library for scroll animation)
AOS.init()
setCurrentYear()


function resumeOpen(){
	window.open("https://drive.google.com/file/d/18PaqyIZnAlLtWPgIfLiSl6eWJ1Xx5cv6/view?usp=share_link");
}








// ------------------------------ Not working --------------------

// document.getElementById('contact-form').addEventListener('submit', function(event) {

	

//     event.preventDefault(); 
  
//     // Get form values
//     var name = document.getElementById('name').value;
//     var email = document.getElementById('email').value;
//     var message = document.getElementById('message').value;
  
// 	console.log(name, email, message);
    
//     //   Data object to be sent to Formspree
//     var data = {
//       name: name,
//       email: email,
//       message: message
//     };
  
//     // Send the data to Formspree
//     var xhr = new XMLHttpRequest(); // Create new XMLHttpRequest object
//     xhr.open('POST', 'https://formspree.io/f/xeqwybww');  // A Formspree endpoint URL 
//     xhr.setRequestHeader('Content-Type', 'application/json');  // Content-Type header
//     xhr.onload = function() {
//       if (xhr.status === 200) { // If server status was ok
//         alert('Form submission successful!');
//         document.getElementById('contact-form').reset(); // Clear the form
//       } else { // If server status was not ok
//         alert('Form submission failed. Please try again later.');
//       }
//     };
//     xhr.send(JSON.stringify(data)); //  Send the data as JSON
//   });
  