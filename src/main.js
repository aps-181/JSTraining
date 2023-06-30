
class User {


    constructor(username, password, email) {
        this.username = username
        this.password = password
        this.email = email
    }

    static countUsers() {
        console.log("There are 50 users")
    }

    register() {
        console.log("In console", this.password)
    }
}

let Bob = new User("Bob", "passwd", "bob@gmail.com")
// Bob.register();

User.countUsers()

class Member extends User {
    constructor(username, password, email, membaerPackage) {
        super(username, password, email)
        this.package = membaerPackage
    }

    getPackage() {
        console.log(this.username + " " + this.package)
    }
}

let Mike = new Member("mike", "psswd", "mike@gmail.com", "mikes packagee")

// Mike.getPackage()

function* g1() {
    yield "ran 1.."
    console.log("world")
    yield "ran 2.."
    console.log("world")
    return "Returned"
}

let g = g1()

// console.log(g.next())
// console.log(g.next())
// console.log(g.next())


// for (let l of g) {
//     console.log(l)
// }


