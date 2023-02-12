module.exports = (strArr)=>{
    //add logic here
    if(!Array.isArray(strArr)){throw Error("parameter must be a string");}

    let numberOfStation=parseInt(strArr.shift())||0;
    if(numberOfStation>strArr.length){return "impossible";}

    let currentGas=0;
    
    let answer=1+strArr.reduce((answer,station,i)=>{
        const [gas,gasNeededNext]=station.split(":");
        currentGas=currentGas+parseInt(gas)-parseInt(gasNeededNext);
        if(currentGas<0){
            answer=i+1;
            currentGas=0;
        }
        return answer;
    },0);

    if(answer>numberOfStation){
        return "impossible";
    }
    return answer;
}