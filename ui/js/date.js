getThisDay = function(){
    var today = new Date();
    var dd = today.getDate() + 7;
    var mm = today.getMonth()+1; //January is 0!
    var yyyy = today.getFullYear();
    var ee;
    if(dd<10) {
	     dd = '0'+dd;

    }

    if(mm<10) {
	     mm = '0'+mm
    }

    //today = mm + '/' + dd + '/' + yyyy;
    oneWeek = yyyy+ '-' + mm + '-' + dd;
    return oneWeek;
}
getNextWeek = function(){
    startnow = getThisDay();
    var firstDay = new Date(startnow);
    var nextWeek = new Date(firstDay) + 7 * 24 * 60 * 60 * 1000;
    return nextWeek;
}

function isFutureDate(idate){
    var today = new Date().getTime(),
        idate = idate.split("/");

    idate = new Date(idate[2], idate[1] - 1, idate[0]).getTime();
    return (today - idate) < 0 ? true : false;
}
function checkDate(){
    var idate = document.getElementById("deliver_by"),
        resultDiv = document.getElementById("datewarn"),
        dateReg = /(0[1-9]|[12][0-9]|3[01])[\/](0[1-9]|1[012])[\/]201[4-9]|20[2-9][0-9]/;

    if(dateReg.test(idate.value)){
        if(isFutureDate(idate.value)){
            resultDiv.innerHTML = "Entered date is a future date";
            resultDiv.style.color = "red";
        } else {
            resultDiv.innerHTML = "It's a valid date";
            resultDiv.style.color = "green";
        }
    } else {
        resultDiv.innerHTML = "Invalid date!";
        resultDiv.style.color = "red";
    }
}
