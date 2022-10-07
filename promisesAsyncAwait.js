async function func(){
    try {console.log("inside function")

    var a = await fetch('https://api.github.com/users')
    console.log("after fetch")
    var usersInfo = await a.json();
    console.log("after json")
    console.log(usersInfo)
        
    } catch (error) {console.error(error)
        
    }
}

console.log("starting line")
var d = func()
console.log(d)
console.log("after function cal")




// "  Using Async / Await using .then() and .catch()"


// async function func(){
// console.log("inside function")

//     var a = await fetch('https://api.github.com/users')
//     console.log("after fetch")
//     var usersInfo = await a.json();
//     console.log("after json")
//     console.log(usersInfo)
        

        
    
// }

// console.log("starting line")
// var d = func()
// d.then( (d) => console.log(d))
// d.catch((e)=>console.error(e))
// console.log(d)
// console.log("after function cal")
// func()


