function BaseGrid() {  
    var canvas = document.querySelector("[data-js-target-script='base-grid']");
    var ctx = canvas.getContext("2d");

    // colors
    var color = "red";

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    // sizes
    var dx = 100;
    var dy = 100;

    let crossWidth = 10;
    let crossHeight = 10;

    // arrays
    var crosses = [];
    var sumcols = Math.ceil(canvas.width/dx);
    var sumrows = Math.ceil(canvas.height/dy);

    function initCrosses() {
        crosses = new Array(sumcols);
        for(var i=0; i < crosses.length; i++) {
            crosses[i] = new Array(sumrows);
            for(var j=0; j < crosses[i].length; j++) {
                crosses[i][j] = new drawCross(i*dx,j*dy,dx,dy,color);
                crosses[i][j].draw();
            }
        }
    }
    initCrosses();

    // function initLines() {
    //     lines = new Array(sumcols)
    //     for(var i=0; i < lines.length; i++){
    //         lines[i] = new Array(sumrows)
    //         for(var j=0; j < lines[i].length; j++) {
    //             lines[i][j] = new drawLines(i*dx,j*dy,dx,dy,color);
    //             lines[i][j].draw();
    //         }
    //     }
    // }
    // initLines()

    function drawCross (x,y,dx,dy,color) {
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.color = color;
        this.dotSize = 3

        this.draw = () => {
            ctx.strokeStyle = "rgba(34, 34, 34, 1)"
            ctx.lineWidth = 4;
            ctx.setLineDash([0,0])
            ctx.beginPath();
            ctx.moveTo((this.x + this.dx/2) - crossWidth, this.y + this.dy/2)
            ctx.lineTo((this.x + this.dx/2) + crossWidth, this.y + this.dy/2);
            ctx.stroke();
            ctx.closePath();
            ctx.beginPath();
            ctx.moveTo(this.x + this.dx/2, (this.y + this.dy/2) - crossHeight)
            ctx.lineTo(this.x + this.dx/2, (this.y + this.dy/2) + crossHeight);
            ctx.stroke();
            ctx.closePath();
            // if(dotInMiddle) {
            //     ctx.strokeStyle = dotColor
            //     ctx.beginPath();
            //     ctx.moveTo(this.x + this.dx/2, (this.y + this.dy/2) - this.dotSize)
            //     ctx.lineTo(this.x + this.dx/2, (this.y + this.dy/2) + this.dotSize);
            //     ctx.stroke();
            //     ctx.closePath();
            //     ctx.beginPath();
            //     ctx.moveTo((this.x + this.dx/2) - this.dotSize, this.y + this.dy/2)
            //     ctx.lineTo((this.x + this.dx/2) + this.dotSize, this.y + this.dy/2);
            //     ctx.stroke();
            //     ctx.closePath();
            // }
        }
    }

    // function drawLines(x,y,dx,dy,color){
    //     this.x = x;
    //     this.y = y;
    //     this.dx = dx;
    //     this.dy = dy;
    //     this.color = color;
        
    //     this.draw = () => {
    //         ctx.strokeStyle = lineColor
    //         ctx.lineWidth = 1;
    //         ctx.setLineDash([5, 15])
    //         ctx.beginPath();
    //         ctx.moveTo(x + dx/2, y)
    //         ctx.lineTo(x + dx/2, y + dy/2);
    //         ctx.stroke();
    //         ctx.closePath();
    //         ctx.beginPath();
    //         ctx.moveTo(x + dx, y + dy/2)
    //         ctx.lineTo(x + dx/2, y + dy/2);
    //         ctx.stroke();
    //         ctx.closePath();
    //         ctx.beginPath();
    //         ctx.moveTo(x + dx/2, y + dy)
    //         ctx.lineTo(x + dx/2, y + dy/2);
    //         ctx.stroke();
    //         ctx.closePath();
    //         ctx.beginPath();
    //         ctx.moveTo(x, y + dy/2)
    //         ctx.lineTo((x + dx/2), y + dy/2);
    //         ctx.stroke();
    //         ctx.closePath();
    //     }
    // }
}

export default BaseGrid