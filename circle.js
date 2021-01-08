class Circle{
    constructor(x,y,radius,colour){
        this.x = x
        this.y = y
        this.radius = radius
        this.colour = colour 
    }
    display(){
        ellipseMode(RADIUS);
        fill(this.colour);
        ellipse(this.x,this.y,this.radius);
        
    }
}