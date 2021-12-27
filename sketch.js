var STIMG,HPIMG,START,HELP,allGRP;
var menuIMG,menu
var storyIMG, hund, twund, unlim,tim;
var play,PlayIMG,playGrn
var highGrn
var Grn,GrnIMG
var deload=0;
var GameState="Menu"
var ukn=0
var deck=0;
var drf=0
var elf=0
var trot=0
//gamescreen
 var w,h,wX,hX;

//sounds
var Basic,FISHEND,WINEND,ARROWEND,ENDCLK,MENUCLK,PLAYS1,ENDSOUND,NUMCLK,BASICLK,STUMPEND,ARROWSW,PLAYS2

var stickANM,stick,stickJP,stickDK
var fishANM,fish,fishGrp
var fishedIMG,stumpedIMG,aimedIMG, promotedIMG;
var stumpIMG,stump,stumpGrp
var arrow,arrowIMG ,ARPIMG ,arrowGrp,ARP,arrowsGrp;

//delays
//jump
var a=0,b=1;  

//dash
var a1=0,b1=1,t=0;

//shortjump
var a2=0,b2=1

//invisible
var a4=0,b4=1,t3=0

//slowdash
var a3=0,b3=1,t2=0
var z=0,p=300,q=400,r=700;
var Grnv=false
var n=0,emo=2

//time
var timevar =0
var time=0
var GAMEOVER;
function preload(){
   menuIMG = loadImage("CASTLE.png")
  PlayIMG = loadImage("Castle runner playground.png")
   fishANM = loadAnimation("fish 2.png","fish 4.png","fish1.png","fish3.png")
  stumpIMG = loadImage("stump.png")
  stickANM = loadAnimation("stick1.png","stick2.png","stick3.png","stick4.png")
  stickJP=loadAnimation("stick3.png")
  stickDK = loadAnimation("stickduck.png")
  GrnIMG = loadImage("playground.png")
  fishedIMG = loadImage("fished.png")
  stumpedIMG = loadImage("stumped.png")
  aimedIMG = loadImage("aimed.png")
  HPIMG= loadImage("HELP.png")
   menuIMG = loadImage("CASTLE.png")
  arrowIMG = loadImage("ARROW.png")
  ARPIMG= loadImage("arrow path.png")
  storyIMG= loadImage("STORY.png")
  PlayIMG = loadImage("Castle runner playground.png")
  promotedIMG = loadImage("promoted.png")
  STUMPEND = loadSound("STUMPEND.mp3")
    FISHEND = loadSound("FISHEND.mp3")
    ARROWEND = loadSound("ARROWEND.mp3")
    WINEND = loadSound("WINEND.mp3")
  BASIC = loadSound("BASIC.mp3")
  BASICLK = loadSound("stahelp.mp3")
  MENUCLK = loadSound("MEN.mp3")
  NUMCLK = loadSound("NUM.mp3")
  ENDCLK = loadSound("END.mp3")
   PLAYS1 = loadSound("play1.mp3")
  PLAYS2= loadSound("play2.mp3")
}
function setup(){
 fishGrp= new Group()
  stumpGrp = new Group()
  allGRP =new Group ()
  arrowGrp = new Group()
   arrowsGrp = new Group()
   w=windowWidth;
   h=windowHeight;
  //console.log(windowHeight)
   wX = w-400
   hX = h-400
  if(wX===0||hX===0){
    w=400
    h=400
     menu = createSprite(w/2+5,(h/2)-25)
   
  }else{
    
 if(wX>hX){
 w= 400+hX 
   wX=w-400
 }
    
   if(hX>wX){
 h= 400+wX 
     hX=h-400
 } 
    menu = createSprite(w/2+5,((h/2)-(5/100)*wX)-25) 
  }
  //console.log(w+"i"+h)
  var i= 0.25*w/400
  createCanvas(w, h);
  INVBX();
  

  
  
 
  menu.visible=false
  menu.scale=i
  menu.width=(i*1648)
   //console.log(menu.width)
   menu.height=(i*1416)
 // console.log(menu.height)
 createCanvas(menu.width, menu.height);
  //menu.visible=false;
  fill("red")
  GAMEOVER = createSprite(width-100,50*w/639,200*w/639,100*w/639) 
  
  GAMEOVER.shapeColor = "red"
  GAMEOVER.visible=false
  GAMEOVER.scale=0.4*w/833
    //console.log(GAMEOVER)
 hund=createSprite(165*w/833,396*w/833,245*w/833,65*w/833)
    hund.debug=true
    hund.visible=false
    twund=createSprite(166*w/833,540*w/833,245*w/833,65*w/833)
    twund.debug=true
   twund.visible=false
    unl=createSprite(166*w/833,689*w/833,245*w/833,65*w/833)
  unl.visible=false
    unl.debug=true
 
}

