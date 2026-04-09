    console.log("Cambio de color");
    function formulario(elemento){
    let color_bg=elemento.querySelector("input[type='text']").value;
    document.querySelector("form").style.background = color_bg;
}