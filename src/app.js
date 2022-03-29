let pronoum = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "reacon"];

function generarCombinaciones() {
  var domains = [];
  for (let i = 0; i < pronoum.length; i++) {
    for (let adjetivo of adj) {
      noun.forEach(nombre =>
        domains.push("\n" + pronoum[i] + adjetivo + nombre + ".com")
      );
    }
  }

  return domains;
}

window.onload = function() {
  console.log(generarCombinaciones());
  document.querySelector("#generador").innerHTML = generarCombinaciones();
};
