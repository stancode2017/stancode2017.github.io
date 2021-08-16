$(window).scroll(function(){
    var h=$(this).scrollTop();
    if(h<=300)
    {
        $(".masthead_h1_style").addClass("fadeInUp ");
        $(".masthead_h5_style").addClass("flipInX delay-1s");
    }
    else
    {
        $(".masthead_h1_style").removeClass("fadeInUp ");
        $(".masthead_h5_style").removeClass("flipInX delay-1s");
        
    }
    if(h>=100 && h<=1000){//page_2
        $(".carousel_right_p").addClass("zoomInDown");
    }
    else{
        $(".carousel_right_p").removeClass("zoomInDown");
    }
    
});