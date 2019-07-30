(function($) {
  "use strict";

  var $filters = $(".filter [data-filter]"),
    $boxes = $(".boxes [data-category]");

  $filters.on("click", function(e) {
    e.preventDefault();
    var $this = $(this);
    $filters.removeClass("active");
    $this.addClass("active");

    var $filterColor = $this.attr("data-filter");

    $boxes
      .removeClass("is-animated")
      .fadeOut()
      .finish()
      .promise()
      .done(function() {
        $boxes
          .filter('[data-category = "' + $filterColor + '"]')
          .each(function(i) {
            $(this)
              .addClass("is-animated")
              .delay(i++ * 400)
              .fadeIn(400);
          });
      });
  });
})(jQuery);

"#firstTopic".click(function(e) {
  console.log("fuck!");
  e.preventDefault();
  $("html, body").animate(
    {
      scrollTop: $("#japanContent").offset().top
    },
    2000
  );
});

console.log("Hello");

function clickJapan() {
  // preventDefault();
  $("html, body").animate(
    {
      scrollTop: $("#japanContent").offset().top
    },
    1000
  );
}

function clickGermany() {
  // preventDefault();
  $("html, body").animate(
    {
      scrollTop: $("#germanContent").offset().top
    },
    1000
  );
}
