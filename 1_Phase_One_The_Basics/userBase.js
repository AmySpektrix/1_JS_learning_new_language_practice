class UserBase {
    constructor(userArray) {
        this.userArray = userArray;
    }
    count() {
        return this.userArray.length;
    }
    getNames(){
        return this.userArray.map((user) => user.getName());
    }
    getIntroductions(){
        return this.userArray.map((user) => user.getIntroduction());
    }
}

module.exports = UserBase;