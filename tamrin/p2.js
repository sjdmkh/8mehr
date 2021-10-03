function isString(value) {
    return typeof value === 'string' || value instanceof String;
}
console.log(isString('salam'))
console.log(isString('2'))
console.log(isString(2))
console.log(isString({}))