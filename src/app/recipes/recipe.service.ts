import { EventEmitter } from "@angular/core";
import { Recipe } from "./recipe.model";
 
export class RecipeService{
    itemSelected  = new EventEmitter<Recipe>();
    private recipes: Recipe[] = [new Recipe("Recipe 1","This is a test Recipie",
    "https://img.taste.com.au/vhZfDaJw/taste/2017/07/lemongrass-beef-bowl-128353-1.jpg"),
    new Recipe("Recipe 2","This is a test Recipie1",
    "https://img.taste.com.au/f2eEDYG7/taste/2018/03/one-pot-healthy-mexican-beef-mince_2-136277-1.jpg"),
    new Recipe("Recipe 3","This is a test Recipie2",
    "https://blog.williams-sonoma.com/wp-content/uploads/2014/03/img26l.jpg"),
    new Recipe("Recipe 4","This is a test Recipie3",
    "https://www.indianhealthyrecipes.com/wp-content/uploads/2019/11/samosa-recipe.jpg"),
    new Recipe("Recipe 5","This is a test Recipie4",
    "https://www.budgetbytes.com/wp-content/uploads/2013/07/Creamy-Tomato-Spinach-Pasta-close.jpg"),
    new Recipe("Recipe 6","This is a test Recipie5",
    "https://www.seriouseats.com/2019/07/20190618-grilled-turkish-chicken-wings-vicky-wasik-13-1500x1125.jpg")];

    constructor(){
    }

    getRecipes(){
        return this.recipes.slice();
    }

}