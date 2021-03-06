// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require d3
//= require_tree .
//  function oneClick() {
//    var count = document.getElementsByClassName('btn').length;
//    document.getElementsByClassName('btn')[count-1].disabled = true;
// }
// function oneClick(){
//   // button.disabled = true;
//   // button.form.submit();
//   $(this).prop("disabled", true);
//   $("form").submit();
// }
// $(function(){
//   $("input[type=submit]").on("click",oneClick);
// });

function hideRow() {
last = $(".association.container").last();
  if(last) {
    last.hide();
  }

  // var count = document.getElementsByClassName("row").length;
  // var section = document.getElementsByClassName("row")[count -1];
  // section.style.display = 'none';
}

$(hideRow);


function showRow() {
  $(".association.container").last().show();

  // var count = document.getElementsByClassName("row").length;
  // var section = document.getElementsByClassName("row")[count -1];
  // section.style.display = 'block';
}

$(function () {
  $(".new-association").on("click", showRow);
});

function hiddenRow(){
  $(this).siblings("input[type=checkbox]").prop("checked", true)
  $("div[class=row]").attr("display", "none")
}
$(function(){
  $(".btn-danger").on("click",hiddenRow);
});


function myModal() {
  $('#myModal').modal('show')
}
$(function() {
  $(".fa.fa-calendar").on("click", myModal)
})

$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});
