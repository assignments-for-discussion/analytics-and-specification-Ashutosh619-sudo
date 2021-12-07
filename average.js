function average(numbers){
    if(numbers.length == 0){
        return NaN;
    }
    else{
        var sum = 0
        var noOfNaN= 0
        numbers.forEach(function(number){
            if(!isNaN(number) && (number > -50 && number < 80)){
                sum += number;
            }
            else{
                noOfNaN += 1
            }
        });
        var avg = 0;
        avg = sum / (numbers.length-noOfNaN); 
        return avg;
    }

}

module.exports = {average};
