var user = prompt("Would you like to play a game?", "Enter YES or NO or MAYBE.").toUpperCase();
switch(user) {
    case 'YES':
        console.log("Alright we'll get started then!");
        var age = prompt("Enter your age:");
        var sex = prompt("Enter your sex:", "MALE or FEMALE").toUpperCase();
        if((age <= 33) && (sex = "MALE"))  {
            console.log("You're just a young pup!");
        } else if ((age <= 33) && (sex = "FEMALE")) {
            console.log("You're just a spring chick!");
        } else if ((age <= 66) && (sex = "MALE" || "FEMALE")) {
            console.log("Mid life is upon you huh?");
        } else if (age <= 100) {
            console.log("Sheesh you're old!");
        } else {
            console.log("Either you miss typed or you're ancient!");
        }
        break;
    case 'NO':
        console.log("Sorry to here that, maybe next time!");
        break;
    case 'MAYBE':
        console.log("Let me know when you decide!");
        break;
    default:
    console.log("I didn't recognize that response!");
}