function draw() {
 
   if(GameState==="Menu"){
      a=0,b=1;  
 a1=0,b1=1,t=0;
 a2=0,b2=1;
 a4=0,b4=1,t3=0
 a3=0,b3=1,t2=0
 z=0,p=200,q=400,r=700;
     trot=0
    drf=0
     elf=0
 Grnv=false
 n=0
 timevar =0
 time=0

    time=0;
     
     if(deck===0){
        PLAYS1.stop()
       PLAYS2.stop()
       BASIC.play()
       BASIC.loop()
       deck=1
}
     if(deload===0){
       if(ukn===1){
       play.destroy()
       Grn.destroy()
       playGrn.destroy()
       highGrn.destroy()
      ukn=0
       }
     
        GAMEOVER.destroy()
      createGN();
Grn.x=(play.x-Grn.width/2 *0.9*w/639 - (5650.56*0.9*w/639)/2)
     GAMEOVER = createSprite(width-100,50*w/639,200*w/639,100*w/639) 
        GAMEOVER.shapeColor = "red"
  GAMEOVER.visible=false
  GAMEOVER.scale=0.4*w/833
       deload=1
     }
     frameCount=0
    
     background("white")
     background(menuIMG)
     START.visible=true
     HELP.visible=true
     START.shapeColor="green"
     HELP.shapeColor="green"
     text("START",374.7*w/400,(39.3)*h/400);
  text("HELP",325*w/400,(301)*h/400);
 
     START.debug=false
     HELP.debug=false
    // GAMEOVER.visible=false
      //menu.visible=true
      // console.log(frameCount)
     // HELP.visible=true
     // START.visible=true
     
      if(mousePressedOver(START)){
        BASICLK.play()
    GameState="story";
       
  }
     if(mousePressedOver(HELP)){
      BASICLK.play()
    GameState="help";
       
  }
    
   }
  ds=1
  // GAMEOVER.visible=true
       drawSprites();
      if(GameState==="Menu"){
        textSize(30*w/728)
          text("START",(374.7*w/400-40*w/728),(39.3*h/400+10*w/728));
  text("HELP",(325*w/400-40*w/728),(301*h/400+10*w/728));
      }else{
        HELP.visible=false
        START.visible=false
      }
 
  
  if(GameState==="story"){
  
    background(storyIMG)
   
 
    
    GAMEOVER.scale=0.35*0.875*w/750.9
     
GAMEOVER.x=width-GAMEOVER.width/2*0.35*0.875*w/750.9
      
      GAMEOVER.y=height-GAMEOVER.height/2*0.35*0.875*w/750.9
  
   // GAMEOVER.visible=false
    
   
   textSize(25*0.875*w*w/(750.9*750.9))
  fill("black")
   text("MENU",GAMEOVER.x-40*0.875*w*w/(750.9*750.9),GAMEOVER.y+15*0.875*w*w/(750.9*750.9))
    if(mousePressedOver(hund)){
      tim=100
      NUMCLK.play()
       GameState="Play";
      frameCount=0
    }
     if(mousePressedOver(twund)){
      tim=500
       NUMCLK.play()
       frameCount=0
        GameState="Play";
    }
   if(mousePressedOver(GAMEOVER)){
      tim=500
     MENUCLK.play()
        GameState="Menu";
     frameCount=0
       deload=0
      ukn=1
    }
  
     if(mousePressedOver(unl)){
      tim=-1
       frameCount=0
       NUMCLK.play()
        GameState="Play"; 
    }
    time=0
      menu.visible=false
    
  }
  
   if(GameState ==="help"){
  menu.visible=false
    if(mousePressedOver(GAMEOVER)){
      MENUCLK.play()
    GameState="Menu";
        deload=0
      ukn=1
  }
    background(HPIMG)
    
     //GAMEOVER.visible=true
   fill("purple")
    GAMEOVER.y=30*w/833
     GAMEOVER.x=width-100
    GAMEOVER.scale=0.4*w/833
  }
  
   
  
  if(GameState ==="help"){
    GAMEOVER.visible=false;
    fill("green")
  textSize(30*0.875*w*w/(750.9*750.9))
    text("MENU",GAMEOVER.x-45*0.875*w*w/(750.9*750.9),GAMEOVER.y+10*0.875*w*w/(750.9*750.9))
   //console.log(h)
  }
  
   if(GameState==="Play"){
     
      BASIC.stop()
     
     if(frameCount===0){
     PLAYS1.play()
     }
     if(time===35&&drf===0){
       PLAYS2.play()
       PLAYS2.loop()
       drf=1
     }
     GAMEOVER.visible=false
     
     background("black")
        
    
     if(stick.isTouching(playGrn)&&z===0){
        ds=0
        stick.changeAnimation("stickrun",stickANM)
     }else if(z===0){        
  stick.changeAnimation("stickjump",stickJP)
     }
     
     //console.log(ds)        
     
     menu.visible=false
     jumpdelay();
    dashdelay();
     sjumpdelay();
     slowdashdelay();
     invdelay();
 
      
     fishGrp.setVelocityXEach(9*w/639)
     stumpGrp.setVelocityXEach(7*w/639)
     arrowGrp.setVelocityXEach(14*w/639)
     //fish.velocityX=2
     if(elf===0){
       play.velocityX=7*w/639
       play.visible=true;
     }
   Grn.visible=true;
    
    deck=0

     if(frameCount===2200||frameCount>2200){
       p=200
       q=400
       r=700
       trot=1
       frameCount=200
     }
     
     if(frameCount/p>1){
       createStump()
     
       if(q>600){
         n=0
       
       while(stump.x>fish.x-300&&stump.x<fish.x+300&&n<100){
          
         
          stump.destroy()
            
          createStump()
         var i=1
         i=Math.round(random(1,2))
         switch(i){
           case 1:stump.x=stump.x-100
           
             break;
             case 2:stump.x=stump.x-300
             break;
                }

         n++
       }
        
         if(n===100){
             stump.destroy() 
     }
          
       }
       
       p= p+400
      
     }
     if(frameCount/q>1){
     q=  q+500 
       createbird()
      
       n=0
       
        while(fish.x>stump.x-300&&fish.x<stump.x+300&&n<100){
          fish.destroy()
          createbird()
         i=1
         i=Math.round(random(1,2))
         switch(i){
           case 1:fish.x=fish.x-100
            break;
              case 2:fish.x=fish.x-300
             break;
                }
          n++
        }
       
       if(n===99){
          fish.destroy()
    
     }
       
     }
        if(frameCount/r>1){
       createarrow()

       r= r+500
     
     }    
     
   
     if(q>500||trot===1){
      fish.setCollider("circle",30,0,150)
     }
     if(p>400||trot===1){
      stump.setCollider("circle",0,0,65)
     }
     if(r>800||trot===1){
        arrow.setCollider("circle",200,0,50)
}
     Grn.velocityX=7*w/639
        HeroMECH()
     deck=0
      if(stumpGrp.isTouching(stick)||fishGrp.isTouching(stick)||arrowsGrp.isTouching(stick)||(tim>0&&time===tim)){
 //  menu.addImage("stumped.png")
     
     
         GameState= "end"
    }
     
     if(Grn.x>2000*w/833){
       Grn.x=-1320*w/833
       
     }
     
     if(Grn.x>width/2){
    
        play.visible=false
       elf=1
       play.destroy()
     }
     //console.log(Grn.x)
    timevar++
 
  if(timevar===60){
    timevar=0
    time++
    
     
   }
     //console.log(GAMEOVER.x+"dffsd")
     
      drawSprites();
     textSize(50*w/639)
  fill("purple")
  text("Time :"+time+" seconds",200*width/639,50*w/639)
     
      
       // GAMEOVER.scale=0.6*w/833
        GAMEOVER.x=100
    //GAMEOVER.visible=true
       GAMEOVER.y=30*w/833
     GAMEOVER.scale=0.6*w/833
     GAMEOVER.shapeColor= "purple"
   textSize(45*0.875*w*w/(750.9*750.9))
  fill("black")
   text("MENU",GAMEOVER.x-70*0.875*w*w/(750.9*750.9),GAMEOVER.y+15*0.875*w*w/(750.9*750.9))
 Grn.depth=play.depth
    menu.depth=play.depth+1
    //menu.visible = true
    
    if(mousePressedOver(GAMEOVER)){
    GameState="Menu";
  deload=0
      ukn=1
  MENUCLK.play()
  //  background(fishedIMG)
  // menu.visible=true
    //menu.scale=10
      if(elf===0){
    play.visible=false
      }
    Grn.visible=false
   
    stick.visible=false
   stick.velocityY=0
   stick.velocityX=0
    stick.destroy()
    stumpGrp.destroyEach()
    fishGrp.destroyEach()
    allGRP.destroyEach()
  //  console.log(menu.scale)
    
    GameState="Menu";
        
  
    
    
   fill("purple")
    GAMEOVER.y=30*w/833
    GAMEOVER.scale=0.4*w/833
 GAMEOVER.visible=true;
    
  }
 
   }

  
  if(GameState === "end"){
    deck=0
    deload=0;
    ukn=1
     GAMEOVER.shapeColor= "purple"
    GAMEOVER.scale=0.6*w/833
      GAMEOVER.x=width-100
    PLAYS1.stop()
    PLAYS2.stop()
   GAMEOVER.y=30*w/833
    isTouch()
    
   
      
    Grn.depth=play.depth
    menu.depth=play.depth+1
    //menu.visible = true
    if(mousePressedOver(GAMEOVER)){
       FISHEND.stop()
 STUMPEND.stop()
 ARROWEND.stop()
 WINEND.stop()
MENUCLK.play()
    GameState="Menu";
  }
  
  //  background(fishedIMG)
  // menu.visible=true
    //menu.scale=10
    if(elf===0){
    play.visible=false
    }
    Grn.visible=false
   
    stick.visible=false
   stick.velocityY=0
   stick.velocityX=0
    stick.destroy()
    stumpGrp.destroyEach()
    fishGrp.destroyEach()
    allGRP.destroyEach()
  //  console.log(menu.scale)
   
    textSize(45*0.875*w*w/(750.9*750.9))
  fill("red")
   text("MENU",GAMEOVER.x-60*0.875*w*w/(750.9*750.9),GAMEOVER.y+15*0.875*w*w/(750.9*750.9))
  }
  
   }
  


