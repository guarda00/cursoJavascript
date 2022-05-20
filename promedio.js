const sueldos = [100, 200, 300, 500];

function calcularMediaAritmetrica (sueldos){
    let sumaSueldos = 0;

    /* for (let i = 0; i < sueldos.length; i++) {

        sumaSueldos = sumaSueldos + sueldos[i];

    } */
    sumaSueldos = sueldos.reduce(function(valorAcumulado = 0, nuevoElemento)
    {
        return valorAcumulado + nuevoElemento;
    });

    const promedioSueldo = sumaSueldos / sueldos.length;

    return promedioSueldo;
}

//Calcular Mediana

const lista = [1,2,3,4,5,5,4];

function valEspar (lista){
    if (lista.length % 2 ===0){
        return true;
    }else{
        return false;
    }
}

function ordenarLista(lista){
    lista_ascedente = lista.sort(function(a,b){return a-b;});
    console.log("Vector ordenado ascendentemente: " + lista_ascedente);
    return lista_ascedente;
}


const esPar = valEspar(lista);
const listaOrdenada = ordenarLista(lista);

function calcularMediana(esPar, listaOrdenada){
    var primeraMitad = 0, segundaMitad = 0; 
    var calNumIndex = 0;
    if (esPar){
      
        calNumIndex = listaOrdenada.length/2;
        console.log(calNumIndex);
        primeraMitad = listaOrdenada[calNumIndex];
        console.log("primer mitad "+ primeraMitad);
        segundaMitad = listaOrdenada[calNumIndex-1];
        console.log("segunda mitad "+ segundaMitad);

        const calcularMediana = (primeraMitad + segundaMitad) /2;
        console.log("Mediana "+ calcularMediana);
        return calcularMediana;
    }else{
        calNumIndex = parseInt(listaOrdenada.length/2)+1;
        console.log("La mediana es igual a: " +calNumIndex);
        return calNumIndex;
    }
}

//Calcular la Moda

const numeros = [1,2,1,2,3,4,4,3];
const listNumeros = {};

numeros.map(function(elemento){
    if (listNumeros[elemento]){
        listNumeros[elemento] += 1;
    }else{
        listNumeros[elemento]= 1 ;
    }

});
const listNumArray = Object.entries(listNumeros).sort(function(valora, valorb){
    return valora[1]-valorb[1];
});