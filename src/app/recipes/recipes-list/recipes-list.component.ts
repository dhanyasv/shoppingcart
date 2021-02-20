import { Component, OnInit } from '@angular/core';
import { Recipe } from "../recipe.model";

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  
  recipes: Recipe[] = [new Recipe("Recipe 1","This is a test Recipie",
  "http://picturetherecipe.com/wp-content/uploads/2020/04/PictureTheRecipe-Butter-Chicken.jpg"),
  new Recipe("Recipe 1","This is a test Recipie",
  "http://picturetherecipe.com/wp-content/uploads/2020/04/PictureTheRecipe-Butter-Chicken.jpg"),
  new Recipe("Recipe 1","This is a test Recipie",
  "http://picturetherecipe.com/wp-content/uploads/2020/04/PictureTheRecipe-Butter-Chicken.jpg"),
  new Recipe("Recipe 1","This is a test Recipie",
  "http://picturetherecipe.com/wp-content/uploads/2020/04/PictureTheRecipe-Butter-Chicken.jpg"),
  new Recipe("Recipe 1","This is a test Recipie",
  "http://picturetherecipe.com/wp-content/uploads/2020/04/PictureTheRecipe-Butter-Chicken.jpg"),
  new Recipe("Recipe 1","This is a test Recipie",
  "http://picturetherecipe.com/wp-content/uploads/2020/04/PictureTheRecipe-Butter-Chicken.jpg")];
  constructor() {}

  ngOnInit(): void {
  }

}