function jumpdelay(){
    a=a+1;
     if(stick.y< 5/8*height){
         if(a> 210){                      
      a=0
       b=1;  
          
     }}else{
     if(a>60){
      a=0
       b=1;
       
}
     }
}
function sjumpdelay(){
    a2=a2+1;
     if(stick.y< 5/8*height){
         if(a2> 210){                      
      a2=0
       b2=1;  
          
     }}else{
     if(a2>80){
      a2=0
       b2=1;
       
}
     }
}
function dashdelay(){
    a1=a1+1;
    
     if(a1>80){
      a1=0
       b1=1;
       // console.log("blaadfssdfsdlal")

     }
}

function slowdashdelay(){
    a3=a3+1;
    
     if(a3>140){
      a3=0
       b3=1;
       // console.log("blaadfssdfsdlal")

     }
}

function invdelay(){
    a4=a4+1;
    
     if(a4>160){
      a4=0
       b4=1;
       // console.log("blaadfssdfsdlal")

     }
}
function createSM(){
   stick = createSprite(width-200*w/639,320*w/639)
                     stick.addAnimation("stickrun",stickANM)
  stick.addAnimation("stickjump",stickJP)
  stick.addAnimation("stickduck",stickDK)
  stick.scale=0.8*1.3036*w/833
  //console.log(w/639)
  stick.debug=true
  stick.visible=false;
}
function createGN(){
 
  play = createSprite(-3750/2*w/639,280*w/639)
 
  play.addImage(PlayIMG)
   
   playGrn = createSprite(width/2,530*w/639,width+50,50*w/639)
  playGrn.visible=false
  highGrn = createSprite(width/2,-30,width+50,50)
createSM()           
   createGrn()
  
  play.scale=0.9*w/639
  play.visible=false;
}
function INVBX(){
  START = createSprite(374.7*w/400,(39.3)*h/400,65*w/400,26.5*h/400);
  HELP= createSprite(325*w/400,(301)*h/400,60*w/400,26*h/400);
 
  HELP.debug= true;
 HELP.visible=false;
  START.visible=false;
  START.debug= true;
 
}
function HeroMECH(){
  stick.visible = true
  
    
      stick.collide(playGrn)
  stick.collide(highGrn)
  stick.velocityY=stick.velocityY+0.5*w/639
  if(keyDown("space")&&stick.y>height*17/32&&b===1){
     frameCount=frameCount+4
          stick.velocityY = -15*w/638
   
       b=0
}
   if(keyDown("UP_ARROW")&&b2===1){
      frameCount=frameCount+4
       stick.velocityY = stick.velocityY-10*w/639
     b2=0
    }
  
  if(keyDown("down_arrow")){
          z=1
          stick.debug=true
          stick.setCollider("rectangle",-92.5*stick.scale/(0.8*1.3036*w/833),55*stick.scale/(0.8*1.3036*w/833),197.152*stick.scale/(0.8*1.3036*w/833),113.576 *stick.scale/(0.8*1.3036*w/833))
   
         // console.log(windowHeight)
          stick.changeAnimation("stickduck",stickDK)
          
        }else{
          stick.setCollider("rectangle",-10,0,100,240)
        }
  
   if(keyDown("i")&&b4===1){
      frameCount=frameCount+4
        if(q>500||trot===1){
 
     fishGrp.setColliderEach("rectangle",-100000,100000,100,240)
     
        }
     if(r>800||trot===1){
 
     arrowsGrp.setColliderEach("rectangle",-100000,100000,100,240)
     
        }
     if(p>400||trot===1){
     stumpGrp.setColliderEach("rectangle",-100000,100000,100,240)
     }
      t3++
        if(t3>40){
        //40
t3=0;
          b4=0
        }
    
    }
      if(keyDown("LEFT_ARROW")&&b1===1){
         play.velocityX=12*w/639;         
         Grn.velocityX=12*w/639;
        frameCount=frameCount+4*w/639
       // console.log(frameCount)
        allGRP.setVelocityXEach(12*w/639)
        fishGrp.setVelocityXEach(14*w/639)
        arrowGrp.setVelocityXEach(19*w/639)
        
       t++
        if(t>30){
          //30
t=0;
          b1=0
        }
       
}
  
   if(keyDown("RIGHT_ARROW")&&b3===1){
         play.velocityX=2*w/639;         
         Grn.velocityX=2*w/639;
        frameCount=Math.round(frameCount+4*w/639)
        //console.log(frameCount)
        allGRP.setVelocityXEach(2*w/639)
      fishGrp.setVelocityXEach(4*w/639)
        arrowGrp.setVelocityXEach(9*w/639)
       t2++
        if(t2>160){
t2=0;
          b3=0
        }
       
}
   z=0
        
}
function createbird(){
  
  fish = createSprite(-200,random(playGrn.y-(150*w/639),100*w/639))
  fish.addAnimation("fishrun",fishANM)
  fish.velocityX=9*w/639
  //console.log(fish.y)
  fish.scale=0.45*w/639
  fish.lifetime=width*3
  fish.debug=true
  fish.setCollider("circle",30,0,150)
  fishGrp.add(fish)
  allGRP.add(fish)

}
function createarrow(){
  
  arrow = createSprite(-300,random(playGrn.y-(100*w/639),50*w/639))
  ARP=createSprite(arrow.x+250,arrow.y)
  ARP.scale=0.5*w/833
 
  ARP.addImage(ARPIMG)
  arrow.addImage(arrowIMG)
  arrow.velocityX=14*w/639
  ARP.velocityX=arrow.velocityX
  arrow.scale=0.3*w/639
  //console.log(fish.y)
  // fish.scale=0.45*w/639
 arrow.lifetime=width*3
  ARP.lifetime=arrow.lifetime
  arrow.debug=true
  
   arrow.setCollider("circle",200,0,50)
  arrowGrp.add(arrow)
  allGRP.add(arrow)
   arrowGrp.add(ARP)
  allGRP.add(ARP)
  arrowsGrp.add(arrow)

   emo=2
  while(emo<50){
        createARP()
    emo++
        }
}

