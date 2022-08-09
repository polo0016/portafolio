/* Styling Window Load functions */
function imgbox_height(){
    var img_height = $('.teammember-detail .detailbox .img-box').outerWidth();
    $('.teammember-detail .detailbox .img-box').css('height', img_height);
}
function main_top(){
    var heading_height = $('header').outerHeight();
    $('.main').css('padding-top',heading_height);
}
function mobile_menu(){
    var mob_menu = $('header .header-bottom .menu-area').html();
    $('#mobile_menu .menu-area').append(mob_menu);
}

$(window).on('load',function(){
    main_top();
    imgbox_height();
    
});


$(document).ready(function(){
    imgbox_height();
    main_top();
    mobile_menu();
    if($(window).width() < 768){
        $(".banner-area .btn").text("Visit our Shop");
    }
    $('.menu-area nav ul  li').on('click', function(){
        $('.menu-area nav ul  li').removeClass('active');
        $(this).toggleClass('active');
    });
    $( '.page-menu ul a').on( 'click', function(e){
        var href = $(this).attr( 'href' );
        $( 'html, body' ).animate({ 
              scrollTop: $( href ).offset().top
        }, '1000' );
        e.preventDefault();
        $('#mobile_menu').removeClass('open');
      });
      $('header .hamburger').on('click', function(e){
        e.stopPropagation();
        $('#mobile_menu').addClass('open');
    });
    $('header .header-top-area .search ').on('click', function(e){
        e.stopPropagation();
        $('#search_box').toggleClass('open');
    });
    $('#mobile_menu .close-menu').on('click', function(){
        $('#mobile_menu').removeClass('open');
    });
    $('.project-gallery .project-box > a').on('click', function(){
        var img_src = $(this).children('img').attr('src');
        $('.portfolio-section .portfolio-main-img-box .img-box img').attr('src',img_src);
    });
    setTimeout(function() {
        $('#preloader').removeClass('show');
    }, 1200);  

});

$(window).on('resize',function(){
    main_top();
    imgbox_height();
});
$(window).scroll(function(){
    if ($(this).scrollTop() > 210) {
       $('header').addClass('fixed');
    } else {
       $('header').removeClass('fixed');
    }
    if($(window).width() < 1661){
        if ($(this).scrollTop() > 80) {
            $('header').addClass('fixed');
         } else {
            $('header').removeClass('fixed');
         }
    }
});
$(document).click(function (e) {
    if(!$(e.target).closest('#mobile_menu').length){
      $("#mobile_menu").removeClass('open');
    }
    if(!$(e.target).closest('#search_box').length){
        $("#search_box").removeClass('open');
      }
});
