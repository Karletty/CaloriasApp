class Categoria {
    constructor(categoryName, dishes) {
        this.categoryName = categoryName;
        this.dishes = dishes;
    }
}
class Dish {
    constructor(dishName, calorieValue, isClicked) {
        this.dishName = dishName;
        this.calorieValue = calorieValue;
        this.isClicked = isClicked;
    }
}
const bread = new Dish('bread', 265);
const cereal = new Dish('cereal', 380);
const pasta = new Dish('pasta', 135);
const rice = new Dish('rice', 130);
const carbohydrates = new Categoria('Carbohidratos', [bread, cereal, pasta, rice]);

const cheese = new Dish('cheese', 400);
const icecream = new Dish('icecream', 205);
const milk = new Dish('milk', 40);
const yogurt = new Dish('yogurt', 60);
const dairyProducts = new Categoria('Lácteos', [cheese, icecream, milk, yogurt]);

const apple = new Dish('apple', 50);
const banana = new Dish('banana', 90);
const strawberry = new Dish('strawberry', 35);
const watermelon = new Dish('watermelon', 30);
const fruits = new Categoria('Frutas', [apple, banana, strawberry, watermelon]);

const broccoli = new Dish('broccoli', 34);
const cucumber = new Dish('cucumber', 15);
const lettuce = new Dish('lettuce', 20);
const pepper = new Dish('pepper', 40);
const vegetables = new Categoria('Verduras', [broccoli, cucumber, lettuce, pepper]);

const chicken = new Dish('chicken', 240);
const fish = new Dish('fish', 210);
const meat = new Dish('meat', 250);
const pork = new Dish('pork', 240);
const meats = new Categoria('Carnes', [chicken, fish, meat, pork]);