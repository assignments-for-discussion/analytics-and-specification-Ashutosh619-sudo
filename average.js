function average(numbers){
    if(numbers.length == 0){
        return NaN;
    }

    var result = numbers.filter(function(number){
        if(isNaN(number)){
            return false;
        }
        // outliers below -50 and above 80
        if(number < -50 || number > 80){
            return false;
        }

        return true;

    });

    sum = 0
    result.forEach(function(number){
        sum += number;
    });

    return sum / result.length;

}

module.exports = {average};
