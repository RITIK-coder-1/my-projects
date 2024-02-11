const obj = {
    name: "ritik",
    email: "rtk@gmail.com",

    get getEmail(){
        return this.email + "abc"
    },

    set setEmail(value){
        this.email = value + "abc" 
    }
}

console.log(obj.getEmail);
console.log(obj.email);