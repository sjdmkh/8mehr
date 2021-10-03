function isprim(x){
    let sum=0;
    let i=2;
    while (i<x){
        if (x%i===0){
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
console.log(findisprim(10,30))