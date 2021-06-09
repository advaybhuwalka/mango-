class Launcher{
constructor(bodyA,pointB){
var options={
    bodyA:bodyA,
    pointB:pointB,
    stiffness:0.004,
    length:1
}
this.launcher=Constraint.create(options);
this.bodyA=bodyA;
this.pointB=pointB
World.add(world,this.launcher)

}
fly(){
    this.launcher.bodyA = null;
}
attach(body){
this.launcher.bodyA=body;

}
display(){
   
    if(this.launcher.bodyA){
        var pointA = this.bodyA.position;
        var pointB = this.pointB;
        push();
        
       
            strokeWeight(3);
            line(pointA.x , pointA.y, pointB.x , pointB.y);
            
       
        
        pop();
    }
}

}



