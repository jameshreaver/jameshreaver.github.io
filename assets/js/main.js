/*
	Code by html5up.
*/

(function($) {

	skel.breakpoints({
		large: '(max-width: 1680px)',
		medium: '(max-width: 640px)',
		small: '(max-width: 640px)',
		xsmall: '(max-width: 480px)'
	});

	$(function() {

		var	$window = $(window),
			$body = $('body'),
			$html = $('html');

		// Disable animations/transitions until the page has loaded.
			$html.addClass('is-loading');

			$window.on('load', function() {
				window.setTimeout(function() {
					$html.removeClass('is-loading');
				}, 0);
			});

		// Touch mode.
			if (skel.vars.mobile) {

				var $wrapper;

				// Create wrapper.
					$body.wrapInner('<div id="wrapper" />');
					$wrapper = $('#wrapper');

					// Pass scroll event to window.
						$wrapper.on('scroll', function() {
							$window.trigger('scroll');
						});

				// Scrolly.
					$window.on('load.hl_scrolly', function() {

						$('.scrolly').scrolly({
							speed: 1500,
							parent: $wrapper,
							pollOnce: true
						});

						$window.off('load.hl_scrolly');

					});

				// Enable touch mode.
					$html.addClass('is-touch');

			}
			else {

				// Scrolly.
					$('.scrolly').scrolly({
						speed: 1500
					});

			}

			  // Copyright.
        $("p.copyright > span").text(new Date().getFullYear());

				// Load widget.
				MediumWidget.Init({
					renderTo: '#feed',
					params: {
						"resource":"https://medium.com/@jameshreaver",
						"postsPerLine":1,
						"limit":3,
						"picture":"none",
						"fields": [
							"author",
							"description",
							"publishAt"
						],
						"ratio":"square"
					}
				})

		// Fix: Placeholder polyfill.
			$('form').placeholder();

		// Prioritize "important" elements on medium.
			skel.on('+medium -medium', function() {
				$.prioritize(
					'.important\\28 medium\\29',
					skel.breakpoint('medium').active
				);
			});

		// Header.
			var $header = $('#header'),
				$headerTitle = $header.find('header'),
				$headerContainer = $header.find('.container'),
                $overlay = $('#overlay');

			// Make title fixed.
				if (!skel.vars.mobile) {

					$window.on('load.hl_headerTitle', function() {

						skel.on('-medium !medium', function() {

							$headerTitle
								.css('position', 'fixed')
								.css('height', 'auto')
								.css('top', '50%')
								.css('left', '0')
								.css('width', '100%')
								.css('margin-top', ($headerTitle.outerHeight() / -2));

						});

						skel.on('+medium', function() {

							$headerTitle
								.css('position', '')
								.css('height', '')
								.css('top', '')
								.css('left', '')
								.css('width', '')
								.css('margin-top', '');

						});

						$window.off('load.hl_headerTitle');

					});

				}

			// Scrollex.
				skel.on('-small !small', function() {
					$header.scrollex({
						terminate: function() {

							$headerTitle.css('opacity', '');

						},
						scroll: function(progress) {

                            if (skel.vars.mobile) return;

							// Fade out title as user scrolls down.
								x = 1 - progress;

								$headerTitle.css('opacity', Math.max(0, Math.min(1, 2 * x)));
                                $overlay.css('opacity', Math.max(0.2, Math.min(0.84, 0.5 - x)));

						}
					});
				});

				skel.on('+small', function() {

					$header.unscrollex();

				});

		// Main sections.
			$('.main').each(function() {

				var $this = $(this),
					$primaryImg = $this.find('.image.primary > img'),
					$bg,
					options;

				// No primary image? Bail.
					if ($primaryImg.length == 0)
						return;

				// Hack: IE8 fallback.
					if (skel.vars.IEVersion < 9) {

						$this
							.css('background-image', 'url("' + $primaryImg.attr('src') + '")')
							.css('-ms-behavior', 'url("css/ie/backgroundsize.min.htc")');

						return;

					}

				// Scrollex.
					options = {
						mode: 'middle',
						delay: 200,
						top: '-10vh',
						bottom: '-10vh'
					};

					if (skel.canUse('transition')) {

						options.init = function() { $bg.removeClass('active'); };
						options.enter = function() { $bg.addClass('active'); };
						options.leave = function() { $bg.removeClass('active'); };

					}
					else {

						$bg
							.css('opacity', 1)
							.hide();

						options.init = function() { $bg.fadeOut(0); };
						options.enter = function() { $bg.fadeIn(400); };
						options.leave = function() { $bg.fadeOut(400); };

					}

					$this.scrollex(options);

			});

	});

})(jQuery);

function post(e) {var c="\"";function d(x){return x.split(c)[1]}
var x="function f(x){var i,o=\"\",l=x.length;for(i=0;i<l;i+=2) {if(i+1<l)o+=" +
"x.charAt(i+1);try{o+=x.charAt(i);}catch(e){}}return o;}f(\"ufcnitnof x({)av" +
" r,i=o\\\"\\\"o,=l.xelgnhtl,o=;lhwli(e.xhcraoCedtAl(1/)3=!11)4t{yrx{=+;x+ll" +
"=};acct(h)e}{f}roi(l=1-i;=>;0-i)-o{=+.xhcratAi(;)r}teru n.oussbrt0(o,)l};(f" +
")\\\"24,1\\\"\\\\JG_C7V03\\\\\\\\37\\\\0r\\\\\\\\\\\\0B03\\\\\\\\\\\\r0\\\\" +
"02\\\\\\\\05\\\\07\\\\00\\\\\\\\22\\\\0-\\\\79<924\\\\0?\\\\\\\"\\\\\\\\\\\\"+
"*!'ej/%'LLUI[D7T03\\\\\\\\01\\\\06\\\\02\\\\\\\\XYPR2J00\\\\\\\\r6}v}bg`x m" +
"dqkoa31\\\\0\\\\\\\\(\\\"}fo;n uret}r);+)y+^(i)t(eAodrCha.c(xdeCoarChomfrg." +
"intr=So+7;12%=;y++)y24<1(iif){++;i<l;i=0(ior;fthnglex.l=\\\\,\\\\\\\"=\\\"," +
"o iar{vy)x,f(n ioctun\\\"f)\")";for(i=0;i<3;i++){x=eval(x)};e.action=d(x);   }
