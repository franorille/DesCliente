var arrayPrimos = [];

function primos() {
  for (let i = 1; i < 101; i++) {
    let noPrimo = false;

    for (let j = 2; j <= i / 2 && !noPrimo; j++) {
      if (i % j == 0) {
        noPrimo = true;
      }
    }
    if (!noPrimo) {
      arrayPrimos.push(i);
    }
  }
  
}

function mostrarPrimos() {
  var container = document.getElementById("container");
//   var p = document.createElement("p");
//   p.innerText="funciono";
//   container.appendChild(p);
//  console.log(arrayPrimos);
  

  var ul = document.createElement("ul");

  for (var i = 0; i < arrayPrimos.length; i++) {
    var li = document.createElement("li");
    var text = document.createTextNode(arrayPrimos[i]);
    li.appendChild(text);
    ul.appendChild(li);
    
  }
  container.appendChild(ul);
}
