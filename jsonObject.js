var object = {
    name : "Javid",
    Age : 22,
    Place : "Kaup"
}

let myJsonStr = JSON.stringify(object)
console.log(myJsonStr)
let myJsonReplaceStr = myJsonStr.replace("Javid","Mahammed")
console.log(myJsonReplaceStr)

let myJsonObj = JSON.parse(myJsonReplaceStr)
console.log(myJsonObj)
