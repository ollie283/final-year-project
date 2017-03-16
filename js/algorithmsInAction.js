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
    this.timeout = 25;
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

    // Fill the canvas with bars
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
};

// Shuffle code adapted from http://jsfromhell.com/array/shuffle
AlgorithmsInAction.prototype.shuffleArray = function() {
    var a = this.array;
    for (var j, x, i = a.length; i; j = Math.floor(Math.random() * i), x = a[--i], a[i] = a[j], a[j] = x) {}
    this.visualizeBars();
};

//Bubble Sort
AlgorithmsInAction.prototype.bubbleSort = function() {
    var array = this.array;
    var length = array.length;
    var swap = true;
    var ref = this;
    var i = 0;

    var bubbleSortProcess = function() {
        if (i < length) {
            if (array[i] > array[i+1]) {
                var temp = array[i];
                array[i] = array[i+1];
                array[i+1] = temp;
                swap = true;
            }
            i++;
            ref.visualizeBars();
            window.setTimeout(bubbleSortProcess, ref.timeout);
        }
        else if (swap) {
            swap = false;
            length--;
            i = 0;
            bubbleSortProcess();
        }
    };
    bubbleSortProcess();
};

/****************
 * Main Program *
 ****************/
(function() {
    new AlgorithmsInAction('algorithms_in_action', 40);
})();