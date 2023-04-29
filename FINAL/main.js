window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-50px";
  }
}



function myFunction() {
  document.getElementById("myNav").style.width = "100%";
  document.getElementById("myNav").style.display = "block";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}


var modal = document.getElementById("myModal");


var btn = document.getElementById("myBtn");


var span = document.getElementsByClassName("close")[0];


btn.onclick = function() {
  modal.style.display = "block";
}


span.onclick = function() {
  modal.style.display = "none";
}


window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

$(document).ready(function() {

  $(window).on('scroll', function() {
    $('.skills').each(function() {
      if ($(this).offset().top < $(window).scrollTop() + $(window).height() && !$(this).hasClass('animate')) {
        $(this).addClass('animate');
      }
    });
  });
});


function scrollToSection(sectionId, offset) {
  var section = document.getElementById(sectionId);
  var sectionPos = section.getBoundingClientRect().top + window.pageYOffset;
  var offsetPos = sectionPos - offset;
  window.scrollTo({
    top: offsetPos,
    behavior: 'smooth'
  });
}


function closeOverlay() {
  document.getElementById("myNav").style.display = "none";
}