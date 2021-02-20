import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from "./header/header.component";
import { ShoppingListComponnet } from './shoppinglist/shoppinglist.component';
import { ShoppingEditComponnet } from "./shoppinglist/shopping-edit/shopping-edit.component";
import { RecipesComponent } from "./recipes/recipes.component";
import { RecipesListComponent } from './recipes/recipes-list/recipes-list.component';
import { RecipesDetailComponent } from './recipes/recipes-detail/recipes-detail.component';
import { RecipesItemComponent } from './recipes/recipes-list/recipes-item/recipes-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    ShoppingListComponnet,
    ShoppingEditComponnet,
    RecipesListComponent,
    RecipesDetailComponent,
    RecipesItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
