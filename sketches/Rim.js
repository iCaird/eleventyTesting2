class Rim {
    constructor(label,n,sv,w,h) {
        this.n=n;
        this.k = label.length;
        this.label = label;
        this.stepDirs = this.makeStepDirs(label);
        this.sv = sv;
        this.w = w;
        this.h = h;
        this.showLabelFlag = true;
        this.colour = [random(360),100,100,128];
    }

    makeStepDirs(l){
        //downsteps are encoded with a 1, makes sense with y coordinate stuff
        let stepDirs = [];
        for(let i = 1; i <= this.n; i++){
            if(l.includes(i)){
                stepDirs.push(1);
            }else {
                stepDirs.push(-1);
            }
        }
        return stepDirs;
    }

    show(){
        let curX = this.sv.x;
        let curY = this.sv.y;
        push();
        for(let i = 0; i < this.n; i++){
            let nextX = curX + this.w;
            let nextY = curY + this.h*this.stepDirs[i];
            
            colorMode(HSB);
            fill(this.colour);
            stroke(this.colour);
            line(curX,curY,nextX,nextY);
            circle(curX,curY,10);

            curX = nextX;
            curY = nextY;
        }
        circle(curX,curY,10);
        pop();

        if(this.showLabelFlag){
            this.showLabel();
        }
    }

    makeAbsolute(){
        let absolute = [0];
        let tracker = 0;
        for(let i = 0; i < this.n; i++){
            if(this.label.includes(i)){
                tracker++;
                
            }else {
                tracker--;
                
            }
            absolute.push(tracker);
        }
        return absolute;
    }

    cycle(dir){

        let temp = this.stepDirs;
        if(dir == 1){
            this.sv.y += -temp[temp.length-1]*this.h;
        } else if (dir == -1) {
            this.sv.y += temp[0]*this.h;
        }
        
        this.label = this.label.map((e) => {
            if((e+dir) % this.n == 0){
                return this.n;
            } else {
                return (e+dir) % this.n; 
            }
        });
        this.stepDirs = this.makeStepDirs(this.label);
    }


    flip(){
        let en = [...Array(n).keys()].map(e => { return e+1});

        this.label = en.filter(e => !this.label.includes(e));
        this.stepDirs = this.makeStepDirs(this.label);
    }


    clone(){
        return new Rim(this.label,this.n, this.sv.copy(), this.w,this.h);
    }

    showLabel(){
        push();
        stroke(0);
        fill(0);
        strokeWeight(1);
        textAlign(RIGHT,CENTER);
        textStyle(NORMAL);
        textSize(16);
        text(this.label.join(" "),this.sv.x-10,this.sv.y);
        pop();
    }
}
