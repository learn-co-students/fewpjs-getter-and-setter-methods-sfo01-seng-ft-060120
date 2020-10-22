// Add your Circle class here

class Circle {
    constructor(radius){
        this.radius = radius
    }

    get diameter(){
        return 2 * this.radius
    }

    get circumference(){
        return 2 * Math.PI * this.radius
    }

    get area(){
        return Math.PI * this.radius * this.radius
    }

    set diameter(val){
        this.radius = 1/2 * val
    }

    set circumference(val){
        this.radius = val / (Math.PI * 2)
    }

    set area(val){
        this.radius = Math.sqrt(val / Math.PI)
    }
}