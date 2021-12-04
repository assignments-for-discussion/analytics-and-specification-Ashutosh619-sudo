function average(numbers){
    var avg = 0;
    if(numbers.length == 0){
        return NaN;
    }
    else{
        var sum = 0
        var noOfNaN= 0 // variable to check number of nan values 
        numbers.forEach(function(number){
            if(!isNaN(number)){
                sum += number;
            }
            else{
                noOfNaN += 1
            }
        });
        avg = sum / (numbers.length-noOfNaN); // if nan values are present, then we need to subtract them from the length of the array
    }
    return avg;
}

module.exports = {average};
