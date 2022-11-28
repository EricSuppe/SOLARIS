function PixelGrid(props) {
    const canvas = document.querySelector(props.grid);
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    let particleArray = [];
    let adjustX = props.startX;
    let adjustY = 10;
    let color = "#ff5c00"
    // let strokeColor = "#ff5c00"
    let highPerformanceMode = props.highPerformanceMode

    const fps = 60;

    const a = 2 * Math.PI / 6;

    // const mouse = {
    //     x: null,
    //     y: null,
    //     radius: 0,
    // }

    // const useEventlistener = () => {
    //     mouse.radius = 250
    //     highPerformanceMode && document.querySelector('[data-js-target-script="pixel-grid-event-cover"]').addEventListener("mousemove", function(event){
    //         mouse.x = event.x;
    //         mouse.y = event.y;
    //     })
    // }
    // window.setTimeout(useEventlistener,10000)



    // scroll update mouse position
    ctx.font = "30px ClashDisplay-Bold";
 
    ctx.fillText(`${props.letter}`, 0, 40); //0, 40
    const textCoordinates = ctx.getImageData(0, 0, 140, 40);//0,0,40,40

    class Particle {
        constructor(x, y, baseX, baseY) {
            this.x = x;
            this.y = y;
            this.size = 5;
            this.baseX = baseX;
            this.baseY = baseY;
            this.density = (Math.random() * 40) + 5;
            this.color = color;
        }
        draw() {
            ctx.fillStyle = this.color;
            ctx.beginPath();
            for (var i = 0; i < 6; i++) {
                ctx.lineTo(this.x + this.size * Math.cos(a * i), this.y + this.size * Math.sin(a * i));
            }
            ctx.closePath();
            ctx.fill();
        }
        update() {
            // let dx = mouse.x - this.x;
            // let dy = mouse.y - this.y;
            // let distance = Math.sqrt(dx*dx + dy*dy);
            // let forceDirectionX = dx/distance;
            // let forceDirectionY = dy/distance;
            // let maxDistance = mouse.radius;
            // let force = (maxDistance - distance)/maxDistance;
            // let directionX = forceDirectionX * force * this.density;
            // let directionY = forceDirectionY * force * this.density;
            // if(distance < mouse.radius) {
            //     this.x -= directionX;
            //     this.y -= directionY;
            // } else {
                let dx = this.x - this.baseX;
                let dy = this.y - this.baseY;
                if(this.x !== this.baseX) {
                    this.x -= dx/20;
                }
                if(this.y !== this.baseY) {
                    this.y -= dy/20;
                }
                if(highPerformanceMode && (this.y !== this.baseY || this.x != this.baseX)) {
                    let distance = Math.sqrt(dx*dx+dy*dy)
                    let opacity = 1 - distance/100
                    this.color = "rgb(255, 92, 0," + opacity + ")"
                }
            // }
        }
    }

    function init() {
        particleArray = [];
        for(let y = 0, y2 = textCoordinates.height; y < y2; y++) {
            for(let x = 0, x2 = textCoordinates.width; x < x2; x++) {
                if(textCoordinates.data[(y * 4 * textCoordinates.width) + (x * 4) + 3] > 220) {
                    let positionX = x + adjustX;
                    let positionY;
                    if(x%2 === 0 ) {
                        positionY = y + adjustY + 0.5;
                    } else {
                        positionY = y + adjustY;
                    }
                    if(highPerformanceMode){
                        particleArray.push(new Particle(Math.random() * canvas.width, Math.random() * canvas.height, positionX*12, positionY*12));
                    } else {
                        particleArray.push(new Particle(positionX*12, positionY*12, positionX*12, positionY*12));
                    }
                }
            }
        }
    }
    init();

    let startTime = Date.now()

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for(let i = 0; i < particleArray.length; i++) {
            if(particleArray[i].x != particleArray[i].baseX) {          
                particleArray[i].update();
                particleArray[i].draw();
            }
            !highPerformanceMode && particleArray[i].draw();
        }
        // connect();
        setTimeout(() => {
            if(highPerformanceMode && Date.now() - startTime < 10000) requestAnimationFrame(animate);
        }, 1000 / fps);
    }
    window.setTimeout(animate,500);

    // function connect() {
    //     for(let a = 0; a < particleArray.length; a++) {
    //         for(let b = a; b < particleArray.length; b++) {
    //             let dx = particleArray[a].x - particleArray[b].x;
    //             let dy = particleArray[a].y - particleArray[b].y;
    //             let distance = Math.sqrt(dx*dx+dy*dy);
    //             let opactiy = 1 - distance/50

    //             if(distance < 17) {
    //                 ctx.strokeStyle = "rgb(255, 92, 0," + opactiy + ")";
    //                 ctx.lineWidth = 2;
    //                 ctx.beginPath();
    //                 ctx.moveTo(particleArray[a].x, particleArray[a].y);
    //                 ctx.lineTo(particleArray[b].x, particleArray[b].y);
    //                 ctx.stroke();
    //             }
    //         }
    //     }
    // }
}

export default PixelGrid


