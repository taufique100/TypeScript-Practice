class User {
    readonly city: string = "Jaipur"

    protected _courseCount = 1

    constructor (
        public email: string,
        public name: string
    ){

    }

    private deleteToken(){
        console.log('Token Deleted');
        
    }
    get AppleEmail():string{
        return `apple ${this.email}`
    }

    get courseCount():number{
        return this._courseCount
    }
    set courseCount(courseNum){
        if(courseNum <= 1){
            throw new Error("Course Count should be More Than 1")
        }
        this._courseCount = courseNum
    }

}

const user = new User('tau@gamil.com', 'abcd')

class SubUser extends User{
    isFamily: boolean = true
    changeCourseCount(){
        this._courseCount = 4
    }
}