//a.ForEach: Write a function called forEachArray() that takes an array and a callback function as arguments. The forEachArray() function should apply the callback function to each element of the array but does not return anything. Note: You cannot use the inbuilt forEach function.
function forEachArray(array,callback){
    let i=0;
    while(i<array.length){
        callback(array[i],i);
        i+=1;
    }

}
let samplearray=[1,2,3,4];
forEachArray(samplearray,(element,index)=>{
    console.log(`element at index ${index} is ${element}`);
});

//b.Map: Write a function called mapArray() that takes an array and a callback function as arguments. The mapArray() function should apply the callback function to each element of the array and return a new array containing the transformed elements. Note: You cannot use the inbuilt map function.
function mapArray(array,callback){
    newarray=[];
    i=0;
    while(i<array.length){
        newarray.push(callback(array[i]));
        i+=1;

    }
    console.log(newarray);
}
const myarray=[1,2,3,4,5];
function doublenumber(element){
    return element*2;
}
mapArray(myarray,doublenumber);

//c.Filter: Write a function called filterArray that takes an array and a callback function as arguments. The filterArray function should apply the callback function to each element of the array and return a new array containing only the elements for which the callback function returns true. Note: You cannot use the inbuilt filter function.
function filterArray(array,callback){
    new_array=[];
    i=0;
    while(i<array.length){
        if(callback(array[i])){
        new_array.push(array[i])

        }i+=1;
    }
    console.log(new_array);
}
const my_array=[1,2,3,4,5];
function evennumber(element){
    return element%2==0;
}
filterArray(my_array,evennumber);
