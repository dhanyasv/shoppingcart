import { EventEmitter, Output } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";

export class ShoppingService{
    ingredients : Ingredient[] =[new Ingredient("Bun",4),
    new Ingredient("Burger",4),
    new Ingredient("Tomato",4),
    new Ingredient("Grapes",4),
    new Ingredient("Orange",4)];
    ingredientChanged = new EventEmitter<Ingredient[]>();

    constructor(){
    }
    getAllIngredients(){
        return this.ingredients.slice();
    }
    addIngredients(ingredient:Ingredient){
        this.ingredients.push(ingredient);
        this.ingredientChanged.emit(this.ingredients);
    }
}