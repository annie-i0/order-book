const reconcileOrder = (existingBook, incomingOrder) => {
    if (existingBook.length === 0) {
        existingBook.push(incomingOrder)
        return existingBook
    }

    if (possibleDeal(existingBook, incomingOrder) === false) {
        existingBook.push(incomingOrder)
        return existingBook
    }

    if (findDeal(existingBook, incomingOrder) === false) {
        existingBook.push(incomingOrder)
        return existingBook
    }
}

const possibleDeal = (existingBook, incomingOrder ) => {
    for (let i = 0; i < existingBook.length; i++) {
        if (existingBook[i].type !== incomingOrder.type) {
            return true
        } 
    }
            return false
}

const findDeal = (existingBook, incomingOrder) => {
    

}
   

module.exports = reconcileOrder