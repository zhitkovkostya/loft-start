$(document).ready(function(){
  var counter = 0;
  $('.course-footer__check').click(function(){
    var checkbox = $(this);
    if(checkbox.prop("checked") == true){
      checkbox.closest(".course").find(".course-content").css("background-color","#e8f3db");
      checkbox.closest(".course-footer").css("background-color","#e1edd1");
      checkbox.closest(".course").css("opacity","0.7");
      setTimeout(function() {
        checkbox.closest(".course").remove();
        counter++;
        if (counter == 6) {
          $(".course-wrapper").empty();
          $(".course-wrapper").append("<h1 class='done'>Задание выполнено</h1>");
        }
      }, 1000);
    }
  });
});