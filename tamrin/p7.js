function isPrim1 (n){
    for (let i = 2; i < n; i++){
        if (n% i === 0){
            return false;
        }
    }
    if (n === 1) return false;
    else return true;
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