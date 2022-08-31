class Slingshot{
  constructor(bodyA, pointB){
    var options = {
        bodyA: bodyA,
        pointB: pointB,
        //adicionar rigidez(stiffness) e comprimento(length)
    }
    //criar restrição e adicionar options
    

    this.pointB = pointB;

    //adicionar sling ao mundo

  }

  fly(){
      
  }

  display(){
    if(this.sling.bodyA){
    var pointA = this.sling.bodyA.position;
    var pointB = this.pointB;
    
    strokeWeight(4);
    stroke("turquoise");
    //adicionar line para fazer a conexão entre 
    //os dois objetos: pointA e pointB
    }
  }  
}
