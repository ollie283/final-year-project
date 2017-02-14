/*
 * Drag & Drop Activity
 *
 */

$(function () {

    $('#feedback_error').hide();
    $('#feedback_success').hide();

    var holder = 0;
    $(".drop_target ul").each(function () {
        if ($(this).height() > holder) {
            holder = ($(this).height() + 10);
        }
    });

    $(".drop_target ul").each(function () {
        $(this).height(holder);
    });

    // START randomise the order of the activities
    $.fn.randomize = function (selector) {
        var $elems = selector ? $(this).find(selector) : $(this).children(),
            $parents = $elems.parent();

        $parents.each(function () {
            $(this).children(selector).sort(function () {
                return Math.round(Math.random()) - 0.5;
            }).detach().appendTo(this);
        });

        return this;
    };
    // END randomise the order of the activities

    $('#act_drag_items').randomize();
    $('.draggable').draggable({revert: true, cursor: "move", opacity: 0.8});
    $('.drop_target').droppable({drop: handle_label_drop, hoverClass: "drop-hover"});
});