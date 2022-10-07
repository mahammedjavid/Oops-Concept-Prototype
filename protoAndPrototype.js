
var arr = [1,2,3]
var obj = {
    name : "Javid",
    age : 22,
    Place : "Kaup",
    getInfo : function(){
        console.log(`I am ${this.name} my age is ${this.age}. I am from ${this.Place}`)
    }
    
}

var obj2 = {
    name : "Mahammed"
}


// obj2 inheriting the prototype property of obj
obj2.__proto__ = obj

console.log(obj2.Place)

// Now If we want to add the property to all the function __proto__ or object then we can use Function.Prototype or Object.Prototype



Object.prototype.Rank= 1   
// obj.__proto__ = newObj

Function.prototype.functionMethod = function(){
    console.log("New Function Property")
}

function newFunk(){
    
}
var obb = {

}


//  Function propery inheritance
function jjj(first,last,age){
        console.log(
            `first : ${first} 
last : ${last} 
age : ${age}`
        )
     
}

var NewFunc = new jjj("mahammed","JAvid",22)
var zzz = new jjj("kaka","haha",12)
jjj.prototype.habbits = "cricket"
// console.log(NewFunc())


