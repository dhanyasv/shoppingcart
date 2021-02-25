import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit } from "@angular/core";

@Directive({
    selector : "[appDropdown]"
})

export class DropdownDirective{

   @HostBinding('class.open') isOpen:boolean = false;
    constructor(){
    }
    
    @HostListener('click') onClick(){
        this.isOpen = !this.isOpen;
    }
     
  
    

}