function createARP(){
  ARP=createSprite(arrow.x+250*emo,arrow.y)
  ARP.addImage(ARPIMG)
  
  ARP.velocityX=arrow.velocityX
  ARP.lifetime=arrow.lifetime
  arrowGrp.add(ARP)
  allGRP.add(ARP)
  ARP.scale=0.5*w/833
}

function createStump(){
  stump = createSprite(-200,random(playGrn.y-(50*w/639),height-50) )
  stump.debug=true
  stump.setCollider("circle",0,0,65)
  stump.scale=0.8*w/639
  stump.velocityX=7*w/639
  stump.lifetime=width*3
  //random(playGrn.y-(50*w/639),height-30)
stump.addImage(stumpIMG)
  stumpGrp.add(stump)
    allGRP.add(stump)
               
}
function createGrn(){
 Grn = createSprite(-2000 ,play.y)
     Grn.addImage(GrnIMG)
     Grn.scale = 0.9*w/639
  Grn.depth=play.depth+1
  playGrn.depth=Grn.depth+1
  stick.depth=playGrn.depth
  Grn.visible=false
}
function isTouch(){
if(fishGrp.isTouching(stick)){
     FISHEND.play()
      GameState= "end"
    background(fishedIMG)
       
     }
    if(stumpGrp.isTouching(stick)){
        STUMPEND.play()
      GameState= "end"
      background(stumpedIMG)  
         
    }
    
     
    if(arrowsGrp.isTouching(stick)){
     ARROWEND.play()
      background(aimedIMG)  
        GameState= "end"
     
   
       
    }
    
      
    if(tim===time){
      WINEND.play()
        GameState= "end"
      tim =0
      background(promotedIMG)   
     
    }
}