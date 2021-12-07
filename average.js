function average(numbers){
    var result = numbers.filter(function(number){
        if(!isNaN(number) || (number > -50 && number < 80)){
            return true;
        }

    });
    var sum = 0
    result.forEach(function(number){
        sum += number;
    });

    var avg = sum / result.length;

    return avg;

}

module.exports = {average};
