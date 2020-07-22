var userTime = prompt('What hour is it in military time 0-24?');



if(userTime <= 12){
    alert('Good Morning');
} else if (userTime >= 12 && userTime < 18) {
    // if the time is > 12 and < 18 prompt good afternoon
} else {
    // if the time is > 18 then prompt good evening
}