let cats = ["Milo", "Otis", "Garfield"]
function destructivelyAppendCat(name){
    const copyCats = cats.push(name);
    return copyCats;
}
function destructivelyPrependCat(name){
    const copyCats = cats.unshift(name);
    return copyCats
}
function destructivelyRemoveLastCat(name){
    const copyCats = cats.pop(name)
    return copyCats
}
function destructivelyRemoveFirstCat(name){
    const copyCats = cats.shift(name)
    return copyCats
}
function appendCat(name){
    const copyCats = cats.slice()
    copyCats.push(name)
    return copyCats
}
function prependCat(name){
    const copyCats = cats.slice()
    copyCats.unshift(name)
    return copyCats
}
function removeLastCat(name){
    const copyCats = cats.slice()
    copyCats.pop(name)
    return copyCats
}
function removeFirstCat(name){
    const copyCats = cats.slice()
    copyCats.shift(name)
    return copyCats
}