$(function() {
  //Gestion affichage du menu responsive pour les écrans <= 992 px
    var words = [
      'freelance',
      'à Lyon'
    ],
    i=0;

    $(".navbar-responsive").toggle();

    $(".menu").click(function () {
      $(".navbar-responsive").toggle("slow");
    });

    // Gestion affichage aléatoire phrases d'accroche
    setInterval(function() {
      $("#word").fadeOut(function() {
        $(this).html(words[i = (i + 1) % words.length]).fadeIn();
      });
    }, 3500)
});

//   // Gestion du scroll vers les sections du site
  $(".scroll").click(function() {
    var section = $("." + this.id);
    $("html,body").animate({scrollTop: section.offset().top}, 'slow');
  });

// On gère l'affichage des progressbar pour les compétences
window.sr = ScrollReveal();
sr.reveal('.progress-bar', {
  origin: 'left',
  duration: 2000,
  distance: '100%'
})

//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
} 