export class Person{
    //設為私有屬性,僅能透過建構式賦值
    private name:string
    //建構式
    constructor(name){
        this.name=name
    }
    say(){
        console.log(this.name)
    }
};