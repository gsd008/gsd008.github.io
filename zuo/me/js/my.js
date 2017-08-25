

window.onload=function(){

    $(function() {

        $('#dowebok').fullpage({
            anchors: ['page1', 'page2', 'page3', 'page4', 'page5'],
            scrollingSpeed: 1000,
            navigation: true,

            afterLoad: function (anckorLink,index) {
                if (index===1){
                    $('.heading').addClass('animated flipInY');
                    $(".sub").addClass('animated flip');
                    $('.logo').addClass('animated flash');
                }

                if (index === 2) {
                    // $(".wen").addClass('animated fadeInUpBig');
                    $('.two').addClass('animated bounceInLeft');
                    $('.two1').addClass('animated bounceInDown');
                    $('.two2').addClass('animated bounceInRight');
                    $('.two3').addClass('animated bounceInLeft');
                    $('.two4').addClass('animated bounceInUp');
                    $('.two5').addClass('animated bounceInRight');
                }

                if (index === 3) {
                    $(".four").addClass('animated bounceInLeft');
                }

                if (index === 3) {
                    $('.five').addClass('animated bounceInRight');
                }

                if (index === 4) {
                    $('.four1').addClass('animated rotateInDownLeft');
                }

                if (index === 4) {
                    $('.five1').addClass('animated rotateInDownRight');
                }

                if (index === 5) {
                    $('.from').addClass('animated rotateIn');
                }
            },
            onLeave:function (nextIndex,index) {
                if (index===1){
                    $('.heading').removeClass('animated flipInY');
                    $(".sub").removeClass('animated flip');
                    $('.logo').removeClass('animated flash');
                }

                if (index === 2) {
                    // $(".wen").removeClass('animated fadeInUpBig');
                    $('.two').removeClass('animated bounceInLeft');
                    $('.two1').removeClass('animated bounceInDown');
                    $('.two2').removeClass('animated bounceInRight');
                    $('.two3').removeClass('animated bounceInLeft');
                    $('.two4').removeClass('animated bounceInUp');
                    $('.two5').removeClass('animated bounceInRight');
                }


                if (index === 3) {
                    $(".four").removeClass('animated bounceInLeft');
                }

                if (index === 3) {
                    $('.five').removeClass('animated bounceInRight');
                }

                if (index === 4) {
                    $('.four1').removeClass('animated rotateInDownLeft');
                }

                if (index === 4) {
                    $('.five1').removeClass('animated rotateInDownRight');
                }

                if (index === 5) {
                    $('.from').removeClass('animated rotateIn');
                }
            }
        })

    });
    $(".yuan").click(function () {
        $.fn.fullpage.moveSectionDown();
    })

}


