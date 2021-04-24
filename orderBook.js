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
    for (let i = 0; i < existingBook.length; i++) {
        if (existingBook[i].type !== incomingOrder.type && (existingBook[i].price === incomingOrder.price)) {
            return true
        } 
    }
            return false

}
   

module.exports = reconcileOrder