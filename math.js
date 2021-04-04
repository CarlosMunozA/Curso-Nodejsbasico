const Math={};

function add(x1,x2){
    return x1 + x2;
}
function substract(x1,x2){
    return x1 - x2;
}
function multiply(x1,x2){
    return x1 * x2;
}
function divide(x1,x2){
    if (x2==0){
        console.log('No se puede dividir');
    }
    else{
        return x1/x2;
    } 
}
Math.add = add;
Math.substract = substract;
Math.multiply = multiply;
Math.divide = divide;
//Exportar el modulo Math completo, 
//es necesario agregar const Math={};
module.exports = Math;
/* Exportar una por una las variables
exports.add =add;
exports.substract=substract;
exports.multiply = multiply;
exports.divide = divide;
*/