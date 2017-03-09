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
    this.canvasID = canvasID;
    this.arraySize = size;
    this.setupCanvas();
    this.populateBars();
    this.visualizeBars();
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

AlgorithmsInAction.prototype.visualizeBars = function() {
    var size = this.array.length;
    var canvasWidth = this.getCanvasWidth();
    var canvasHeight = this.getCanvasHeight();
    var widthRatio = canvasWidth / size;
    var heightRatio = canvasHeight / size;

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

/****************
 * Main Program *
 ****************/
(function() {
    new AlgorithmsInAction('algorithms_in_action', 40);
})();