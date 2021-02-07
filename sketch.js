const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(3000,800);
    engine = Engine.create();
    world = engine.world;

    building1 = new Building(900,100,70,70);
    building2 = new Building(900,100,70,70);
    building3 = new Building(900,100,70,70);
    building4 = new Building(900,100,70,70);
    building5 = new Building(900,100,70,70);
    building6 = new Building(900,100,70,70);
    building7 = new Building(800,100,70,70);
    building8 = new Building(800,100,70,70);
    building9 = new Building(800,100,70,70);
    building10 = new Building(800,100,70,70);
    building11 = new Building(800,100,70,70);
    building12 = new Building(800,100,70,70);
    building13 = new Building(700,100,70,70);
    building14 = new Building(700,100,70,70);
    building15 = new Building(700,100,70,70);
    building16 = new Building(700,100,70,70);
    building17 = new Building(700,100,70,70);
    building18 = new Building(700,100,70,70);
    building19 = new Building(700,100,70,70);
    building20 = new Building(700,100,70,70);
    
    ball = new Ball(200,200,80,80);
    rope = new Rope(ball.body, {x:500, y:50});
    ground = new Ground(600,600, 1200, 20);
}

function draw(){
    background("blue");
    Engine.update(engine);

    building1.display();
    building2.display();
    building3.display();
    building4.display();
    building5.display();
    building6.display();
    building7.display();
    building8.display();
    building9.display();
    building10.display();
    building11.display();
    building12.display();
    building13.display();
    building14.display();
    building15.display();
    building16.display();
    building17.display();
    building18.display();
    building19.display();
    building20.display();
    rope.display();

    ball.display();

    ground.display();
}

function mouseDragged(){
    Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});  
}