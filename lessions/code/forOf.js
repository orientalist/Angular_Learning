var arr = [1, 2, 3];
for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
    var item = arr_1[_i];
    console.log(item);
}
console.log('--------');
var obj = {
    a: 'apple',
    b: 'banana'
};
for (var key in obj) {
    console.log("key:" + key + ",value:" + obj[key]);
}
