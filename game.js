function startScreen(){
    background(135,206,235);

    push ();
    fill(0,150,0);
    rect (0,500,400,100);
    fill (249,215,28);
    ellipse(0,0,160,160);
    pop ();

    textSize(25);
    text("start",160,50);
}

function gameScreen(){
    background(135,206,235);

    text("Game",160,50);

    push ();
    fill(0,150,0);
    rect (0,500,400,100);
    fill (249,215,28);
    ellipse(0,0,160,160);
    pop ();
    push();
    translate(200,y);
    rotate(7.8);
    cat(0,0,0.5,keyIsDown(87));
    pop();

    /*
    when pressing W the cat will move uppwards otherwise
    it will continue falling downwards
    */
    if (keyIsDown(87)) {
        acc = -0.3; 
    } else {
        acc = +0.3 + 0.3*1.05;
    }

    // adding acceleration to the current velocity
    velocity += acc; 
 
    //Updating the cats y position
    y += velocity; 
}

function resultScreenLoss(){
    background(135,206,235);

    push ();
    fill(0,150,0);
    rect (0,500,400,100);
    fill (249,215,28);
    ellipse(0,0,160,160);
    fill(200,0,0);
    translate(200,520);
    ellipse(0,0,100,30);
    
    pop ();
    text("You went too fast :(",105,250);
    
}

function resultScreenWin(){
    background(135,206,235);
    push ();
    
    fill(0,150,0);
    rect (0,500,400,100);
    fill (249,215,28);
    ellipse(0,0,160,160);
    translate(180,490);
    cat(0,0,0.5);
    pop ();

    text("You landed the kitty :)",85,250);
    
}
//Defining the position of the cat, velocity and acceleration
let y = 1;
let velocity = 0; 
let acc = 0; 




function cat(x,y,s,meow){
    
    /*
    This is my main character for my game, the tail is
    going backwards because it will fall head first.
    */
    
    
   
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
    
    // When button W is pressed the cat wil close its eye start meowing
    if (meow) {
        push ();
        stroke(100,100,200);
        strokeWeight(2);
        line(x+135*s,y-8*s,x+160*s,y+-9*s);
        line(x+135*s,y-13*s,x+160*s,y+-19*s);
        line(x+135*s,y-3*s,x+160*s,y+-1*s);
        line(x+135*s,y+2*s,x+160*s,y+9*s);
        line(x+135*s,y-18*s,x+160*s,y-29*s);
        
        stroke(127,127,127);
        strokeWeight(2);
        line(x+114*s,y-18*s,x+120*s,y+-16*s);
        pop();
    } else {
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
       
        
    }
    
    //Nose
    push ();

    fill(232,158,183);
    ellipse(x+128*s,y-14*s,5*s,4*s);

    pop ();

    //Tail
    push ();

    strokeWeight(6*s);
    line (x,y+5*s,x-70*s,y+1*s);

    pop ();
    
}

function setup (){
    createCanvas(400,560);
    
}

//Defines the games state to make it always start up with the startscreen 
let state = "start";
let gameTimer = 0;

function draw(){
    if (state === "start") {
        startScreen();
    } else if (state === "game") { 
        gameScreen();
        
        if (y >= 470 && velocity > 4) {
            state = "resultLoss";
        }  else if (y >= 470 && velocity <= 4) {
            state = "resultWin";
        }  
    } 
    
    //If the cat is going too fast it will go from the gamesceern to the loss screen
    else if (state === "resultLoss") {
        resultScreenLoss();
        
        //Reseting the values inbefore the game starts again
        y = 1;
        velocity = 0;
        acc = 0;

    } 
    //If the cat is going the proper speed the game goes to the win screen
    else if (state === "resultWin") {
        resultScreenWin();
        
        //Reseting the values inbefore the game starts again
        y = 1;
        velocity = 0;
        acc = 0;

    }
    
}

//Changes the programs state depending on what screen is currently showing
function mouseClicked(){
   if (state === "start"){
    state = "game";
   }  else if (state === "resultLoss"){
    state = "game";
   }  else if (state === "resultWin"){
    state = "game";
   }
}
