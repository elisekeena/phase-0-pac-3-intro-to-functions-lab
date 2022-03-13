function shout(string){
    // DO NOTHING
    return string.toUpperCase();
}
function whisper(string){
    return string.toLowerCase();
}
function logShout(string){
    console.log(string.toUpperCase());
}
function logWhisper(string){
    console.log(string.toLowerCase());
}
function sayHiToHeadphonedRoommate(string){
    // if string is lower case
    //     return "I can\'t hear you!"
    // let string = string.toLowerCase()

    if (string == string.toLowerCase()){
        return "I can\'t hear you!"
    }
    if (string == string.toUpperCase()){
        return 'YES INDEED!'
    }
    if (string == ("Let's have dinner together!")){
        return ('I would love to!')
    }
}



