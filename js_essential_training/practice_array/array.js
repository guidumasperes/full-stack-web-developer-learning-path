const myCats = ["Belo", "Lilica", "Mel", "Billy"]

myCats.unshift(myCats.pop()) //Move last to first
console.log(myCats)

myCats.sort() //Sort alphabetically
console.log(myCats)

const female = myCats.find(element => { //Find a female cat
    if (element == "Mel" || element == "Lilica") {
        return element
    }
})
console.log(female)

const maleIndex = myCats.find(element => { //Find "Billy" and remove it
    if (element === "Billy") {
        myCats.splice(myCats.indexOf(element), 1)
    }
})
console.log(myCats)
