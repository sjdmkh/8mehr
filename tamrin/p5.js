function completeNum(x){
    let s=0;
    if (x >= 1 && x <=200000){
        for (let i=1; i<= x/2; i++){
            if (x%i === 0)
                s += i
        }
        if (s === x)
            return "Yes"
        else
            return "No"
    }
    else return " X Is Out of Range"
}

console.log(completeNum(27))
console.log(completeNum(6))