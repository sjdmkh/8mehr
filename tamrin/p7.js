function isPrim1(n){
    let sum=0;
    let i=2;
    while (i<n){
        if (n % i === 0){
            sum=1;
            break
        }
        i++;
    }
    if (sum===0) return('yes')
    else return ('no')
}
function findisprim(x,y) {

    let i = x;
    let arr = [];
    while (i < y) {
        if (isprim(i) === 'yes')
            arr.push(i);
        i++;
    }
    return arr
}

function isHard(n){
    let strNum = n.toString();
    let m = strNum.length;
    for (let i = 0; i < m ; i++){
        if (!(isPrim1(Number(strNum.substring(0,m-i))))) {
            return false;
        }
    }
    return true;
}

function hardPass(n){
    for (let i = 10**(n-1); i < 10**n; i++){
        if (isHard(i)){
            console.log(i)
        }
    }
}
hardPass(3)
// function isHard(num){
//     let temp = num;
//     while (temp > 0){
//         temp = (temp - (temp % 10)) / 10;
//         if (!(isPrim1(temp)))
//             return false;
//     }
//     return true;
// }
//
// function hardPrim1(len) {
//     let arr= [];
//     for (let i = 10**(len-1); i < 10**(len); i++){
//         if (isPrim1(i)){
//             if (isHard(i))
//                 arr.push(i)
//         }
//     }
//     return arr;
// }