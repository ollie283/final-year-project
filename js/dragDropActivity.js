/*
 * Drag & Drop Activity
 *
 */

$(function () {

    var count = 0;
    var message = '';
    $('#feedback_error').hide();
    $('#feedback_success').hide();

    // Increase size of drop area each time a object is added
    var holder = 0;
    $(".drop_target ul").each(function (index) {
        if ($(this).height() > holder) {
            holder = ($(this).height() + 10);
        }
    });

    $(".drop_target ul").each(function (index) {
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

    //make objects draggable
    $('.draggable').draggable({revert: true, cursor: "move", opacity: 0.8});

    // make drop area droppable
    $('.drop_target').droppable({drop: handle_label_drop, hoverClass: "drop-hover"});

    //get original positions of drag elements
    function handle_label_drop(event, ui) {
        var drop_target_value = $(this).data('type');
        var label_value = ui.draggable.data('activity');
        $('#feedback_error').hide();
        $('#feedback_success').hide();

        if (drop_target_value == label_value) {

            //alert('match');
            ui.draggable.hide();

            $(this).addClass('correct');
            $('.' + ui.draggable.data('class')).css("visibility", "visible");

            switch (ui.draggable.data('class')) {
                case 'activity_ms':
                    message = 'Merge Sort uses the easy-split hard-merge approach.';
                    break;
                case 'activity_is':
                    message = 'Insertion Sort uses the easy-split hard-merge approach.';
                    break;
                case 'activity_qs':
                    message = 'Quick Sort uses the hard-split easy-merge approach.';
                    break;
                case 'activity_ss':
                    message = 'Selection Sort uses the hard-split easy-merge approach.';
                    break;
                case 'activity_bbs':
                    message = 'Bubble Sort uses the hard-split easy-merge approach.';
                    break;
                case 'activity_bs':
                    message = 'Balanced Sort is not a Sorting Algorithm';
                    break;
                case 'activity_rs':
                    message = 'Roulette Sort is not a Sorting Algorithm';
                    break;
            }

            $('#feedback_success').html('<span class="glyphicon glyphicon-tick"></span> Correct! ' + message + '');
            $('#feedback_success').show();
            count++;

            // If all the cards have been placed correctly then display a message
            if (count == 7) {
                $('#activity_complete').modal('show');
            }

            ui.draggable.position({of: $(this), my: '50% 50%', at: '50% 50%'});

        } else {
            //No match
            ui.draggable.draggable('option', 'revert', true);

            $('#feedback_error').html('<span class="glyphicon glyphicon-remove"></span> Incorrect! Try again.');
            $('#feedback_error').show();
        }
    }
});