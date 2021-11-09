// Write your solution here!

var cats = ["Milo", "Otis", "Garfield"];


function destructivelyAppendCat(){
    
    cats.push("Ralph")
    return cats
}

function destructivelyPrependCat(){
    cats.unshift("Bob")
    return cats
}


function destructivelyRemoveLastCat(){
    cats.pop();
    return cats
}
function destructivelyRemoveFirstCat(){
    cats.shift();
    return cats
}
function appendCat(){
    var cats2 = [...cats, "Broom"]
    return cats2
}
function prependCat(){
    var cats3 = ["Arnold", ...cats]
    return cats3
}
function removeLastCat(){
    var caats = cats.slice(0, cats.length-1);
    return caats
}
function removeFirstCat(){
    var rcats = cats.slice(1);
    return rcats
}
