function rotateArray(array) {
    if (!Array.isArray(array)){
        return undefined;
    } else if (array.length === 0) {
        return array.slice();
    } else {
        return array.slice(1).concat(array[0]);
    }
}