class ElasticLine {
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            length: 10,
            stiffness: 0.04,
        }
        this.elastic = Bodies.circle(x, y, width, options);
        this.width = 33;
        this.pointB = pointB;
        World.add(world, this.elastic);
    }

    fly(){
        this.elastic.bodyA = null;
    }
    
    display(){
    if(this.elastic.bodyA){
    var pointA = this.elastic.bodyA.position;
    var pointB = this.pointB;

    strokeWeight(4);
    line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
  }
  
};