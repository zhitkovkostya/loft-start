$(document).ready(function(){
  var counter = 0;
  $('input[type="checkbox"]').click(function(){
    var checkbox = $(this);
    if(checkbox.prop("checked") == true){
      checkbox.closest( "footer" ).css( "background-color", "#e8f1dc" );
      checkbox.closest( ".course" ).css( "background-color", "#edf5e3" );
      checkbox.closest(".course__footer").find("label").css("color","#acd37e");
      //
      setTimeout(function() {
        checkbox.closest( ".course" ).remove();
        counter++;
        if (counter == 5) {
          $(".courses-heading").hide();
          $("#done").css("display", "block");
        }
      }, 1000);
    }
  });
});