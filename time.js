
function getuserTime(){
    var userTimeFN = prompt('Do You Know What Time it is!?');
    alert('Well You Know what that means!' + userTimeFN + 'Its Time to Rock!');
    document.write('<hs2>' + userTimeFN + '</h2>');
    return userTimeFN;
}

var usertime = getuserTime();



    if(userTime <= 12){
        alert('Good Morning');
    } else if (userTime >= 12 && userTime < 18) {
        // if the time is > 12 and < 18 prompt good afternoon
    } else {
        // if the time is > 18 then prompt good evening
    }
