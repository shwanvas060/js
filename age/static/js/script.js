// your age 
function ageInDays() {
    var brithYear=prompt("Year were you born... Bro?");
    var ageInDayss = (new Date().getFullYear()-brithYear)*365;
    var textAnswer = 'You are ' + ageInDayss + ' days old';
    document.getElementById("result").innerHTML=textAnswer;

}
function reset(){
    var reset = '  ';
    document.getElementById("result").innerHTML=reset;
}

