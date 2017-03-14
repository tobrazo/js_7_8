$( function() {
    var tooltips = $( "[title]" ).tooltip({

        tooltipClass: "test",
      position: {
        my: "left top",
        at: "right+5 top-5",
        collision: "none"
      }

    });

    $("<button>")
      .text("Show all")
      .button()
      .on( "click", function() {
        tooltips.tooltip("open");
      })
      .insertAfter( "form" );
});