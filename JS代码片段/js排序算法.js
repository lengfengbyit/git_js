
var num = 0,
    num2 = 0,
    res;

// 冒泡排序
function bubbleSort(arr){

    var tmp,
        len = arr.length; 
    for(var i = 0;i < len; i++ ){
        for(var j = 0;j < len - i; j++ ){
            if(arr[j] > arr[j+1]){
                tmp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = tmp;
            }
        }
    }

    return arr;
}

/**
 * 选择排序 
 * 每次遍历确定一个最小值，
 * 第几次遍历就把这个最小值放在数组的第几个位置
 * 然后从后面的元素再次获得最小值，在放到数组前端，
 * 重复上两个步骤，知道遍历到数组的最后一个元素
 * 有多少个元素，就要遍历多少次
 * @param  {[type]} arr [description]
 * @return {[type]}     [description]
 */
function seletionSort(arr){

    var minIndex,
        len = arr.length;
    for(var i = 0; i < len; i++ ){
        minIndex = i;
        for(var j = i+1; j < len; j++ ){
            if(arr[j] < arr[minIndex]){
                minIndex = j;
            }
        }
        // 交换两个变量的值
        arr[i] = [arr[minIndex],arr[minIndex]=arr[i]][0];
    }
    return arr;
}

/**
 * 选择排序 - 二元排序 
 * 每次遍历确定一个最小值和一个最大值，
 * 分别把最小值和最大值放到数组的两端
 * 下次在从中间搜素最小值和最大值，然后放在数组两端，依次循环，
 * 知道遍历的数组的最中间位置，则结束遍历
 * 遍历次数 = floor(len / 2);
 * @param  {[type]} arr [description]
 * @return {[type]}     [description]
 */
function seletionTwoSort(arr){

    var len = arr.length,
        num = arr.length / 2,
        minIndex,
        maxIndex;

    for(var i = 0;i < num; i++){
        maxIndex = minIndex = i;
        for(var j = i+1;j < len - i; j++){

            if(arr[j] < arr[minIndex]){
                minIndex = j;
            }else if(arr[j] > arr[maxIndex]){
                maxIndex = j;
            }
        }

        arr[i] = [arr[minIndex],arr[minIndex]=arr[i]][0];
        if(maxIndex != i){ // 如果最大值等于当前值的话就执行替换，因为上面已经替换过了
            arr[len - 1 - i] = [arr[maxIndex],arr[maxIndex]=arr[len - 1 - i]][0];
        }

    }

    return arr;
}

/**
 * 插入排序
 * 从数组的第二个位置开始遍历
 * 将当前位置数据值和该位置之前所有数据比较
 * 使用变量保存当前位置的值，并依次和前一位数据比较
 * 如果小于前一个数据，则把前一个数据往后移一位，
 * 如果大于前一个数据，则把该数据放到前一个数据后面。
 * @param  {[type]} arr [description]
 * @return {[type]}     [description]
 */
function insertSort(arr){

    var current,
        prevIndex,
        len = arr.length;

    for(var i = 1;i < len;i++){
        current = arr[i];
        prevIndex = i - 1;

        while(prevIndex >= 0 &&  current < arr[prevIndex] ){

            arr[prevIndex+1] = arr[prevIndex];
            prevIndex --;
        }
        arr[prevIndex+1] = current;
    }
    return arr;
}

/**
 * 插入排序 - 希尔排序 - 辅助函数，相当于特殊的插入排序
 * 
 * @param  {[type]} arr [description]
 * @param  {[type]} len [description]
 * @param  {[type]} step  [description]
 * @return {[type]}     [description]
 */
function shellInsertSort(arr,len,step){

    var current, // 存储当前对象值
        targetIndex; // 当前相比较的目标对象下标

    for(var i = step; i < len; ++i){
        if(arr[i] < arr[i-step]){
            targetIndex = i - step;
            current = arr[i];
            arr[i] = arr[targetIndex];
            while(current < arr[targetIndex]){
                arr[targetIndex+step] = arr[targetIndex];
                targetIndex-=step;
            }
            arr[targetIndex+step] = current;
        }
    }

    return arr;
}
/**
 * 插入排序 - 希尔排序
 * 将数组分成一个个片段，对每个片段进行插入排序
 * 片段的每个元素的索引step，有大变小，最后一次step为1
 * @param  {[type]} arr [description]
 * @return {[type]}     [description]
 */
function shellSort(arr){

    var len = arr.length,
        step = Math.floor(len / 2);

    while(step >= 1){
        arr = shellInsertSort(arr,len,step);
        step = Math.floor(step / 2);
    }

    return arr;
}

var arr = [10,9,8,7,11,6,22,5,4,3,2,1];

// res = bubbleSort(arr);

// res = seletionSort(arr);

// res = insertSort(arr);// num = arrLen * (arrLen - 1) / 2;

// res = shellSort(arr);

res = seletionTwoSort(arr);

// console.log(res);
