class Person_Model{
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
let person=new Person_Model('Zhuang');
person.say();