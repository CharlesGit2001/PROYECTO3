
window.onload=function() {


  var select_cat=document.getElementById("categoria")


  select_cat.addEventListener("change",CargarArticulos)


  var div_Demo=document.getElementById("art")


  function CargarArticulos() 
  {

    var xhttp=new XMLHttpRequest();

    xhttp.onreadystatechange=function() 
    {
      if(this.readyState==4 && this.status==200)
      {

        leerJSON(this)
      }
    };


    xhttp.open("GET","datos.json",true)

    xhttp.send()
  }





  function leerJSON(respuestaJSON) 
  {

    var objJson=JSON.parse(respuestaJSON.responseText);

    var i

    div_Demo.innerHTML="";



    for(i in objJson.articulos)
      {
        if(select_cat.value==objJson.articulos[i].categoria)
        {

          var divCard=document.createElement("div")

          
          divCard.className="card"

          var imagenArticulo=document.createElement("img")

          imagenArticulo.src= objJson.articulos[i].imagen

          imagenArticulo.className="card-img-top"

          divCard.appendChild(imagenArticulo)


          var divBody=document.createElement("div")

          divBody.className="card-body"

          divCard.appendChild(divBody)

          var encabezadoh4=document.createElement("h4")

          encabezadoh4.className="card-title"

          encabezadoh4.innerHTML=objJson.articulos[i].nombreProducto

          divBody.appendChild(encabezadoh4)


          var parrafocontenido=document.createElement("p")

          parrafocontenido.className="card-text"

          parrafocontenido.innerHTML=objJson.articulos[i].precio

          divBody.appendChild(parrafocontenido)

          var botonArticulo=document.createElement("a")

          botonArticulo.className="btn btn-success text-white"

          botonArticulo.innerHTML="Comprar"

          divBody.appendChild(botonArticulo)

          div_Demo.appendChild(divCard)
        }
      }
  }
}