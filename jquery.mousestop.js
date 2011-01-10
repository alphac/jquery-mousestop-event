/*
 * jQuery Mousestop Event v1.0
 * http://richardscarrott.co.uk/posts/view/jquery-mousestop-event
 *
 * Copyright (c) 2010 Richard Scarrott
 * W/ thanks to Ben Alman for his decent jQuery special event API write up:
 * http://benalman.com/news/2010/03/jquery-special-events/
 *
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 * Requires jQuery v1.3+
 *
 */

(function($) {

	// public vars
	$.mousestopDelay = 50;

	// special event
	$.event.special.mousestop = {
		setup: function(data) {
			$(this).data('mousestop', {delay: data})
				   .bind('mouseenter.mousestop', mouseenterHandler)
				   .bind('mouseleave.mousestop', mouseleaveHandler);
		},
		teardown: function() {
			$(this).removeData('mousestop')
			       .unbind('.mousestop');
		}
	};

	// private methods
<<<<<<< HEAD
	function mouseenterHandler(e) {
		if (typeof this.timeout == 'undefined') {
			this.timeout = null;
		}

>>>>>>> 191e56fe01483efedb0ce753cdf6553baf16b2a5
		var elem = $(this),
			data = elem.data('mousestop'),
			delay = data.delay || $.mousestopDelay;

		elem.bind('mousemove.mousestop', function() {
			clearTimeout(this.timeout);
			this.timeout = setTimeout(function() {
				elem.trigger('mousestop');
			}, delay);
		});
	};
<<<<<<< HEAD
	function mouseleaveHandler(e) {
		var elem = $(this);
>>>>>>> 191e56fe01483efedb0ce753cdf6553baf16b2a5
		elem.unbind('mousemove.mousestop');
		clearTimeout(this.timeout);
	};

	// shorthand alias
	$.fn.mousestop = function(data, fn) {
		if (fn == null) {
			fn = data;
			data = null;
		}

		return arguments.length > 0 ? this.bind('mousestop', data, fn) : this.trigger('mousestop');
	};
})(jQuery);
