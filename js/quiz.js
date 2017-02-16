$(document).ready(function () {

    var current_question = 0;
    var number_of_correct_answers = 0;
    var check_answer = 0;
    var questions = new Array;
    var quiz_title = 'Sorting Algorithms Assessment';


    // Quiz Questions
    questions[0] = new Array("Quick sort is which of the following?", "4", "A easy-split hard-merge sorting algorithm",
        "A easy-split easy-merge sorting algorithm", "A hard-split hard-merge sorting algorithm", "A hard-split easy-merge sorting algorithm",
        "Correct. Quick Sort uses the hard-split easy-merge approach.", "Incorrect. Quick Sort uses the hard-split easy-merge approach.");

    var num_of_questions = questions.length;

    $('#quiz_container').html('');

    $('#number_of_questions').append(num_of_questions);
    $('#quiz_container').append('<div class="panel-heading"><h2>' + quiz_title + '</h2></div><div class="panel-body"><form method="post" id="question_form" name="question_form"><div id="question_container"><p>Please click the <strong>"Start Quiz"</strong> button to continue</p></div><div><input name="continue_btn" type="submit" class="btn btn-success" id="continue_btn" value="Start Quiz" /></div></form></div>');

    function write_question() {
        // function writes the appropriate question to page

        // disable the submit / continue button
        $('#continue_btn').attr("disabled", true);

        $('#question_container').hide();

        // clear the question container
        $('#question_container').html('');


        // write the question to the page
        $('#question_container').html('<div class="panel panel-default"><div><strong>Q' + (current_question + 1) + ' '
            + questions[current_question][0] + '</strong><hr /></div><div class="alert"><div><label for="answer_0">' +
            '<input name="answer" id="answer_0" type="radio" value="1" /> ' + questions[current_question][2] + '</label></div>' +
            '<div><label for="answer_1"><input name="answer" id="answer_1" type="radio" value="2" /> ' + questions[current_question][3] + '</label></div>' +
            '<div><label for="answer_2"><input name="answer" id="answer_2" type="radio" value="3" /> ' + questions[current_question][4] + '</label></div>' +
            '<div><label for="answer_1"><input name="answer" id="answer_3" type="radio" value="4" /> ' + questions[current_question][5] + '</label></div>' +
            '</div></div>').hide().toggle(500);
    }


});