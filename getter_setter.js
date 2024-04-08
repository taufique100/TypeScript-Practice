var User = /** @class */ (function () {
    function User(email, name) {
        this.email = email;
        this.name = name;
        this.city = "Jaipur";
        this._courseCount = 1;
    }
    User.prototype.deleteToken = function () {
        console.log('Token Deleted');
    };
    Object.defineProperty(User.prototype, "AppleEmail", {
        get: function () {
            return "apple ".concat(this.email);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "courseCount", {
        get: function () {
            return this._courseCount;
        },
        set: function (courseNum) {
            if (courseNum <= 1) {
                throw new Error("Course Count should be More Than 1");
            }
            this._courseCount = courseNum;
        },
        enumerable: false,
        configurable: true
    });
    return User;
}());
var user = new User('tau@gamil.com', 'abcd');
