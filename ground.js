class Ground 
{
  constructor(x,y,w,h) 
  {
    this.x = x
    this.y = y
    this.w = w
    this.h = h

    let g_options = {
      isStatic:true
    };
    this.body = Bodies.rectangle(x,y,w,h,g_options);
    World.add(world,this.body);
    
    };
    display (){
      var pos = this.body.position;
      push();
      translate(pos.x,pos.y);
      rectMode(CENTER);
      stroke(255)
      fill(121,240,125)
      rect(0,0,this.w,this.h)
      pop();
    };
    
  } ;
  

