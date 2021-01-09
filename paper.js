class paper{
    constructor(x,y,r){
        this.x=x;
        this.y=y;
        this.r=r;
        this.trash=Bodies.circle(this.x,this.y,this.r);
        World.add(world,this.trash);
    }
    display(){
        var posTrash=this.trash.position;
        push()
        ellipseMode(CENTER)
        fill("red");
        stroke("red");
        circle(this.x,this.y,this.r);
        pop()
    }
}