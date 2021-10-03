function pow(x){
    let n=0;
    while ((2**n < x)) n++;
    return 2**n;
}
console.log(pow(95))
console.log(pow(460))
console.log(pow(1010))
console.log(pow(1780))
