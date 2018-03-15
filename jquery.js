/* icon toggle */
$(document).ready(function(){
  $(".icon").click(function(){
    $(".icon").toggleClass('active');
    $('body').toggleClass("over");
    $('.on').toggleClass('off');
    $('.sidebar').toggleClass('active');    
  });
  $(".on").click(function(){
    $(".icon").toggleClass('active');
    $('body').toggleClass("over");
    $('.on').toggleClass('off');
    $('.sidebar').toggleClass('active');
  });
  $(".notif").click(function(){
    $(".circle").toggleClass("circle-off");
  });
  $(window).on('scroll', function(){
    if ($(window).scrollTop()){
      $("nav").slideUp();
    } else {
      $("nav").slideDown();
    }
  });
  $(".search2").click(function(){
    $(".find").toggleClass("find-off");
  });
  
  
  $(".edit, .closed, .saved").click(function(){
    $(".changed").toggleClass("changed-off");
    $('.on-1').toggleClass('off-1');
    $('body').toggleClass("over");
  });
  
  $('.datas').each(function(index){
  var simpan = $(this).html();    
  $(".change").eq(index).val(simpan);   
});

$(".saved").click(function(){
  $('.change').each(function(index){
    var searchData = $(this).eq(0).val();
    $(".datas").eq(index).html(searchData);
    var dat = $(".datas").eq(5).html(); 
    $(".ubah").html(dat);
  });  
});
  $(".change").keypress(function(e){
    
    if(e.which == 13){      
      $(".saved").click();
    };
  });
})