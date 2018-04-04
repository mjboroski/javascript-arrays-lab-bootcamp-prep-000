const app = "I don't do much."

kittens= ["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten(name){
  return kittens.push(name);
}

function destructivelyPrependKitten(name){
  return kittens.unshift(name);
}

function destructivelyRemoveLastKitten(){
  return kittens.pop();
}

function destructivelyRemoveFirstKitten(){
  return kittens.shift();
}

function appendKitten(name){
  var kittens = kittens;
  return kittens.push(name);
}

function prependKitten(name){
  kittens2 = kittens;
  return kittens2.unshift(name);
}

function removeLastKitten(){
  kittens2 = kittens;
  return kittens2.pop();
}

function removeFirstKitten(){
  kittens2 = kittens;
  return kittens2.shift();
}
