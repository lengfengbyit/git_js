/**
 * js 数组去重
 */

var arr = [1,32,4,3,53,5,3,4,2,43,5,2,1,4,3,2,5,6,2,'1','2',0,false,true];


// Set实现  判断元素类型，不同的类型代表不同的元素
Array.prototype.unique = function(){
    return Array.from(new Set(this));
}

// 忽略类型，只 判断值是否相同
Array.prototype.unique2 = function(){
    var json = {};
    var result = [];
    this.forEach(function(val){

        if(!((val) in json)){
            json[val] = true;
            result.push(val);
        }
    })

    return result;
}

// filter 实现 判断类型
Array.prototype.unique3 = function(){

    return this.filter(function(v,i,arr){
        return arr.indexOf(v) === i;
    })
}

// forEach 实现 判断类型
Array.prototype.unique4 = function(){

    var result = [];
    this.forEach(function(v){

        if(!result.includes(v)){

            result.push(v);
        }
    })

    return result;
}


// splice 实现
Array.prototype.unique5 = function(){

    var i = 0,arr = this.sort();
    for ( ; i < arr.length;i++) {
        
        //使用 === 判断类型，使用 == 不判断类型
        if(arr[i] === arr[i+1]){

            arr.splice(i,1);
            i--;
        }
    }
    return arr;
}

// reduce 实现
Array.prototype.unique6 = function(){

    var arr = this.sort(),result = [];
    console.log(arr);
    arr.reduce((v1,v2)=>{

        // !== 判断类型， != 不判断类型
        if(v1 !== v2){
            result.push(v1);
            return v2;
        }
    })

    result.push(arr[arr.length - 1]);
    return result;
}


console.log(arr.unique());
console.log(arr.unique2());
console.log(arr.unique3());
console.log(arr.unique4());
console.log(arr.unique5());
console.log(arr.unique6());