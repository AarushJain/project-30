class Box {
  constructor(x,y,width,height) {
    var options = {
        isStatic: false,
        restitution:0.2,
        friction:0.01,
        density:0.0002
    }
    this.x=x;
    this.y=y;
    this.visibility=254;
    this.width = width;
    this.height = height;
    this.body = Bodies.rectangle(x,y,width,height,options);
    World.add(world, this.body);
  }
  display(){
    if(this.body.speed < 3){
      var bpos =this.body.position;
      rectMode(CENTER);
      fill("blue");
      stroke("yellow")
      rect(bpos.x, bpos.y, this.width, this.height);
     }
     else{
       push();
      World.remove(world, this.body);
      this.Visiblity = this.Visiblity - 5;
      tint(255,this.Visiblity);
      pop();
     }
  }
}; 
  