//JavaScript Document - This script contains functionality for the text tools toolbar

$().ready(function () {
    //Display toolbar
    var toolbar_buttons = '<div id="tools" class="pull-right">' +
        '<div id="supporting_text_tools" class="supporting_code_control"><span class="glyphicon glyphicon-align-justify"></span>' +
        '<span class="tool_text"> Supporting Code</span> <a href="#" class="btn btn-default btn-xs" data-toggle="tooltip" data-placement="top" title="Hide Supporting Code" id="show-hide-code">' +
        '<span class="glyphicon glyphicon-eye-close"></span></a></div> ' +
        //Text Control
        '<div class="text_control"><span class="glyphicon glyphicon-text-size"></span> ' +
        '<span class="tool_text"> Text Size </span><a href="#" class="btn btn-default btn-xs" data-toggle="tooltip" data-placement="top" title="Increase Text Size" id="increase-text"><span class="glyphicon glyphicon-plus"></span></a> ' +
        '<a href="#" class="btn btn-default btn-xs" data-toggle="tooltip" data-placement="top" title="Decrease Text Size" id="decrease-text"><span class="glyphicon glyphicon-minus"></span></a></div> ';


    $('header:first').after(toolbar_buttons);

    if ($(window).width() < 768) {
        // Position tool tip to bottom when small screen
        $("a[data-placement='top']").attr('data-placement', 'bottom');
        $("#tools a[class='btn btn-default btn-sm']").attr('class', 'btn btn-default btn-xs');

    }
    // START Function to show/hide code component and toggle button display
    $('#show-hide-code').click(function (event) {
        event.preventDefault();
        $('#code-component').toggle('slow', function () {
            if ($(this).is(':visible')) {
                $('#show-hide-code').tooltip('hide').html('<span class="glyphicon glyphicon-eye-close"></span>');
                $('#show-hide-code').attr('data-original-title', 'Hide Supporting Code');
                localStorage.removeItem("hide_code");
            } else {
                $('#show-hide-code').tooltip('hide').html('<span class="glyphicon glyphicon-eye-open"></span>');
                $('#show-hide-code').attr('data-original-title', 'Show Supporting Code');
                localStorage["hide_code"] = 'hide';
            }
        });
        $(this).tooltip('hide');
        return (false);
    });
    // END Function to show/hide text component and toggle button display

    // Set text size increment value
    var increment = 3;
    // Store increased text size values to web storage
    $('#increase-text').click(function (event) {
        event.preventDefault();
        localStorage["text_size"] = ((localStorage["text_size"] * 1) + increment);
        $('body').css('font-size', localStorage["text_size"] + 'px');
        $(this).tooltip('hide');
        return (false);
    });
    // Store decreased text size values to web storage
    $('#decrease-text').click(function (event) {
        event.preventDefault();
        localStorage["text_size"] = ((localStorage["text_size"] * 1) - increment);
        $('body').css('font-size', localStorage["text_size"] + 'px');
        $(this).tooltip('hide');
        return (false);
    });

    // Begin web storage of data
    if (localStorage["hide_code"] == null) {
        // Display alert test to show code is being displayed
        // alert ("code being revealed");
    } else {
        // Display alert test to show code is being hidden
        // alert ("text being hidden");
        $('#show-hide-code').html('<span class="glyphicon glyphicon-eye-open"></span>');
        $('#code-component').hide();
    }

    if (localStorage["text_size"] == null) {
        // Set initial text size value
        localStorage["text_size"] = 14;
    } else {
        // Set text size to a retained user preference
        var txt_size = localStorage["text_size"] * 1;
        $('body').css('font-size',txt_size + 'px');
    }

    // Small screen nav drop down menu
    $('#toggle_ss_nav').click(function () {
        $("span", this).toggleClass("glyphicon-menu-hamburger");
    });

    // Trigger Tooltips
    $('[data-toggle="tooltip"]').tooltip();

    // Disable show/hide code button if no code component on page
    if ($('#code-component').length) {
        //double column
    } else {
        //single column
        $('#show-hide-code').attr('class', 'btn btn-default btn-xs disabled');
        $('#supporting_text_tools').attr('class', 'supporting_code_control opacity50');
    }

});