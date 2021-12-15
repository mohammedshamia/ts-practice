/*
/!**
Module: Functional programing
function Human(name, age){
    this.name=name
    this.age=age

    this.moveSteps=function (stepsNum) {
        console.log(`${this.name} move ${stepsNum} steps forward`)
    }

    this.setName=function (newName) {
        if (typeof newName === 'string')
        this.name=newName
        else throw new Error("Name should be string")
    }
}*!/
class Human{
    #name
    #age
    constructor(name, age) {
        this.#name=name
        this.#age=age
    }
/!*
    constructor(name, age, height) {
        this.name=name
        this.age=age
        this.height=height
    }*!/
    static moveSteps (stepsNum,name) {
        console.log(`${name} move ${stepsNum} steps forward`)
    }
 /!** Overload
  * But it's not supported in js
  * *!/
/!*    moveSteps (stepsNum, num) {
        console.log(`${this.name} ${num} move ${stepsNum} steps forward`)
    }*!/

    /!** Setters*!/
    setName (newName) {
        if (typeof newName === 'string')
            this.#name=newName
        else throw new Error("Name should be string")
    }
    /!** Getters*!/
    getName () {
            return this.#name
    }
}
const ahmed= new Human("Ahmed", 20)
const naim= new Human("Naim", 26, 140)
/!*
console.log(ahmed, naim)*!/
/!*

naim.moveSteps(5/!*, 10*!/)
*!/
/!*

naim.setName("Mohammed")

Human.moveSteps(10, naim.getName())

Human.moveSteps(10,"Mohammed")

console.log(ahmed.getName())
*!/

function changeName(obj, name) {
    name=name+1
    obj.newName=name
    return obj
}
const oo={
    name:"Meme"
}

// Shallow coping
const aa=oo
// Deep coping
const aaa= {...oo}
//changeName(oo,2)

//console.log(aa, aaa)
// false
console.log(aaa===aa)
// true
console.log(aa===oo)*/



/*function foo():number {
    const color:string="Naim"
    console.log(this.color)
    bar.bind(this)
    function bar() {
        y.bind(this)
        y()
        console.log(this.color)

        function y() {
            console.log(this.color)

        }
    }
    bar()

    return 1211
}

foo()*/

const v: boolean=true
const vs: string='true'
const vn: number=1e10
const vNull:null=null
const vU:undefined=undefined//null
const vUnknown:unknown={

}
// vUnknown.z
const vAny:any="Shoman"
const vObj:
    //Type
    {
        name:string
    }=
    // value
    {
        name:"Shoman"
    }
vObj.name
const vObj1:object={}

const vArr:Array<string>=["12"]
const vArr2:string[]=["12"]
const vArr3:Array<string | number>=["12", 12]

// never type
//const vArr35:Array<string & number>=["12", 12]

const vArr24: (number | string)[]=["12", 12, 12]

enum Color{
    Red,
    Green,
    Blue
}

console.log(Color.Red)

let red:Color=Color.Red

red = Color.Blue

function sum(a=10, b:number):number {
    return  a + b
}

function println(text:string): void {
    console.log(text)
}

const setColor:Function=function (color:Color):Color {
    return color
}

setColor(Color.Blue)


const x : Function = (color:Color):number => {

    return 10
}


println("Shoman")
println("Shoman")
println("Shoman")


class Human implements Interface{
    readonly id:string | number;
    readonly color:string | number;
    private readonly name:string
    private readonly address:string
    private readonly age:number;

    constructor(id:number, name:string, address:string, age:number) {
        this.id=id
        this.name=name
        this.address=address
        this.age=age
        this.color=20
    }

    getValues():{
        id:number | string,
        name:string,
        address:string,
        age:number,}{
        return {
            id: this.id,
            name: this.name,
            address: this.address,
            age: this.age,
        }
    }
}

class Employee extends Human{
    private readonly jobTitle:string
    constructor(
        id:number,
        name:string,
        address:string,
        age:number,
        jobTitle:string
    ) {
        super(id, name, address, age);
        this.jobTitle=jobTitle
    }

    override getValues():{
        id:number | string,
        name:string,
        address:string,
        age:number,
        jobTitle:string
    }{
        return {
            ...super.getValues(),
            jobTitle:this.jobTitle
        }
    }
}

const employee1: Human=new Employee(
    12,
    "Mohammed",
    "Gaza",
    22,
    "MERN Developer"
)


const human: Object=new Human(
    12,
    "Mohammed",
    "Gaza",
    22
)


abstract class Shape implements Interface{
    private area:number;
    private name:string;
    id:string | number;
    color:string | number;

    protected constructor(area: number, name: string) {
        this.name=name
        this.area=area
        this.id="sc";
        this.color=20
    }

    getName():string{
        return this.name
    }

    setName(name:string):void{
        this.name=name
    }


    abstract sumArea():number;

    public static getShapeValues(shape:Shape):{
        name:string, area:number
    }{
        return  {
            name:  shape.name,
            area:  shape.area
        }
    }

}

class Triangle extends Shape{
    constructor(area: number, name: string) {
        super(area, name);
    }
    sumArea():number{
        return Shape.getShapeValues(this).area
    }
}

const triangle:Shape=new Triangle(20, "Triangle")

console.log(triangle.getName())//, triangle.getArea())
{
    // triangle.setArea(40)
    triangle.setName("Triangle")
}


console.log(triangle.getName())//, triangle.getArea())

console.log(Object.keys(Shape.getShapeValues(triangle)))


// interface

interface Interface {
    color:string | number;
    id:string | number;
}

interface Props {
    a:number;
    b:number;
}

const sumFunc:Function=({a, b}:Props):number=>{
    return a+b
}


interface Props2 {
    a:number;
    b:number;
    c:number;
}

const sumFunc2:Function=({a, b}:Props):number=>{
    return a+b
}

sumFunc({a:10, b:20})

interface Props {
    a:number;
    b:number;
}


sumFunc({a:10, b:20})


console.log(sumFunc2({a:10, b:40}))

console.log(sumFunc2({a:10, b:40, c:20}))


interface Props3 extends Props2 {
    x:number;
    y:number;
}


function arr<T, Q>(c:T[]):T[]{
    return c
}

const newArr=arr<boolean | number, string>([false,2,3,4,5,7])

console.log(newArr)

const newArr2=arr<string, number>(["c", "y", "m"])

console.log(newArr2)


interface User{
    name:string;
    id:string;
}

interface Admin extends User{
    isAdmin:boolean
}

type UserType=Admin | User

type Person = {
    name:string,
    id:string
}

const person1:Person={
    name:"Naim",
    id:"aas"
}

function printUser(obj:UserType){
    console.log(obj)
}

printUser({
    name:'Mohd', id:"ASsd",isAdmin:true
})


printUser({
    name:'Mohd', id:"ASsd"
})

export const n=""