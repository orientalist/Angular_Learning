let obj={
    a:'apple',
    b(){
        setTimeout(()=>{
            console.log(this.a);
        }, 1000);
    }
}
obj.b()