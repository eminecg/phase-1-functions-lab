// Code your solution in this file!

// distanceFromHqInBlocks
function distanceFromHqInBlocks(blockNumber){
    if(blockNumber>42)
        return blockNumber-42
    
    else
        return 42-blockNumber;
    
}
//distanceFromHqInFeet
function distanceFromHqInFeet(blockNumber){
    return   distanceFromHqInBlocks (blockNumber) *264;

}
//distanceTravelledInFeet
function distanceTravelledInFeet(start,dest,){
    if(start<dest)
        return (dest-start)*264;

    else       
        return (start-dest)*264;

}
//calculatesFarePrice
function calculatesFarePrice(start ,dest){
    const dist= distanceTravelledInFeet(start,dest);

    if(dist <=400)
        return 0;
    else if( dist > 400 && dist <= 2000)
        return  (dist-400)* 0.02;

     else if( dist > 2000 && dist < 2500)
        return 25;
    else
        return 'cannot travel that far'        ;
}