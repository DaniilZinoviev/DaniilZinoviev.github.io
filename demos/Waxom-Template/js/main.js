window.onload = function () {
    // Scroll
	var timer;
	var scrolled;
	var necessaryBlock;
	document.getElementById('getStarted').onclick = function () {
		necessaryBlock = 2150;
		scrolled = window.pageYOffset;
		scrollToPurchaseBlock();
	}
	function scrollToPurchaseBlock(){
		if(scrolled < necessaryBlock){
			window.scrollTo(0,scrolled);
			scrolled = scrolled + 80; // 100 - scroll speed
			timer = setTimeout(scrollToPurchaseBlock, 10);
		}
		else{
			clearTimeout(timer);
			window.scrollTo(0,necessaryBlock);
		}
	}
  
    // Toggle menu
    let menuBtn = document.querySelector(".menu-btn");
    menuBtn.onclick = function() {
        let nav = this.parentElement.parentElement.querySelector(".nav");
        nav.classList.toggle("show")
        this.classList.toggle("close");
    }
    
    // Animations (+jQuery)
    $(".tabs").waypoint(function() {
        $(".tab").each(function(index) {
            setTimeout(() => {
                $(this).animated("fadeInRight")
                // this.classList.add("animated", "fadeInRight")
            }, index * 100);
        });
    }, {
        offset: "20%"
    });
    
    $(".section-head h2, .section-head p").animated("fadeInRight");
    
    $(".purchase h2, .purchase p").animated("fadeInLeft");
    $(".purchase button").animated("fadeInRight");
    
    $(".projects").waypoint(function() {
        $(".buttons_set button").each(function(index) {
            setTimeout(() => {
                this.classList.add("animated", "fadeInLeft")
            }, index * 100);
        });
        $(".projects_set .project_item").each(function(index) {
            setTimeout(() => {
                this.classList.add("animated", "zoomIn")
            }, index * 100);
        });
    }, {
        offset: "100%"
    });
    
    $(".mobile img").animated("fadeInLeft");
    $(".mobile ul").animated("fadeIn");
    
    $(".numbers").waypoint(function() {
        $(".statistic_item").each(function(index) {
            setTimeout(() => {
                this.classList.add("animated", "fadeInRight")
            }, index * 100);
        });
    }, {
        offset: "100%"
    });
  
    $(".recent").waypoint(function() {
        $(".post_item").each(function(index) {
            setTimeout(() => {
                this.classList.add("animated", "fadeInRight")
            }, index * 100);
        });
    }, {
        offset: "100%"
    });
    
    $(".brand_item").animated("slideInUp");
    
    $("footer .top_part").waypoint(function() {
        $(".top_part_wrap > div").each(function(index) {
            setTimeout(() => {
                this.classList.add("animated", "fadeInRight")
            }, index * 100);
        });
    }, {
        offset: "100%"
    });
    
    $("footer .left").animated("fadeInLeft");
    $("footer .right").animated("fadeInRight");
}