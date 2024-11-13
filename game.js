/*function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(255, 140, 0);
}
*/
function startScreen(){
    background(100,100,100);
    text("start",180,50);
}

function gameScreen(){
    background(100,100,100);
    text("Game",180,50);
}

function resultScreen(){
    background(50,50,50);
    text("Result",180,50);
}



function cat(x,y,s,meow){
    
    /*
    This is my main character for my game, the tail is
    going backwards because it will fall head first.
    */
    
    //translate (x/x,y/y);
   
    //Body
    fill (0,0,0);
    rect (x+0*s,y+0*s,100*s,40*s,10*s);

    //Back
    ellipse(x+9*s,y+20*s,30*s,40*s);

    //Butt
    ellipse(x+50*s,y+5*s,100*s,30*s);
    
    //Legs
    push ();
    strokeWeight(12*s);
    line (x-4*s,y+60*s,x+4*s,y+35*s);
    line (x+30*s,y+60*s,x+15*s,y+35*s);
    line (x+70*s,y+60*s,x+78*s,y+35*s);
    line (x+104*s,y+60*s,x+89*s,y+35*s);
    pop ();

    //Paws
    function feet(a){
        fill (0,0,0);
        ellipse(a,y+63*s,16*s,12*s);
    }

    feet(x-2*s);
    feet(x+35*s);
    feet(x+72*s);
    feet(x+109*s);

    //neck
    push ();
    
    strokeWeight(25*s);
    line (x+90*s,y+20*s,x+104*s,y-5*s);
    
    pop ();

    //Head
    ellipse(x+110*s,y-10*s,40*s,30*s);

    //Ear
    triangle(x+110*s,y-10*s,x+110*s,y-35*s,x+90*s,y-7*s);
    
    if (meow) {
        push ();
        stroke(127,127,127);
        strokeWeight(2);
        line(x+135*s,y-8*s,x+160*s,y+-9*s);
        line(x+135*s,y-13*s,x+160*s,y+-19*s);
        line(x+135*s,y-3*s,x+160*s,y+-1*s);
        line(x+135*s,y+2*s,x+160*s,y+9*s);
        line(x+135*s,y-18*s,x+160*s,y-29*s);
        strokeWeight(2);
        //line(x+114*s,y-18*s,x+120*s,y+-16*s);
        pop();
    } else {
        
       
        
    }
    //Eye
        push ();
        fill(255,255,255);
        ellipse(x+115*s,y-17*s,10*s,7*s);
        pop ();
    
        //Pupil
        push ();
        fill(0,0,0);
        ellipse(x+116*s,y-17*s,3*s,7*s);
        
        pop ();
    //Nose
    push ();

    fill(232,158,183);
    ellipse(x+128*s,y-14*s,5*s,4*s);

    pop ();

    //Tail
    push ();

    strokeWeight(6*s);
    line (x,y+5*s,x-70,y+1*s);

    pop ();
    
}
/*
function draw() {
translate (260,200);
rotate (7.84);
cat(-110, 9,1 , mouseIsPressed);
}
*/
function setup (){
    createCanvas(400,560);
    fill (255,255,255);
    
}
let state = "start";
let gameTimer = 0;

function draw(){
    if (state === "start") {
        startScreen();
    } else if (state === "game") { 
        gameScreen();
        gameTimer = gameTimer + 1;
        if (gameTimer >= 100) {
        gameTimer = 0;
        state = "result";
    }
    } else if (state === "result") {
        resultScreen();
    }
}

function mouseClicked(){
   if (state === "start"){
    state = "game";
   }  else if (state === "result"){
    state = "game";
   }
}
