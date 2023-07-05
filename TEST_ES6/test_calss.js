class Ponit{
    constructor(x,y){
        this.x = x;
        this.y = y;
    }
    toString(){
        return '点的位置：（' + this.x + ',' + this.y +')'
    }
}
// p就是类的实例
let p = new Ponit(1,2);
console.log(p);