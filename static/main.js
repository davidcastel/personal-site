(function($) {
  "use strict";

  /* Type Writer Effect
   * Powered by "TypewriterJS v2"
   * https://www.npmjs.com/package/typewriter-effect
   * --------------------------------------------- */
  var typeWrite = function() {
    // Get Element
    var target = document.getElementById("heroTypeWriterId");

    // Create TypeWriter Object
    var type = new Typewriter(target, {
      loop: false
    });

    // Script what to write
    type
      .pauseFor(100)
      .typeString("a first-generation student.")
      .pauseFor(2000)
      .deleteAll()
      .typeString("an inspiring web-developer.")
      .pauseFor(2500)
      .deleteAll()
      .typeString("a long-distance runner.")
      .pauseFor(2500)
      .deleteAll()
      .typeString("David, nice to meet you")
      .start();
  };
  /* Initialize
   * --------------------------------------------- */
  (function ssInit() {
    typeWrite();
  })();
})(jQuery);
