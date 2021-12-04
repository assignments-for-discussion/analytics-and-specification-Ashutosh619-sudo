function average(numbers){
    var avg = 0;
    if(numbers.length == 0){
        return NaN;
    }
    else{
        var sum = 0
        var noOfNan = 0
        numbers.forEach(function(number){
            if(!isNaN(number)){
                sum += number;
            }
            else{
                noOfNumberNan += 1
            }
        });
        avg = sum / (numbers.length-noOfNan);
    }
    return avg;
}

module.exports = {average};
