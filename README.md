# jQuery - Full Year Calendar

This extension lets you display the months of a year and associate a given action with each month.
## Getting Started
Download the version from [GitHub].

In your web page:

<pre>
&lt;!-- include jQuery -->
&lt;script src="http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.js">&lt;/script>
&lt;!-- include jQuery fullyearcalendar -->
&lt;script src="http://path/to/your/copy/of/jquery-fullyear-calendar.js">&lt;/script>
&lt;script>
&lt;div id="yearcalendar">&lt;/div>
// invoke fullyearcalendar as needed -->
$(document).ready(function(){
    $('div#yearcalendar').fullYearCalendar({
        attr_css : { 'padding':"10px"},
        div_color1 : "red",
        div_color2 : "yellow"
    });
});

>&lt;/script>
</pre>

[GitHub]: https://github.com/homescriptone/jquery-fullyear-calendar/archive/master.zip

## Copyright and License
Copyright &copy; 2020 [HomeScript].

[HomeScript]:https://homescriptone.com?referrer=https://github.com/homescriptone/jquery-fullyear-calendar

The plugin is dual licensed under the GPL licenses.

You may use either license.  The MIT license is recommended for most projects because it is simple and easy to understand and it places almost no restrictions on what you can do with the plugin.

If the GPL suits your project better you are also free to use the plugin under that license.

You do not have to do anything special to choose one license or the other and you don't have to notify anyone which license you are using. You are free to use the FullYearCalendar plugin in commercial projects as long as the copyright header is left intact.
