function superbowlWin(record){
    const winRecord = record.find(item => item.result === "W" || "L");
    if  (winRecord){
        return winRecord.year
    } 
}