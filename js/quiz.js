$(document).ready(function () {

    var current_question = 0;
    var number_of_correct_answers = 0;
    var check_answer = 0;

    var questions = new Array;
    var quiz_title = 'Sorting Algorithms Assessment';

    // Quiz Questions
    questions[0] = new Array("Quick sort is which of the following?", "4", "A hard-split easy-merge sorting algorithm",
        "A hard-split hard-merge sorting algorithm", "An easy-split easy-merge sorting algorithm", "An easy-split hard-merge sorting algorithm",
        "Correct. Quick Sort uses the hard-split easy-merge approach.", "Incorrect. Quick Sort uses the hard-split easy-merge approach.");


    $('#quiz_container').html('');
    $('#quiz_container').append('<div class="panel-heading"><h2>' + quiz_title + '</h2></div><div class="panel-body">' +
        '<form method="post" id="question_form" name="question_form"><div id="question_container">' +
        '<p>Please click the <strong>"Start Quiz"</strong> button to continue</p></div><div><input name="continue_btn" ' +
        'type="submit" class="btn btn-success" id="continue_btn" value="Start Quiz" /></div></form></div>');

    

});