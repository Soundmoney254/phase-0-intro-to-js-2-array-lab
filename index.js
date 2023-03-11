const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(newCatPush){
return cats.push(newCatPush);
}

function  destructivelyPrependCat(newCatUnshift){
    return cats.unshift(newCatUnshift);
    }
function destructivelyRemoveLastCat(popCat){
    return cats.pop(popCat);
}
function destructivelyRemoveFirstCat(shiftCat){
    return cats.shift(shiftCat);
}

function appendCat(name){
    const copyOfAppendCat = [...cats];
    copyOfAppendCat.push(name);
    return copyOfAppendCat
}

function prependCat(name){
    const copyOfPrependCat = [...cats];
    copyOfPrependCat.unshift(name);
    return copyOfPrependCat
}

function removeLastCat(){
    const copyOfRemoveLastCat = [...cats];
    copyOfRemoveLastCat.pop();
    return copyOfRemoveLastCat
}

function  removeFirstCat(){
    const copyOfRemoveFirstCat = [...cats];
    copyOfRemoveFirstCat.shift();
    return copyOfRemoveFirstCat
}