class Slingshot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: ,
            length: 
        }
        this.sling = ;
        this.pointB=pointB;

        World.add();//adicionar o sling ao mundo

    }
    fly(){
        this.sling.bodyA = ;
    }
    display(){
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            
            strokeWeight(4);
            stroke("turquoise");
            line(pointA.x, pointA.y, pointB.x, pointB.y);
            }
    }

}
