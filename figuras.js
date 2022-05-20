function areaCuadrado(lado){
    return lado * 4;
}
function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado").value;
    //const value = input.value;
    const area = areaCuadrado(input);
    alert(area);
}