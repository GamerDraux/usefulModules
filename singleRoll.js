// rolls a single die with the argument "sides"
function singleRoll(sides){
    let result = Math.ceil(Math.random()*sides);
    return result;
}

module.exports = singleRoll;
