/**
 * @description : This extension allow to display the months of a year and  associate to each month a special events or a link.
 * @version : 1.0
 * @author Emmanuel ADEKPLOVI : <emmanuel.adekplovi@homescriptone.com>
 */
(function ($) {
    $.fn.fullYearCalendar = function (options) {
        let date_obj = new Date();
        let current_Year = date_obj.getFullYear();

        let settings = $.extend({
            attr_css : null,
            done : null,
            hover : null,
            div_color_1 : null,
            div_color_2 : null
        }, options);

        fullYearCalendar(this,settings);
        function fullYearCalendar(selector,settings){
            if (settings.attr_css){
                for(css_attr in settings.attr_css ){
                    selector.css(css_attr, settings.attr_css[css_attr])
                }
            }
            selector.append('<div class="hs-fullyearcalendar-options-panel">'+'<div class="hs-fullyearcalendar-btn-prev"> <button class="btn btn-primary">Prev</button></div>'+'<div class="hs-fullyearcalendar-options"><strong>'+current_Year+'</strong></div>'+'<div class="hs-fullyearcalendar-btn-next"> <button class="btn btn-primary">Next</button></div>'+'</div>')
            selector.append('<div class="hs-fullyearcalendar"> <div class="hs-fullyearcalendar-semester-1"><div>Janvier</div> <div>Fevrier</div> <div>Mars</div> <div>Avril</div> <div>Mai</div> <div>Juin</div></div> <div class="hs-fullyearcalendar-semester-2"><div>Juillet</div> <div>Aout</div>  <div>Septembre</div> <div>Octobre</div> <div>Novembre</div> <div>Decembre</div></div>        </div>')
            if ($.isFunction(settings.hover)){
                settings.hover.call(this)
            }
            if (settings.div_color1){
                $('div.hs-fullyearcalendar-semester-1 div').css('background-color',settings.div_color1)
                
            }

            if (settings.div_color_2){
                $('div.hs-fullyearcalendar-semester-2 div').css('background-color',settings.div_color_2)
            }

            if ($.isFunction(settings.done)){
                settings.done.call(this)
            }
        }

        $(document).on('click dbclick','div.hs-fullyearcalendar-btn-prev',function(){
            getPrevYear(current_Year);
        })

        $(document).on('click dbclick','div.hs-fullyearcalendar-btn-next',function(){
            getNextYear(current_Year);
        })


        function getPrevYear(year){
            $(document).ready(function(){
                $('div.hs-fullyearcalendar-btn-prev').on('click dbclick',function(){
                    $('div.hs-fullyearcalendar-options').html("<strong>"+parseInt(year-1)+"</strong>");
                    current_Year = year - 1;
                });
            });
        }

        function getNextYear(year){
            $(document).ready(function(){
                $('div.hs-fullyearcalendar-btn-next').on('click dbclick',function(){
                    $('div.hs-fullyearcalendar-options').html("<strong>"+parseInt(year+1)+"</strong>");
                    current_Year = year + 1;
                });
            });
        }
    };
    
    

    
}(jQuery, window, document));
