

const myPromise = new Promise((resolve, reject) =>{
    const randomNum = Math.floor(Math.random()*2)

    if(randomNum === 0){
        resolve("sucess")
    }
    else{
        reject("rejected")
    }
})

myPromise.then((g)=>console.log(g))
myPromise.catch((err)=>console.error(err))

// we can write message in .then console and can keep empty resolve() and reject()


// Fetch Case

var fectching = fetch("https://api.github.com/users")
fectching.then((a)=>a.json())
    .then((b)=>console.log(b))
    .catch((v)=>console.error(v))