(function($) {
 "use strict";
	// Page Preloader
	$(window).load(function() {
		$(".loader").delay(300).fadeOut();
		$(".animationload").delay(600).fadeOut("slow");

		
		/******************************/
		/****** Language Toggler ******/
		/******************************/
		var lang = 'English';

		try {
			lang = localStorage.getItem('language');
		} catch (e) {
			// nothing saved in local storage
		} 	

		var src = 'assets/images/' + lang + '.png';
		$('#language')[0].src = src;
		
		$("#language").tooltip({content:'aaa'})
		$("#language").click( function (e) {
			lang = lang === 'English' ? 'Korean' : 'English'; // Toggle language
			
			if (lang === 'English') {
				$(this).tooltip()
					.attr('data-original-title', "View website in Korean")
					.tooltip('fixTitle')
					.tooltip('show');
			} else {
				$(this).tooltip()
					.attr('data-original-title', "영어로 번역")
					.tooltip('fixTitle')
					.tooltip('show');
			}
			localStorage.setItem('language', lang);
			
			src = 'assets/images/' + lang + '.png';
			$('#language')[0].src = src;
			translatePage();
		});

		// Initialiize html object and save english text (used when toggling back to english)
		var htmlObject = {};
		for (let i = 0; i < 100; i++) {
			htmlObject['html' + i] = "";
		}


		function translatePage(initial) {

			if (lang === 'Korean') {
				htmlObject.html1 = $('.header-text').html();
				$('.header-text').html('정성과 신뢰를 가장 중시합니다');

				htmlObject.html2 = $('.nav.navbar-nav.navbar-right').html();
				$('.nav.navbar-nav.navbar-right').html(`
					<li class="current"><a href="index.html" title="">홈</a></li>
					<li><a href="practices.html" title="">업무분야</a></li>
					<li><a href="lawyers.html" title="">구성원</a></li>
					<li><a href="blog.html" title="">알림마당</a></li>
					<li><a href="#faq" title="">자주묻는질문</a></li>
					<li><a href="#contact" title="">찾아오시는길</a></li>
				`);

				// TODO: index.html
				// TODO: lawyers.html
				// TODO: lawyer-portfolio.html
				// TODO: practices.html
				// TODO: practice-description.html


			} else if (!initial && lang === 'English') {
				$('.header-text').html(htmlObject.html1);
				$('.nav.navbar-nav.navbar-right').html(htmlObject.html2);
			}

		}
		
		translatePage(true);



	});





	
	// Header Aff
	$(".menu-wrapper").affix({
		offset: {
			top: 100, 
			bottom: function () {
			return (this.bottom = $('.copyright').outerHeight(true))
			}
		}
	});
	
})(jQuery);
  