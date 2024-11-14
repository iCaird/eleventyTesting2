let t2 = 0;
let circles2 = [];
let max2 = 40;

function setup(){
    createCanvas(400,400);
    for(let i = 0; i < max2; i++){
        circles2.push({
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
    for( let {rad, dist, offset, vel} of circles2){
        circle(dist*cos(vel*t2+offset),dist*sin(vel*t2+offset),2*rad);
    }
    t2 -= 0.01;
}




