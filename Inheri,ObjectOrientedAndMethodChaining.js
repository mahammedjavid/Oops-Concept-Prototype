class User{
    constructor(name,age){
        this.name = name;
        this.age = age;
        this.score = 0;
    }

    login(){
        console.log(this.name + "has logged in")
        return this
    }
    logout(){
        console.log(this.name + "has logged out")
        return this
    }
    updateScore(){
        this.score++
        console.log(this.name + 'has score of ' + this.score)
        return this
    }
}

var UserOne = new User("Javid",22)
var UserTwo = new User("Mahammed",30)

// var a = UserOne.updateScore()
// var a = UserOne.updateScore()
// var a = UserOne.updateScore()
// var a = UserOne.updateScore()

// Method Chaining -- it is only possible when we return `this` value in class method
var a = UserOne.login().updateScore().updateScore().logout()
var a = UserTwo.login().updateScore().updateScore().logout()
console.log(a)

//Class Inheritance 

class Admin extends User{
    deleteUSer(user){
        users = users.filter((u)=>{
            return u.name!= user.name
        })
    }
}


var Admin1 = new Admin("Aizan",2)
var users = [UserOne,UserTwo,Admin1]

Admin1.deleteUSer(UserOne)
console.log(users)