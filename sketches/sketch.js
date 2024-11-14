let t = 0;
let circles = [];
let max = 40;

function setup(){
    createCanvas(400,400).parent("sketch-wrapper");
    for(let i = 0; i < max; i++){
        circles.push({
            rad : random(5,15),
            dist : random(20,150),
            offset : random(0,360),
            vel : random(-10,10)
        })
    }
}

function draw(){
    background(100);
    translate(width/2,height/2);
    for( let {rad, dist, offset, vel} of circles){
        circle(dist*cos(vel*t+offset),dist*sin(vel*t+offset),2*rad);
    }
    t -= 0.01;
}




