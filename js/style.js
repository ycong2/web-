$(document).ready(()=>{

    // 좌우슬라이드
    // setInterval(function(){
    //     $(".leftright .swiper-wrapper").animate({
    //         "marginLeft": -1200
    // }, 400, function(){
    //     $(".leftright .swiper-wrapper .swiper-slide").eq(0).appendTo( $(".leftright .swiper-wrapper"))
    //     $(".leftright .swiper-wrapper").css("marginLeft",0)
    // })
    // } , 3000)


    // 위아래슬라이드
    // setInterval(function(){
    //     $(".updown .swiper-wrapper").animate({
    //         "marginLeft": -300
    // }, 400, function(){
    //     $(".leftright .swiper-wrapper .swiper-slide").eq(0).appendTo( $(".updown .swiper-wrapper"))
    //     $(".leftright .swiper-wrapper").css("margintop",0)
    // })
    // } , 3000)

    var count = 0;
    setInterval(function(){
        count++;
        count %= 3;
        $(".fade .swiper-slide").eq(count).addClass("on").siblings().removeClass("on")
    },3000)
})

