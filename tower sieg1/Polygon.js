class Polygon{
    constructor(x,y,width,height){
  
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0,
            isStatic:true
        }
  
        this.polygon = Bodies.circle(400,200,20);
    
        World.add(world, this.polygon);
     }
  
    display(){
       push();
       rectMode(CENTER);
       strokeWeight(4);
       fill("brown");
       pop()
  
  
     }
  
  }
  