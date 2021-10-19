const returnFirstTwoDrivers = function(driverArrayFirst) {
    return  driverArrayFirst.slice(0,2)
    }

const returnLastTwoDrivers = function(driverArrayLast) {
    
    let arrayLength = driverArrayLast.length
    
    return driverArrayLast.slice(arrayLength - 2, arrayLength +1)
}

var selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(price) {
    return (fare) => fare * price
}

const fareDoubler = createFareMultiplier(2)
const fareTripler = createFareMultiplier(3)

function selectDifferentDrivers(array,functionSelect) {
    if (functionSelect === returnFirstTwoDrivers) {
        return returnFirstTwoDrivers(array)
    } else {
        return returnLastTwoDrivers(array)
    }
}