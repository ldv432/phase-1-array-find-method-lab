function superbowlWin(record){
    const winRecord = record.find(item => item.result === "W");
    if (winRecord){
        return winRecord.year
    } 
}