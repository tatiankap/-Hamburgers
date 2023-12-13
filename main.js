class Hamburger{
    static get SIZE_SMALL(){
        return {
            price: 50,
            calories: 20
        }
    }
    static get SIZE_BIG(){
        return {
            price: 100,
            calories: 40
        }
    }
    
    static get STUFFING_CHEESE(){
        return {
            price: 10,
            calories: 20
        }
    }
    static get STUFFING_SALAD(){
        return {
            price: 20,
            calories: 5
        }
    }
    static get STUFFING_POTATO(){
        return {
            price: 15,
            calories: 10
        }
    }

    static get TOPPING_SAUCE(){
        return {
            price: 15,
            calories: 0
        }
    }
    static get TOPPING_MAYO(){
        return {
            price: 20,
            calories: 5
        }
    }
    

    constructor(size, stuffing){
        this.size = size
        this.stuffing = stuffing
        this.topping = []
    }

    addTopping(top){
        this.topping.push(top)
        return this;
    }

    calculateCalories(){
        const caloriesTopping = this.topping.reduce((amount, topping) => amount + topping.calories, 0 );

        return this.size.calories + caloriesTopping + this.stuffing.calories
    }

    calculatePrice(){
        const toppingPrice = this.topping.reduce((amount, topping) => amount + topping.price, 0 );
        return this.size.price + toppingPrice + this.stuffing.price
    }
}

const hamburger = new Hamburger(Hamburger.SIZE_BIG, Hamburger.STUFFING_CHEESE)
hamburger.addTopping(Hamburger.TOPPING_MAYO);
console.log("Calories: " + hamburger.calculateCalories ());
console.log("Price: " + hamburger.calculatePrice());
hamburger.addTopping(Hamburger.TOPPING_SAUCE);
console.log("Price with sauce: " + hamburger.calculatePrice());