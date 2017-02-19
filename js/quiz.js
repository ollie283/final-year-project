$(document).ready(function () {

    var current_question = 0;
    var number_of_correct_answers = 0;
    var check_answer = 0;
    var questions = [];
    var quiz_title = 'Sorting Algorithms Quiz';


    // Quiz Questions
    questions[0] = new Array("Quick sort is which of the following?", "4",
        "An easy-split hard-merge sorting algorithm",
        "An easy-split easy-merge sorting algorithm",
        "An hard-split hard-merge sorting algorithm",
        "An hard-split easy-merge sorting algorithm",
        "Correct. Quick Sort uses the hard-split easy-merge approach.", "Incorrect. Quick Sort uses the hard-split easy-merge approach.");

    questions[1] = new Array("Which of the following is TRUE relating to the time complexity of the Insertion Sort algorithm when used to sort a list of size n?", "4",
        "It is O(n log n) in all cases.",
        "It is O(n^2) in all cases.",
        "It is O(n log n) on average but O(n^2) in the worst case.",
        "It is O(n) in the best case but O(n^2) in the worst case.",
        "Correct. Insertion Sort is O(n) in the best case but O(n^2) in the average and worst case.", "Incorrect. Insertion Sort is O(n) in the best case but O(n^2) in the average and worst case.");

    questions[2] = new Array("Who invented the Quick Sort Algorithm in 1962?", "2",
        "Primrose",
        "Hoare",
        "Stark",
        "Blair",
        "Correct. The Quick Sort Algorithm was invented by Hoare in 1962.", "Incorrect. The Quick Sort Algorithm was invented by Hoare in 1962.");

    questions[3] = new Array("Assume that we use Bubble Sort to sort n distinct elements in ascending order. When does the best case of Bubble Sort occur?", "2",
        "There is no best case for Bubble Sort. It always takes O(n*n) time",
        "When elements are sorted in ascending order",
        "When elements are sorted in descending order",
        "When elements are not sorted by any order",
        "Correct. When the list is already sorted (best-case), the complexity of bubble sort is only O(n).", "Incorrect. When the list is already sorted (best-case), the complexity of bubble sort is only O(n).");

    questions[4] = new Array("Which of the following is TRUE relating to the time complexity of the Quick Sort algorithm when used to sort a list of size n?", "3",
        "It is O(n log n) in all cases.",
        "It is O(n^2) in all cases.",
        "It is O(n log n) on average but O(n^2) in the worst case.",
        "It is O(n) in the best case but O(n^2) in the worst case.",
        "Correct. Quick Sort is O(n log n) on average but O(n^2) in the worst case.", "Incorrect. Quick Sort is O(n log n) on average but O(n^2) in the worst case.");

    questions[5] = new Array("The auxiliary space of insertion sort is O(1), what does O(1) mean?", "4",
        "The memory (space) required to process the data is not constant.",
        "It takes only 1 kb of memory.",
        "It is the speed at which the elements are traversed.",
        "It means the amount of extra memory Insertion Sort consumes doesn't depend on the input. The algorithm should use the same amount of memory for all inputs.",
        "Correct. The term O(1) states that the space required by the insertion sort is constant i.e., space required doesn't depend on input.", "Incorrect. The term O(1) states that the space required by the insertion sort is constant i.e., space required doesn't depend on input.");

    questions[6] = new Array("What is recurrence for worst case of QuickSort and what is the time complexity in Worst case?", "2",
        "Recurrence is T(n) = T(n-2) + O(n) and time complexity is O(n^2)",
        "Recurrence is T(n) = T(n-1) + O(n) and time complexity is O(n^2)",
        "Recurrence is T(n) = 2T(n/2) + O(n) and time complexity is O(n log n)",
        "Recurrence is T(n) = T(n/10) + T(9n/10) + O(n) and time complexity is O(n log n)",
        "Correct. The worst case of QuickSort occurs when the picked pivot is always one of the corner elements in sorted array. In worst case, QuickSort recursively calls one subproblem with size 0 and other subproblem with size (n-1). So recurrence is T(n) = T(n-1) + T(0) + O(n) The above expression can be rewritten as T(n) = T(n-1) + O(n)",
        "Incorrect. The worst case of QuickSort occurs when the picked pivot is always one of the corner elements in sorted array. In worst case, QuickSort recursively calls one subproblem with size 0 and other subproblem with size (n-1). So recurrence is T(n) = T(n-1) + T(0) + O(n) The above expression can be rewritten as T(n) = T(n-1) + O(n)");

    questions[7] = new Array("What is the best time complexity of bubble sort?", "4",
        "O(n log n)",
        "O(n^2)",
        "O(n log n)^2",
        "O(n)",
        "Correct. The bubble sort is at its best if the input data is sorted. i.e. If the input data is sorted in the same order as expected output. This can be achieved by using one boolean variable. The boolean variable is used to check whether the values are swapped at least once in the inner loop.",
        "Incorrect. The bubble sort is at its best if the input data is sorted. i.e. If the input data is sorted in the same order as expected output. This can be achieved by using one boolean variable. The boolean variable is used to check whether the values are swapped at least once in the inner loop.");

    questions[8] = new Array("Insertion sort is which of the following?", "1",
        "An easy-split hard-merge sorting algorithm",
        "An easy-split easy-merge sorting algorithm",
        "An hard-split hard-merge sorting algorithm",
        "An hard-split easy-merge sorting algorithm",
        "Correct. Insertion Sort uses the easy-split hard-merge approach.", "Incorrect. Insertion Sort uses the easy-split hard-merge approach.");

    questions[9] = new Array("Which of the following algorithms is NOT suitable for large data sets?", "3",
        "Insertion Sort",
        "Roulette Sort",
        "Bubble Sort",
        "Quick Sort",
        "Correct. Bubble sort is not suitable for large data sets as its average and worst case complexity are of Ο(n2) where n is the number of items.", "Incorrect. Bubble sort is not suitable for large data sets as its average and worst case complexity are of Ο(n2) where n is the number of items.");

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

    function show_results() {
        // Function to display the results of the quiz

        // clear the question container
        $('#question_container').html('');

        // output the results
        $('#question_container').html('<h3>You have completed the quiz</h3><p>You correctly answered <strong>' + number_of_correct_answers + '</strong> of the ' + num_of_questions + ' questions in this quiz.</p>').hide().toggle(500);
        $('#continue_btn').attr('value', 'Retry the Quiz');

        // reset variables to facilitate retry
        check_answer = 0;
        current_question = 0;
        number_of_correct_answers = 0;
        return false;
    }

    $('#question_form').submit(function () {
        // form submission logic
        // triggers the appropriate function

        if (check_answer == 0) {
            if (current_question >= num_of_questions) {
                show_results();
            } else {
                write_question();
            }
        } else {
            check_answers();
        }
        return false;
    });
});