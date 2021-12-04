function average(numbers){
    var avg = 0;
    if(numbers.length == 0){
        return NaN;
    }
    else{
        var sum = 0
        // variable to check number of nan values 
        var noOfNaN= 0
        numbers.forEach(function(number){
            if(!isNaN(number)){
                sum += number;
            }
            else{
                noOfNaN += 1
            }
        });
        /* if nan values are present, 
           then we need to subtract them from the length of the array */
        avg = sum / (numbers.length-noOfNaN); 
    }
    return avg;
}
module.exports = {average};
