function getStandardDeviationAndMean (array) {
    const n = array.length
    const mean = array.reduce((a, b) => a + b) / n
    return [
        Math.sqrt(array.map(x => Math.pow(x - mean, 2))
            .reduce((a, b) => a + b) / n),
        mean
    ]
  }

function findFilterOutliers(numbers){

    var values = numbers.concat();
    var meanStd = getStandardDeviationAndMean(values);
    var mean = meanStd[1];
    var standardDeviation = meanStd[0];
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

    var filtered = findFilterOutliers(result);

    var sum = 0
    filtered.forEach(function(number){
        sum += number;
    });


    return sum / filtered.length;

}

module.exports = {average};
