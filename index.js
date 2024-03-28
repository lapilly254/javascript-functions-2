// code your solution here
// function saturdayFun (activity = "roller-skate") {
//     return `This saturday, I want to ${activity}!`;
// }
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
}

let mondayWork =
function(activity = "go to the office") {
    return `This Monday, I will ${activity}.`;
}

function wrapAdjective(flair = "*") {
    return function(adjective) {
        return `You are ${flair}${adjective}${flair}!`;
    }
}