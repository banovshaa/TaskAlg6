function GetIndex(param,arr){
    let start =0;
    let end= arr.length-1;
    let mid;
    while(start<=end){
        mid=Math.floor((start+end)/2)
        if (param==arr[mid]) {
            return mid
        }else if(arr[mid]<param){
            start=mid+1
        }
        else{
            end=mid-1
        }
    }
    return -1
}
function FindIndex(param,arr){
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]===param) {
            return i
        }
    }return -1
}
// let array=['salam','sagol','xosgetdin']
// console.log(FindIndex('asdfg',array));
function OddAndEven(arr){
    let odd=[]
    let even=[]
    arr.forEach(item => {
        if (item%2===0) {
            even.push(item)
        } else {
            odd.push(item)
        }
    });
    console.log(odd,even);
}
// OddAndEven([2,4,52,41,47])
// let arr=[18,7,9,7]
// console.log(GetIndex(4,arr));
function isPalidrome(arr){
    let arr1=[]
    let arr2=[]
    for (let i = 0; i < arr.length/2; i++) {
        arr1[i] = arr[i];
    }
    let a1=arr1.toString()
    for (let i = arr.length-1; i >=arr.length/2;i--){
        arr2[arr2.length]=arr[i]
    }
    let a2=arr2.toString()
    return a1==a2
    ;
}
// let val='saas'
// console.log(isPalidrome(val));