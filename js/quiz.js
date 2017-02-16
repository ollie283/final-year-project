$(document).ready(function () {

    var current_question = 0;
    var number_of_correct_answers = 0;
    var check_answer = 0;

    var questions = new Array;
    var quiz_title = 'Sorting Algorithms Assessment';

    $('#quiz_container').html('');
    $('#quiz_container').append('<div class="panel-heading"><h2>' + quiz_title + '</h2></div><div class="panel-body">' +
        '<form method="post" id="question_form" name="question_form"><div id="question_container">' +
        '<p>Please click the <strong>"Start Quiz"</strong> button to continue</p></div><div><input name="continue_btn" ' +
        'type="submit" class="btn btn-success" id="continue_btn" value="Start Quiz" /></div></form></div>');

});