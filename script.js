// Conectar com API utilizando FETCH
fetch('dados.json').then(resposta => resposta.json()).then(corpo => {
    console.log(corpo)

    document.getElementById('image').innerHTML = corpo.image
    document.getElementById('nome').innerHTML = "Nome do Artista: " + corpo.name
    document.getElementById('disco').innerHTML = "Nome do Album: " + corpo.album 
    document.getElementById('estilo').innerHTML = "Estilo Musical: " + corpo.style
    document.getElementById('preco').innerHTML = "Preço: " + corpo.price
    document.getElementById('numberOfMusics').innerHTML = "Número de Músicas: " + corpo.numberOfMusics 

    document.getElementById('bt1').onclick = function() {
        alert("Você comprou o produto: " + corpo.name);
    };

    document.getElementById('image2').innerHTML = corpo.image2
    document.getElementById('nome2').innerHTML = "Nome do Artista: " + corpo.name2
    document.getElementById('disco2').innerHTML = "Nome do Album: " + corpo.album2 
    document.getElementById('estilo2').innerHTML = "Estilo Musical: " + corpo.style2
    document.getElementById('preco2').innerHTML = "Preço: " + corpo.price2
    document.getElementById('numberOfMusics2').innerHTML = "Número de Músicas: " + corpo.numberOfMusics2

    document.getElementById('bt2').onclick = function() {
        alert("Você comprou o produto: " + corpo.name2);
    };

    document.getElementById('image3').innerHTML = corpo.image3
    document.getElementById('nome3').innerHTML = "Nome do Artista: " + corpo.name3
    document.getElementById('disco3').innerHTML = "Nome do Album: " + corpo.album3 
    document.getElementById('estilo3').innerHTML = "Estilo Musical: " + corpo.style3
    document.getElementById('preco3').innerHTML = "Preço: " + corpo.price3
    document.getElementById('numberOfMusics3').innerHTML = "Número de Músicas: " + corpo.numberOfMusics3

    document.getElementById('bt3').onclick = function() {
        alert("Você comprou o produto: " + corpo.name3);
    };

    document.getElementById('image4').innerHTML = corpo.image4
    document.getElementById('nome4').innerHTML = "Nome do Artista: " + corpo.name4
    document.getElementById('disco4').innerHTML = "Nome do Album: " + corpo.album4 
    document.getElementById('estilo4').innerHTML = "Estilo Musical: " + corpo.style4
    document.getElementById('preco4').innerHTML = "Preço: " + corpo.price4
    document.getElementById('numberOfMusics4').innerHTML = "Número de Músicas: " + corpo.numberOfMusics4

    document.getElementById('bt4').onclick = function() {
        alert("Você comprou o produto: " + corpo.name4);
    };    

    document.getElementById('image5').innerHTML = corpo.image5
    document.getElementById('nome5').innerHTML = "Nome do Artista: " + corpo.name5
    document.getElementById('disco5').innerHTML = "Nome do Album: " + corpo.album5
    document.getElementById('estilo5').innerHTML = "Estilo Musical: " + corpo.style5
    document.getElementById('preco5').innerHTML = "Preço: " + corpo.price5
    document.getElementById('numberOfMusics5').innerHTML = "Número de Músicas: " + corpo.numberOfMusics5

    document.getElementById('bt5').onclick = function() {
        alert("Você comprou o produto: " + corpo.name5);
    };
})