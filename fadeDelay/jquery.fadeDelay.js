/**
 * @author Michael McGhee
 * @title Fade Delay
 * 
 * Example usage below:
 *         $('.asdf').divDelay({
            delayAmt: 400,
            fadeAmt: 800
        });
 */
       (function($){
			
            $.fn.divDelay = function(options){
                options = $.extend($.fn.divDelay.defaults, options);
				$(this).hide();
                
                $(this).each(function(e){
                
                    $(this).delay(options.delayAmt).fadeIn(options.fadeAmt);
                     options.delayAmt += 400;                  
                });
				
			$.fn.divDelay.defaults = {
            
                delayAmt: 400,
                fadeAmt: 800
            
            };
			
            };
        })(jQuery);
