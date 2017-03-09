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
    this.setupCanvas();

}

AlgorithmsInAction.prototype.setupCanvas = function() {
    this.canvas = document.getElementById(this.canvasID);
    this.ctx = this.canvas.getContext('2d');
    this.ctx.imageSmoothingEnabled = false;
};

/****************
 * Main Program *
 ****************/
(function() {
    new AlgorithmsInAction('algorithms_in_action', 40);
})();