export class Recipe {
    public name:string;
    public description;
    public imgPath:string;

    constructor(name:string,desc:string,imgpath:string){
      this.name = name;
      this.description = desc;
      this.imgPath = imgpath;
    }

}