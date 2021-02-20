import { Component } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";

@Component({
    selector : "app-shopping-list",
    templateUrl : "./shoppinglist.component.html",
    styleUrls :["./shoppinglist.component.css"]
})

export class ShoppingListComponnet{

    ingredients : Ingredient[] =[new Ingredient("Apple",4),
    new Ingredient("Apple",4),
    new Ingredient("Tomato",4),
    new Ingredient("Grapes",4),
    new Ingredient("Orange",4)];

}

