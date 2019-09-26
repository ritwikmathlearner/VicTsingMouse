$(".sub-menu a, #message-link, .main-menu a").on("click", function(event) {
  if (this.hash !== "") {
    event.preventDefault();

    const hash = this.hash;

    $("html, body").animate(
      {
        scrollTop: $(hash).offset().top - 50
      },
      800
    );
  }
});

$(function() {
  //caches a jQuery object containing the header element
  var subMenu = $(".sub-menu");
  var home = $("#home");
  $(window).scroll(function() {
    var scroll = $(window).scrollTop();
    // console.log(scroll);

    if (scroll >= 660) {
      subMenu.addClass("sub-menu-fixed");
      home.addClass("home-gap");
    } else {
      subMenu.removeClass("sub-menu-fixed");
      home.removeClass("home-gap");
    }
  });
});
