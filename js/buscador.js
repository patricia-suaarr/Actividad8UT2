var palabra=document.getElementById("palabra");
var textos = new Array();
var informacion;
var posicion;

textos[0]= document.getElementById("div1").innerHTML;
textos[1]= document.getElementById("div2").innerHTML;
textos[2]= document.getElementById("div3").innerHTML;


bBuscar.addEventListener("click", buscar, false); 




function buscar(){

    for(i=0;i<textos.length;i++){
        informacion=textos[i];
        informacion=informacion.replaceAll(palabra.value, "<b style='color:red'>"+palabra.value+"</b>");       

        document.querySelector("#div"+(i+1)).innerHTML=informacion;
    }
}

