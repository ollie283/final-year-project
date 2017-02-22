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

});