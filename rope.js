class Rope{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
        }
        this.pointB = pointB
        this.rope = Constraint.create(options);
        World.add(world, this.rope);
    }

    display(){
        var poiA = this.rope.bodyA.position;
        var poiB = this.pointB

        strokeWeight(3);

        line(poiA.x, poiA.y, poiB.x, poiB.y);
    }
    
}