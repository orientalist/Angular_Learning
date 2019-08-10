let arr=[1,2,3]
for (let item of arr){
    console.log(item)
}
console.log('--------')
let obj={
    a:'apple',
    b:'banana'
}
for(let key in obj){
    console.log(`key:${key},value:${obj[key]}`)
}