

window.onload=function(){

    $(function() {

        $('#dowebok').fullpage({
            anchors: ['page1', 'page2', 'page3', 'page4', 'page5'],
            scrollingSpeed: 1000,
            navigation: true,

            afterLoad: function (anckorLink,index) {
                if (index === 2) {
                    $(".wen").addClass('animated fadeInUpBig');
                    $(".one1").animate({
                        marginLeft:0,
                        opacity:1
                    },1500)
                    $(".one2").animate({
                        opacity:1
                    },2000)
                    $(".one3").animate({
                        opacity:1
                    },2500)
                }

                if (index === 3) {
                    $(".four").addClass('animated bounceInLeft');
                }

                if (index === 3) {
                    $('.five').addClass('animated bounceInRight')
                }

                if (index === 4) {
                    $('.four1').addClass('animated bounceInRight')
                }

                if (index === 4) {
                    $('.five1').addClass('animated bounceInLeft')
                }
            },
            onLeave:function (nextIndex,index) {
                if (index === 2) {
                    $(".wen").removeClass('animated fadeInUpBig');
                    $(".one1").animate({
                        marginLeft:-350,
                        opacity:0
                    },1500)
                    $(".one2").animate({
                        opacity:0
                    },2000)
                    $(".one3").animate({
                        opacity:0
                    },2500)
                }


                if (index === 3) {
                    $(".four").removeClass('animated bounceInLeft')
                }

                if (index === 3) {
                    $('.five').removeClass('animated bounceInRight')
                }

                if (index === 4) {
                    $('.four1').removeClass('animated bounceInRight')
                }

                if (index === 4) {
                    $('.five1').removeClass('animated bounceInLeft')
                }
            }
        })

    });
    $(".yuan").click(function () {
        $.fn.fullpage.moveSectionDown();
    })

}


