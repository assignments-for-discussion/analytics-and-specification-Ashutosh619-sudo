function average(numbers){
    var result = numbers.filter(function(number){
        if(isNaN(number) || number < -50 || number > 80){
            return false;
        }
        else{
            return true;
        }

    });

    var sum = 0
    result.forEach(function(number){
        sum += number;
    });

    return sum / result.length;

}

module.exports = {average};
