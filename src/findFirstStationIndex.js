module.exports = (strArr)=>{
    //add logic here
    if(!Array.isArray(strArr)){throw Error("parameter must be a string");}

    let numberOfStation=parseInt(strArr[0])||0;
    let currentGas=0;
    let answer=1;
    for (let i = 1; i <= numberOfStation; i++) {
        const station = strArr[i];
        if(!station){return "impossible";};
        const [gas,gasNeededNext]=station.split(":");
        currentGas=currentGas+gas-gasNeededNext;
        if(currentGas<0){
            answer=i+1;
            currentGas=0;
        }

    }
    if(answer>numberOfStation){
        return "impossible";
    }
    return answer;
}