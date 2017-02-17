$(document).ready(function () {

    var current_question = 0;
    var number_of_correct_answers = 0;
    var check_answer = 0;
    var questions = [];
    var quiz_title = 'Sorting Algorithms Quiz';


    // Quiz Questions
    questions[0] = new Array("Quick sort is which of the following?", "4", "A easy-split hard-merge sorting algorithm",
        "A easy-split easy-merge sorting algorithm", "A hard-split hard-merge sorting algorithm", "A hard-split easy-merge sorting algorithm",
        "Correct. Quick Sort uses the hard-split easy-merge approach.", "Incorrect. Quick Sort uses the hard-split easy-merge approach.");

    questions[1] = new Array("Which of the following is TRUE relating to the time complexity of the Insertion Sort algorithm when used to sort a list of size n?", "4", "It is O(n log n) in all cases.",
        "It is O(n^2) in all cases.", "It is O(n log n) on average but O(n^2) in the worst case.", "It is O(n) in the best case but O(n^2) in the worst case.",
        "Correct. Insertion Sort is O(n) in the best case but O(n^2) in the average and worst case.", "Incorrect. Insertion Sort is O(n) in the best case but O(n^2) in the average and worst case.");

    questions[2] = new Array("Who invented the Quick Sort Algorithm in 1962?", "2", "Primrose", "Hoare", "Stark", "Blair", "Correct. The Quick Sort Algorithm was invented by Hoare in 1962.",
        "Incorrect. The Quick Sort Algorithm was invented by Hoare in 1962.")

    var num_of_questions = questions.length;

    $('#quiz_container').html('');

    $('#number_of_questions').append(num_of_questions);
    $('#quiz_container').append('<div class="panel-heading"><h2>' + quiz_title + '</h2></div>' +
        '<div class="panel-body"><form method="post" id="question_form" name="question_form">' +
        '<div id="question_container"><p>Please click the <strong>"Start Quiz"</strong> button to continue</p></div>' +
        '<div><input name="continue_btn" type="submit" class="btn btn-success" id="continue_btn" value="Start Quiz" /></div></form></div>');

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
            '<div><label for="answer_3"><input name="answer" id="answer_3" type="radio" value="4" /> ' + questions[current_question][5] + '</label></div>' +
            '</div></div>').hide().toggle(500);

        check_answer = 1;

        // re-label the continue button
        $('#continue_btn').attr('value', 'Check Your Answer');
        $('#continue_btn').attr('class', 'btn btn-warning');

        // Enable the submit / continue button when radio button is selected
        $("#question_container :radio").click(function (event) {
            $('#continue_btn').attr("disabled", false);
        });
    }

    function check_answers() {
        // function to check the answer supplied

        // store the supplied answer
        var supplied_answer = $('#question_container :radio:checked').val();

        // check against array
        if (supplied_answer == questions[current_question][1]) {
            $('#question_container').append('<p class="answer_feedback"><span class="label label-success">That is Correct <span class="glyphicon glyphicon-ok"></span></span> ' + questions[current_question][6] + '</p>');
            $('.answer_feedback').hide().toggle(500);
            number_of_correct_answers++;
        } else {
            $('#question_container').append('<p class="answer_feedback"><span class="label label-danger">That is Incorrect <span class="glyphicon glyphicon-remove"></span></span> ' + questions[current_question][7] + '</p>')
        }
        // disable the continue btn
        $("#question_container :radio").attr("disabled", true);

        // re-label the continue button
        $('#continue_btn').attr('value', 'Continue');
        $('#continue_btn').attr('class', 'btn btn-success');

        // log data in variables
        check_answer = 0;
        current_question++;
    }

    $('#question_form').submit(function () {
        // form submission logic
        // triggers the appropriate function

        if (check_answer == 0) {
            if (current_question >= num_of_questions) {
                //function to display results;
            } else {
                write_question();
            }
        } else {
            check_answers();
        }

        return false;

    });


});