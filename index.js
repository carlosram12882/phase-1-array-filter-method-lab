function findMatching(arr, driver){
    const result = arr.filter(function(drive){
    return driver.toLowerCase() === drive.toLowerCase()
    });
   return result
}

function fuzzyMatch(arr, driver){
    const result = arr.filter(function(drive){
        return driver.substr(0,2) === drive.substr(0,2)
    });
    return result
}

function matchName (arr, driver){
    console.log(arr, driver)
    return arr.filter(function(drive){
        console.log(drive)
    return    drive.name === driver
        
        
            //    newArr = []
        //    newArr.push(drive.name + drive.hometown)
        //    return newArr
        //}

    });
    
}
//const result = words.filter(word => word.length > 6);