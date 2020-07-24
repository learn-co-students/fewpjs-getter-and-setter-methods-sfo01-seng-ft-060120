// Add your Circle class here
class Circle {
    constructor(radius){
        this.radius = radius
    }

    get diameter(){
        return this.radius * 2
    }

    set diameter(diameter){
        this.radius = diameter / 2
    }

    get circumference(){
        return this.circumference = Math.PI * this.diameter
    }

    set circumference(circumference){
        this.radius = circumference / (Math.PI * 2)
    }

    get area(){
        return this.area = Math.PI * (this.radius ** 2)
    }

    set area(area){
        this.radius = Math.sqrt(area / Math.PI)
    }
}