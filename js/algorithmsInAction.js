/*!
 * Algorithms In Action
 *
 * This file contains the functionality that
 * controls the visualization of the sorting
 * algorithms on the algorithmsInAction.html page
 *
 */

'use strict';

/*******************************
 * Algorithms In Action Canvas *
 *******************************/
function AlgorithmsInAction(canvasID, size) {
    this.timeout = 100;
    this.canvasID = canvasID;
    this.arraySize = size;
    this.setupCanvas();
    this.populateBars();
    this.visualizeBars();
    this.shuffleArray();
    this.enableButtonHandler();
}

AlgorithmsInAction.prototype.setupCanvas = function() {
    this.canvas = document.getElementById(this.canvasID);
    this.ctx = this.canvas.getContext('2d');
    this.ctx.imageSmoothingEnabled = false;
};

AlgorithmsInAction.prototype.getCanvasWidth = function() {
    return this.canvas.width;
};

AlgorithmsInAction.prototype.getCanvasHeight = function() {
    return this.canvas.height;
};

AlgorithmsInAction.prototype.clearCanvas = function() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
};

AlgorithmsInAction.prototype.visualizeBars = function() {
    var size = this.array.length;
    var canvasWidth = this.getCanvasWidth();
    var canvasHeight = this.getCanvasHeight();
    var widthRatio = canvasWidth / size;
    var heightRatio = canvasHeight / size;
    this.clearCanvas();

    // Fill the canvas with bars (canvas width)
    for (var i = 0; i < size; i++) {
        var value = this.array[i];
        var barHeight = value * heightRatio;
        var colour = i + 10 + i * 2;
        this.ctx.fillStyle = 'rgb(' + colour + ',' + colour + ',' + colour + ')';
        this.ctx.fillRect(i * widthRatio, canvasHeight - barHeight, widthRatio, barHeight);
    }
    this.ctx.save();
};

AlgorithmsInAction.prototype.populateBars = function() {
    this.array = [];
    var length = this.arraySize;
    // Fill canvas with number of bars
    for (var i = 1; i <= length; i++) {
        this.array.push(i);
    }
    this.visualizeBars();
};

/**********************
 * Sorting Algorithms *
 **********************/
AlgorithmsInAction.prototype.enableButtonHandler = function() {
    document.getElementById('sort-shuffle').onclick = this.shuffleArray.bind(this);
    document.getElementById('sort-bubble').onclick = this.bubbleSort.bind(this);
    document.getElementById('sort-insertion').onclick = this.insertionSort.bind(this);
    document.getElementById('sort-quick').onclick = this.quickSort.bind(this);

    document.getElementById('sort-increase').onclick = this.increaseSpeed.bind(this);
    document.getElementById('sort-decrease').onclick = this.decreaseSpeed.bind(this);

};

AlgorithmsInAction.prototype.increaseSpeed = function () {
    this.timeout -= 25;
};

AlgorithmsInAction.prototype.decreaseSpeed = function () {
    this.timeout += 25;
};

// Shuffle code adapted from http://jsfromhell.com/array/shuffle
AlgorithmsInAction.prototype.shuffleArray = function() {
    var a = this.array;
    for (var j, x, i = a.length; i; j = Math.floor(Math.random() * i), x = a[--i], a[i] = a[j], a[j] = x) {}
    this.visualizeBars();
    this.timeout = 100;
};

// Used by the quickSort function to generate and return a random pivot value
AlgorithmsInAction.prototype.randomInt = function (min, max) {
    return Math.floor(Math.random() * (max - min) + min);
};

// Bubble Sort
AlgorithmsInAction.prototype.bubbleSort = function() {
    var array = this.array;
    var length = array.length;
    var swap = true;
    var ref = this;
    var temp;
    var i = 0;

    var bubbleSortProcess = function() {
        // i < indexOfLastSortedElement
        if (i < length) {
            // If leftElement > rightElement THEN swap
            if (array[i] > array[i + 1]) {
                temp = array[i];
                array[i] = array[i + 1];
                array[i + 1] = temp;
                swap = true;
            }
            i++;
            ref.visualizeBars();
            window.setTimeout(bubbleSortProcess, ref.timeout);
        }
        else if (swap) {
            swap = false;
            // Decrease length of array as element is in sorted position
            length--;
            i = 0;
            bubbleSortProcess();
        }
    };
    bubbleSortProcess();
};

// Insertion Sort
AlgorithmsInAction.prototype.insertionSort = function () {
    var array = this.array;
    var length = array.length;
    var ref = this;
    var i = 1;
    var temp;

    var loop = function(){
        if (i < length){
            var j = i;

            var insertionSortProcess = function () {
                if (j > 0 && array[j - 1] > array[j]){
                    temp = array[j];
                    array[j] = array[j - 1];
                    array[j - 1] = temp;
                    j--;
                    ref.visualizeBars();
                    window.setTimeout(insertionSortProcess, ref.timeout);
                }
                else {
                    i++;
                    loop();
                }
            };
            insertionSortProcess();
        }
    };
    loop();
};

// Quick Sort
AlgorithmsInAction.prototype.quickSort = function() {
    var array = this.array;
    var ref = this;

    var quickSortProcess = function (left, right) {
        if (left < right) {
            // Partition left and right
            var pivotIndex = ref.randomInt(left, right);
            var pivotValue = array[pivotIndex];
            var current = left;
            var i = left;
            array[pivotIndex] = array[right];
            array[right] = pivotValue;

            var partitionLoop = function () {
                if (i < right) {
                    if (array[i] < pivotValue) {
                        ref.visualizeBars();
                        var temp = array[i];
                        array[i] = array[current];
                        array[current] = temp;
                        current++;
                    }
                    ref.visualizeBars();
                    window.setTimeout(partitionLoop, ref.timeout);
                }
                else {

        }
    };

};

/****************
 * Main Program *
 ****************/
(function() {
    new AlgorithmsInAction('algorithms_in_action', 40);
})();