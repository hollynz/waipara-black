// Navbar drop and scroll and background at top of page
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    // Navbar
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar").style.top = "0";
    } else {
        document.getElementById("navbar").style.top = "-100px";
        document.getElementById("navbar").style.background = "rgba(255, 255, 255, 0.9)";
    }
    prevScrollpos = currentScrollPos;
    if (prevScrollpos == 0) {
        document.getElementById("navbar").style.background = "rgba(255, 255, 255, 0)";
        document.getElementById("footer").style.bottom = "-100px";
    }
    else {
        document.getElementById("footer").style.bottom = "0";
    }
    // Hide full footer until scroll to bottom of page
    if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight - 2) {
      document.getElementById("contact-info").style.display = "flex";

    } else {
      document.getElementById("contact-info").style.display = "none";
    }
}


// Scroll to section on click:
// https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_eff_animate_smoothscroll
$(document).ready(function(){
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {
  
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();
  
        // Store hash
        var hash = this.hash;
  
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 500, function(){
     
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      } // End if
    });
  });


// Wine modal for additional info
// var wine = document.querySelector('.wine-background');
// var modalDlg = document.querySelector('#image-modal');
// var imageModalCloseBtn = document.querySelector('#image-modal-close');
// wine.addEventListener('click', function () {
//   modalDlg.classList.add('is-active');
// });

// imageModalCloseBtn.addEventListener('click', function () {
//   modalDlg.classList.remove('is-active');
// });



// Toggling dropdowns:
// From main.js of Bulma website
document.addEventListener('DOMContentLoaded', function () {
  
    var $dropdowns = getAll('.dropdown:not(.is-hoverable)');
  
    if ($dropdowns.length > 0) {
      $dropdowns.forEach(function ($el) {
        $el.addEventListener('click', function (event) {
          event.stopPropagation();
          $el.classList.toggle('is-active');
        });
      });
  
      document.addEventListener('click', function (event) {
        closeDropdowns();
      });
    }
  
    function closeDropdowns() {
      $dropdowns.forEach(function ($el) {
        $el.classList.remove('is-active');
      });
    }
  
    // Close dropdowns if ESC pressed
    document.addEventListener('keydown', function (event) {
      var e = event || window.event;
      if (e.keyCode === 27) {
        closeDropdowns();
      }
    });
  
    // Functions
  
    function getAll(selector) {
      return Array.prototype.slice.call(document.querySelectorAll(selector), 0);
    }
  });