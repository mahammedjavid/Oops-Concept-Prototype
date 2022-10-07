// IF we Use Class , the methods that we created in class are goto __proto__ directly

// class userList{
//     constructor(name,age){
//         this.name = name
//         this.age = age
//     }

//     logIn(){
//         console.log(this.name , 'has logged in')
//     }
//     logOut(){
//         console.log(this.name , 'has logged out')
//     }
// }
// var UserListOne = new userList("javid",22)
// console.log(UserListOne)




function userList(name,age){
        this.name = name;
        this.age = age;
        this.online = false;
}        
        // Methods
userList.prototype.logIn = function(){
    console.log(this.name , "logged in")
}
userList.prototype.logOut = function(){
    console.log(this.name , "logged out")
}


var UserListOne = new userList("javid",23)

console.log(UserListOne)


//  In the function all the methods that we define inside will print in constructor (Main page) not in prototpe

// but in the class methods are all move to prototype bcz it was written outside constructor

// In Function Case:---  inorder to make the methods reusable in function we need to mannualy create the prototype for the perticular function

// we can use the prototype  for the objects (UserOne,Usertwo) that are under the Parent Function like USer in this case