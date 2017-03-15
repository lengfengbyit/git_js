
function addClass(el, name) {
    var nameList = name.split(' '), i = nameList.length;
    while (i--) {
    el.className = new RegExp("(\s*)" + nameList[i] + "(\s*)", "ig").test(el.className) && el.className || (el.className + " " + nameList[i]).replace(/^\s|\s$/g, '');
    }
}

function removeClass(el, name) {
    var nameList = name.split(' '), i = nameList.length;
    while (i--) {
    el.className = el.className.replace(new RegExp("(\s*)" + nameList[i] + "(\s*)", "ig"), '').replace(/^\s|\s$/g, '').replace(/\s+/g, ' ');
    }
}

function hasClass(el, name) {
    return new RegExp("(\s*)" + name + "(\s*)", "ig").test(el.className);
}

function toggleClass(el, name){
    if(hasClass(el, name)){
        removeClass(el, name)
    }else{
        addClass(el, name)
    }
}

/**
 * 生成随机字符串
 * @param  {[type]} len [随机字符串长度]
 * @return {[type]}     [description]
 */
function randStr(len){

    return Math.random().toString(35).slice(2,2+len);
}

/**
 * 位数不足补0
 * @param  {[type]} num  [description]
 * @param  {[type]} size [description]
 * @return {[type]}      [description]
 */
function zfill(num,size){

    var s = '000000000000' + num;
    return s.substr(s.length - size);
}
/**
 * 获得当前日期
 * @param  {String} formatStr [description]
 * @return {[type]}           [description]
 */
function getCurrDateTime(formatStr = '-'){

    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth();
    var day = date.getDate();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();

    hours = zfill(hours,2);
    seconds = zfill(seconds,2);

    return [year,month,day].join(formatStr) + ' ' + [hours,minutes,seconds].join(':');
}


//求两个数组中的差集
Array.prototype.minus = function (arr){

    var res = [],_arr = arr.slice();
    var _index; 
    this.forEach(function(val,i){

      _index = _arr.indexOf(val)
      if( _index < 0){

        res.push(val);
      }else{

        _arr.splice(_index,1);
      }
    });

    if(res.length == 0){

      res = _arr;
    }

    return res;
}

//求连个数组中的交集
Array.prototype.intersection = function (arr) {

var res = [];

for(var i in this){

  if(arr.indexOf(this[i]) >= 0){

    res.push(this[i]);
  }
}
return res;
}

// 数组去重，只判断值，不判断类型
Array.prototype.unique = function () {

  return this.filter(function(v,i,arr){
      return arr.indexOf(v) === i;
  })
}

//根据值删除元素
Array.prototype.removeByVal = function (val) {

for (var i = 0; i < this.length; i++) {
  if(this[i] == val){
    this.splice(i,1);
    break;
  }
}
}

//判断数组中值是否存在
Array.prototype.hasVal = function(val){

var _flag = false;
this.forEach(function(item){

  if(item == val){

    _flag = true; return;
  }
})

return _flag;
}

// 清除两边的空格 
String.prototype.trim = function () { 
return this.replace(/(^\s*)|(\s*$)/g, ''); 
}; 