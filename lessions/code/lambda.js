var obj = {
    a: 'apple',
    b: function () {
        var _this = this;
        setTimeout(function () {
            console.log(_this.a);
        }, 1000);
    }
};
obj.b();
