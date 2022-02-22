//loading
        TweenMax.set('.progress .bar',{width:0});
            let mode;
            let modeCheck;
            let wWidth = $(window).width();
            function loading(){
                let progress = $(".progress"),
                    progressText =        
                    progress.find(".progress-text"),
                    imgLoad = imagesLoaded("body"),
                    imgTotal =             imgLoad.images.length,
                    imgLoaded = 0,
                    imgCurrent = 0,
                    progressTimer = setInterval(updateProgress, 1000 / 20);

                imgLoad.on("progress", function(){
                    imgLoaded++;
                });

                function updateProgress(){
                    let target = (imgLoaded / imgTotal) * 100;

                    imgCurrent += ( target -  imgCurrent ) * 0.1;
                    progressText.text( Math.floor(imgCurrent) + "%" );

//                    TweenMax.to('.progress .bar',.3, { width: imgCurrent + '%'});
                    // tlBar.staggerFromTo(".progress .bar", 0.8, 
                    //     {ease: Back.easeOut.config(1.7), delay: 2, scale:0}, // staggerFromto
                    //     {ease: Back.easeOut.ㄴconfig(1.7), delay: 2, scale:1});

                    if(imgCurrent >= 100){                          clearInterval(progressTimer); 
                        progressText.text( 100 + "%" );
                        // progress.delay(1000).animate({ top: "-130%" },400);
                        TweenMax.to('.progress',1,{y: -imgCurrent*1.6 + '%',ease: Power0.easeOut});
                        // tlLoad.to('')

                    }

                    if(imgCurrent > 99){ 
                        imgCurrent = 100;
                    }
                }
            }
            loading();

        //텍스트 쪼개기
        let splite1 = $(".splite1").text().split("").join("</span><span>");
        splite1 ="<span>" + splite1 + "</span>";
        $(".splite1").html(splite1);
        
        let splite4_1 = $(".splite4_1").text().split("").join("</span><span>");
        splite4_1 ="<span>" + splite4_1 + "</span>";
        $(".splite4_1").html(splite4_1);
        
        let splite4_2 = $(".splite4_2").text().split("").join("</span><span>");
        splite4_2 ="<span>" + splite4_2 + "</span>";
        $(".splite4_2").html(splite4_2);
        
        let splite4_3 = $(".splite4_3").text().split("").join("</span><span>");
        splite4_3 ="<span>" + splite4_3 + "</span>";
        $(".splite4_3").html(splite4_3);
        
        let splite4_4 = $(".splite4_4").text().split("").join("</span><span>");
        splite4_4 ="<span>" + splite4_4 + "</span>";
        $(".splite4_4").html(splite4_4);
        
        let splite4_5 = $(".splite4_5").text().split("").join("</span><span>");
        splite4_5 ="<span>" + splite4_5 + "</span>";
        $(".splite4_5").html(splite4_5);
        
        let splite6 = $(".splite6").text().split("").join("</span><span>");
        splite6 ="<span>" + splite6 + "</span>";
        $(".splite6").html(splite6);

        
        //
        let lastScrollTop = 0;                      //현재 스크롤 값(제일 마지막 스크롤 값)
        let roadLength = $("#contents").width();    //전체 가로값
        $("body").css("height", roadLength);        //섹션 전체 가로값을 body에 높이 값에 할당
        
        $(window).scroll(function(){
            let wScroll = $(window).scrollTop();
            let wWidth = $(window).width();
            let wHeight = $(window).height();
            let dHeight = $("body").height() - wHeight;
            let wRoad = roadLength - wWidth;
            let step = wRoad/dHeight;
            let goLeft = wScroll * step;
            
            $(".scroll").text(wScroll)
            
            $("#contents").css({ "transform":"translateX(-"+goLeft+"px)"});
            
            
            if( wScroll > 3600){
                gsap.to(".splite1 span", 1.5, {ease: Back.easeOut.config(1.7), opacity: 1, y: 1, stagger:0.07})
            }
            if( wScroll > 4200){
                gsap.to(".splite2 span", 1.5, {ease: Back.easeOut.config(1.7), opacity: 1, y: 1, stagger:0.1})
            }
            if( wScroll > 7900){
                gsap.to(".splite3 span", 1.5, {ease: Back.easeOut.config(1.7), opacity: 1, y: 1, stagger:0.3})
            }
            //work title : work1
            if( wScroll > 12500){
                $(".sec6 .main .com").css({"transform":"scale(1)","opacity":"1"});
            }
            if( wScroll > 12600){
                gsap.to(".splite4_1 span", 1.0, {ease: Back.easeOut.config(1.7), opacity: 1, y: 1, stagger:0.07});
            }
            //work title : work2
            if( wScroll > 15300){
                $(".sec7 .main .com").css({"transform":"scale(1)","opacity":"1"});
            }
            if( wScroll > 15400){
                gsap.to(".splite4_2 span", 1.0, {ease: Back.easeOut.config(1.7), opacity: 1, y: 1, stagger:0.07})
            }
            //work title : work3
            if( wScroll > 18200){
                $(".sec8 .main .com").css({"transform":"scale(1)","opacity":"1"});
            }
            if( wScroll > 18300){
                gsap.to(".splite4_3 span", 1.0, {ease: Back.easeOut.config(1.7), opacity: 1, y: 1, stagger:0.07})
            }
            //work title : work4
            if( wScroll > 21100){
                $(".sec9 .main .com").css({"transform":"scale(1)","opacity":"1"});
            }
            if( wScroll > 21200){
                gsap.to(".splite4_4 span", 1.0, {ease: Back.easeOut.config(1.7), opacity: 1, y: 1, stagger:0.07})
            }
            //work title : work5
            if( wScroll > 24000){
                $(".sec10 .main .com").css({"transform":"scale(1)","opacity":"1"});
            }
            if( wScroll > 24100){
                gsap.to(".splite4_5 span", 1.0 , {ease: Back.easeOut.config(1.7), opacity: 1, y: 1, stagger:0.07})
            }
            //work desc : splite 5_1~4
            if( wScroll > 13800){
                gsap.to(".splite5_1 span", 1.5, {ease: Back.easeOut.config(1.2), opacity: 1, y: 1, stagger:0.3})
            }
            if( wScroll > 16500){
                gsap.to(".splite5_2 span", 1.5, {ease: Back.easeOut.config(1.2), opacity: 1, y: 1, stagger:0.3})
            }
            if( wScroll > 19400){
                gsap.to(".splite5_3 span", 1.5, {ease: Back.easeOut.config(1.2), opacity: 1, y: 1, stagger:0.3})
            }
            if( wScroll > 22200){
                gsap.to(".splite5_4 span", 1.5, {ease: Back.easeOut.config(1.2), opacity: 1, y: 1, stagger:0.3})
            }
            if( wScroll > 24800){
                gsap.to(".splite5_5 span", 1.5, {ease: Back.easeOut.config(1.2), opacity: 1, y: 1, stagger:0.3})
            }
            //section11 text1 : contact
            if( wScroll > 27900){
                gsap.to(".splite6 span", 1.5, {ease: Back.easeOut.config(1.7), opacity: 1, y: 1, stagger:0.07})
            }
            //section11 text2 : 마지막말
            if( wScroll > 28500){
                gsap.to(".splite7 span", 1.5, {ease: Back.easeOut.config(1.2), opacity: 1, y: 1, stagger:0.1})
            }
            if( wScroll > 28500){
                gsap.to(".splite8", 1.5, {ease: Back.easeOut.config(1.2), opacity: 1, y: 1, stagger:0.5})
            }
        });
        
        //chart pie counter
        function counter(){
            if ($('.skill .count').size()) {
                $c = $('.skill .count');

                $c.each(function () {
                    var $this = $(this);
                    $this.data('target', parseInt($this.html()));
                    $this.data('counted', false);
                    $this.html('0');
                });

                $(window).on('scroll', function () {
                    var speed = 5000;

                    $c.each(function (i) {
                        var $t = $(this);
                        if (!$t.data('counted') && $(window).scrollTop() + $(window).height() >= 7000) {

                            $t.data('counted', true);

                            $t.animate({
                                dummy: 1
                            }, {
                                duration: speed,
                                step: function (now) {
                                    var $this = $(this);
                                    var val = Math.round($this.data('target') * now);
                                    $this.html(val);
                                }
                            });

                            // easy pie
                            $('.chart').easyPieChart({
                                barColor: '#000',
                                trackColor: '#fff',
                                scaleColor: '#696969',
                                scaleLength: 5,
                                lineWidth: 5,
                                size: 250,
                                lineCap: 'round',
                                animate: { duration: speed, enabled: true }
                            });
                        }
                    });
                }).triggerHandler('scroll');
            }
        }
        counter();
            
         
        //skrollr
        var s = skrollr.init({
            edgeStrategy: 'set',
            easing: 'linear'
        });