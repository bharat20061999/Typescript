function addNum(num:number):number{
    return num+3;
}
let userName = (name:string):string=>{
    return name;
}
const userData = (name:string,age:number,isPaid:boolean = false):void  => { 
    console.log(name,age);
}
userData("bharat",23,true);
userName("bharat");
addNum(5);
const greetings = ["hy","hi","hello"]
const rank = [1,2,3]
greetings.map((greetMsg):string=>{return greetMsg})