 // 1 - Acesse o elemento elementoOndeVoceEsta.
 document.getElementById("elementoOndeVoceEsta");
        
 // 2 - Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.
 document.getElementById("elementoOndeVoceEsta").parentNode.style.color = "red";

 // 3 - Acesse o primeiroFilhoDoFilho e adicione um texto a ele.
 document.getElementById("primeiroFilhoDoFilho").innerText = "texto de teste";

 // 4 - Acesse o primeiroFilho a partir de pai.
 document.getElementById("pai").childNodes[1];

 // 5 - Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta.
 document.getElementById("elementoOndeVoceEsta").previousElementSibling;

 // 6 - Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta .
 document.getElementById("elementoOndeVoceEsta").nextSibling;

 // 7 - Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta .
 document.getElementById("elementoOndeVoceEsta").nextElementSibling;

 // 8 - Agora acesse o terceiroFilho a partir de pai.
 document.getElementById("pai").childNodes[5];
 