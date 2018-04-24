(function(d){var h=[];d.loadImages=function(a,e){"string"==typeof a&&(a=[a]);for(var f=a.length,g=0,b=0;b<f;b++){var c=document.createElement("img");c.onload=function(){g++;g==f&&d.isFunction(e)&&e()};c.src=a[b];h.push(c)}}})(window.jQuery);
$.fn.hasAttr = function(name) { var attr = $(this).attr(name); return typeof attr !== typeof undefined && attr !== false; };


$(document).ready(function() {
r=function(){dpi=window.devicePixelRatio;var a='data-src'; if($('.js .slider-for .slide0').hasAttr('src')) { a='src'; } $('.js .slider-for .slide0').attr(a, (dpi>1) ? 'images/png_fig04-1160.png' : 'images/png_fig04-580.png');
$('.js .slider-nav .slide0').attr('src', (dpi>1) ? 'images/thumb-png_fig04-172.png' : 'images/thumb-png_fig04-86.png');
var a='data-src'; if($('.js .slider-for .slide1').hasAttr('src')) { a='src'; } $('.js .slider-for .slide1').attr(a, (dpi>1) ? 'images/png_one_co_inbeam_ir_co54-1160.png' : 'images/png_one_co_inbeam_ir_co54-580.png');
$('.js .slider-nav .slide1').attr('src', (dpi>1) ? 'images/thumb-png_one_co_inbeam_ir_co54-172.png' : 'images/thumb-png_one_co_inbeam_ir_co54-86.png');
var a='data-src'; if($('.js .slider-for .slide2').hasAttr('src')) { a='src'; } $('.js .slider-for .slide2').attr(a, (dpi>1) ? 'images/png_one_co_inbeam_ir_sj13-1160.png' : 'images/png_one_co_inbeam_ir_sj13-580.png');
$('.js .slider-nav .slide2').attr('src', (dpi>1) ? 'images/thumb-png_one_co_inbeam_ir_sj13-172.png' : 'images/thumb-png_one_co_inbeam_ir_sj13-86.png');

$('.js .slider-nav .slide3').attr('src', (dpi>1) ? 'images/thumb-ngc0253_pacs_phot_blue_scanamorphos_pacs70_0_repaired-172.png' : 'images/thumb-ngc0253_pacs_phot_blue_scanamorphos_pacs70_0_repaired-86.png');

$('.js .slider-nav .slide4').attr('src', (dpi>1) ? 'images/thumb-ngc0253_pacs_phot_green_scanamorphos_pacs100_0_repaired-172.png' : 'images/thumb-ngc0253_pacs_phot_green_scanamorphos_pacs100_0_repaired-86.png');

$('.js .slider-nav .slide5').attr('src', (dpi>1) ? 'images/thumb-ngc0253_pacs_phot_red_scanamorphos_pacs160_0_repaired-172.png' : 'images/thumb-ngc0253_pacs_phot_red_scanamorphos_pacs160_0_repaired-86.png');
var a='data-src'; if($('.js .slider-for .slide6').hasAttr('src')) { a='src'; } $('.js .slider-for .slide6').attr(a, (dpi>1) ? 'images/ngc253_co10_fov_60arcsec-1160.jpg' : 'images/ngc253_co10_fov_60arcsec-580.jpg');
$('.js .slider-nav .slide6').attr('src', (dpi>1) ? 'images/thumb-ngc253_co10_fov_60arcsec-172.jpg' : 'images/thumb-ngc253_co10_fov_60arcsec-86.jpg');
var a='data-src'; if($('.js .slider-for .slide7').hasAttr('src')) { a='src'; } $('.js .slider-for .slide7').attr(a, (dpi>1) ? 'images/ngc253_hcn10_fov_60arcsec-1160.jpg' : 'images/ngc253_hcn10_fov_60arcsec-580.jpg');
$('.js .slider-nav .slide7').attr('src', (dpi>1) ? 'images/thumb-ngc253_hcn10_fov_60arcsec-172.jpg' : 'images/thumb-ngc253_hcn10_fov_60arcsec-86.jpg');};
if(!window.HTMLPictureElement){r();}
$('.js .slider-for').slick({lazyLoad: 'ondemand',slidesToShow: 1,slidesToScroll: 1,arrows: false,fade: true,infinite: true,asNavFor: '.js .slider-nav',});$('.js .slider-nav').slick({slidesToShow: 5,slidesToScroll: 1,asNavFor: '.js .slider-for',centerMode: true,focusOnSelect: true,dots: true,arrows: true,infinite: true,autoplay: true,pauseOnHover: false,autoplaySpeed: 2500});
});