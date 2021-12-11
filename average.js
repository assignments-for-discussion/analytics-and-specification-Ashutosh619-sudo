function findFilterOutliers(numbers) { 

    var values = numbers.concat();

    values.sort( function(a, b) {
            return a - b;
         });


    var quartile1 = values[Math.floor((values.length / 4))];
    var quartile3 = values[Math.ceil(values.length * (3 / 4))-1];
    var interQaurtileRange = quartile3 - quartile1;

    var maxValue = quartile3 + interQaurtileRange*1.5;
    var minValue = quartile1 - interQaurtileRange*1.5;

    var filteredValues = values.filter(function(x) {
        return (x <= maxValue) && (x >= minValue);
    });


    return filteredValues;
}

function getStandardDeviation (array) {
    const n = array.length
    const mean = array.reduce((a, b) => a + b) / n
    return [Math.sqrt(array.map(x => Math.pow(x - mean, 2)).reduce((a, b) => a + b) / n),mean]
  }

function findFilterOutliersSTD(numbers){

    var values = numbers.concat();
    var mean_std = getStandardDeviation(values);
    var mean = mean_std[1];
    var standardDeviation = mean_std[0];
    var cutOff = standardDeviation * 2
    var lower = mean - cutOff;
    var upper = mean + cutOff;

    var filteredValues = values.filter(function(x) {
        return (x <= upper) && (x >= lower);
    });

    return filteredValues
}


function average(numbers){
    if(numbers.length == 0){
        return NaN;
    }

    var result = numbers.filter(function(number){
        if(!isNaN(number)){
            return true;
        }
    });

    var filtered = findFilterOutliersSTD(result);

    var sum = 0
    filtered.forEach(function(number){
        sum += number;
    });


    return sum / filtered.length;

}

module.exports = {average};
