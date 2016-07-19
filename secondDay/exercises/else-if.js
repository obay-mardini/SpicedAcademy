var item ;

if (item === null) {
    console.log('null!');
} else if (Array.isArray(item)) {
    console.log('array!');
} else if (typeof item === 'undefined' || typeof item === 'function'
 || typeof item === 'object' || typeof item === 'string' || typeof item === 'boolean') {
    console.log(typeof item + '!');
} else if (isNaN(item)) {
    console.log('Not a number');
} else if (typeof item === 'number'){
    console.log(typeof item + '!');
} else {
    console.log('I have no idea');
}
