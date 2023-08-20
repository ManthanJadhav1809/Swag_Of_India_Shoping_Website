$(document).ready(function () {

  fetch('./header.html')
    .then(Response => Response.text())
    .then(function (headerHtml) {
      $('#main-header').html(headerHtml);
    });

  fetch('./footer.html')
    .then(response => response.text())
    .then(function (footerHtml) {
      $('#main-footer').html(footerHtml);
    });
});

function updateCountry() {
  // use map() to create an array of contacts and country names. Repeat the code below for all the countries.



  let contacts = new Map();
  contacts.set('India', '+91-7972881698');
  contacts.set('Dubai', '+917-9390121445');
  contacts.set('United_Kingdom', '+44-9960645212');

  let country_image = new Map();
  country_image.set('India', './images/india.png');
  country_image.set('Dubai', './images/dubai.jpg');
  country_image.set('United_Kingdom', './images/UK.png');



  var country_name = document.getElementById('country_name');
  var country_number = document.getElementById('country_number');
  if (country_name.value === "India") {

    country_number.textContent = contacts.get('India')
    document.getElementById('flag').src = country_image.get('India');
  } else if (country_name.value === "Dubai") {

    country_number.textContent = contacts.get('Dubai');
    document.getElementById('flag').src = country_image.get('Dubai');
  } else if (country_name.value === "United_Kingdom") {

    country_number.textContent = contacts.get('United_Kingdom');
    document.getElementById('flag').src = country_image.get('United_Kingdom');

  }

  // use getElementbyId and addEventListener method to change the country and flag
}


document.getElementById("scrollUp").classList.add("hide")

function getYPosition() {
  var top = window.pageYOffset || document.documentElement.scrollTop
  return top;
}

document.addEventListener('scroll', () => {
  var scroll = getYPosition()
  var arrow = document.getElementById('scrollUp')

  scrolled = () => {

    window.scroll({

      top: 0,
      left: 0,
      behavior: "smooth"
    });

  }

  //adding the sticky navbar

  if (scroll < 250) {

    document.getElementById('sticky-section').classList.remove("sticky");
  } else {
    document.getElementById('sticky-section').classList.add("sticky");
  }

  if (scroll > 500) {
    arrow.classList.remove("hide");
    arrow.classList.add("show");
    arrow.addEventListener('click', scrolled);
  } else {
    arrow.classList.remove("show");
    arrow.classList.add("hide");
    arrow.addEventListener('click', scrolled);
  }
})




// var navbar =document.getElementById('sticky-section');

// var sticky=navbar.offsetTop;



// window.onscroll=()=>{
//   scrollFunction(),stickyscrollfun();
// };

// // Get the button:
// let scrolltopbtn = document.getElementById("myBtn");
// // let header_sticky=document.getElementById("carouselExampleInterval");

// function scrollFunction() {
//   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//     scrolltopbtn.style.display = "block";
//   } else {
//     scrolltopbtn.style.display = "none";
//   }
// }
// scrolltopbtn.addEventListener('click',topFunction);

// // When the user clicks on the button, scroll to the top of the document
// function topFunction() {
//   document.body.scrollTop = 0; // For Safari
//   document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
// }


// function stickyscrollfun() {
//   if (document.body.scrollTop > 20) {
//   navbar.classList.add("sticky")
//   navbar.classList.add("sticky-shadow")
//   } else {
//   navbar.classList.remove("sticky")
//   navbar.classList.remove("sticky-shadow")
//   }
//   }
