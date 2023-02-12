module.exports = (strArr)=>{
    //add logic here
    if(!Array.isArray(strArr)){throw Error("parameter must be a string");}

    let numberOfStation=parseInt(strArr.shift())||0;
    if(numberOfStation>strArr.length){return "impossible";}

    strArr=strArr.map((station)=>{
        const [gas,gasNeededNext]=station.split(":");
        return parseInt(gas)-parseInt(gasNeededNext);
    });

    let currentGas=0;
    let answer=strArr.reduce((answer,gas)=>{
        currentGas=currentGas+gas;
        if(currentGas<0){
            answer=answer+1;
            currentGas=0;
        }
        return answer;
    },1);

    if(answer>numberOfStation){
        return "impossible";
    }
    return answer;
}