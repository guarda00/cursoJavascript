const salariosCol = colombia.map(function(pesona){
    return pesona.salary;
});

const salarioColSort = salariosCol.sort(function(salarioA, salarioB){
    return salarioA -salarioB;
});

function valEspar (salarioColSort){
    if (salarioColSort.length % 2 ===0){
        console.log("No es par el array");
        return true;
        
    }else{
        console.log("No es par el array");
        return false;
    }
}






function calcularMediana(salarioColSort){

    var  primeraMitad = 0, segundaMitad = 0,  calNumIndex = 0;
    var esPar = valEspar(salarioColSort);
    if (esPar){      
        calNumIndex = salarioColSort.length / 2;
        console.log(calNumIndex);
        primeraMitad = salarioColSort[calNumIndex];
        console.log("primer mitad "+ primeraMitad);
        segundaMitad = salarioColSort[calNumIndex-1];
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