document.getElementById("conteudo").innerHTML = "<p>ola,mundo,DOM!</p>";
document.getElementById("mensagem").textContent = "texto simples,sem";
document.getElementById("foto").setAttribute("src", "https://imagenes.elpais.com/resizer/v2/WQGOZS5S7D3DCLWMVVJM7S5VAQ.jpg?auth=d6a587caabc3fe9784b42f91cb3d8ebbd00fb04408d5ae49cf7ccf42dce579f3&width=980&height=980&smart=true");

let url = document.getElementById("link").getAttribute("href");
console.log(url); // "https://exemple.com"

document.getElementById("caixa").style.backgroundColor = "lightblue";
document.getElementById("alerta").classList.add("destaque");
