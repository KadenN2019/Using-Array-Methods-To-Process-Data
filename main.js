// Q1
let sum = items.reduce((a, b) => (a + b.price), 0)

let quotient = sum / items.length

document.querySelector("#answer1").innerHTML = `The average price of the items is $${quotient.toFixed(2)}`

// Q2
var title = items.filter((arr) => arr.price>14 &&  arr.price<18)

var newarr = title.map ((item) => {
    return item.title
}).join("\n")

document.querySelector("#answer2").innerHTML = `${newarr}`

//Q3
var code = items.filter((a) => {
        if (a.currency_code === "GBP"){
            return a
        }
    })

document.querySelector("#answer3").innerHTML = `${code[0]["title"]} costs &#65505;${code[0]["price"]}`


//Q4
var wood = items.filter(w => {
    if (w.materials.includes("wood")){
        return w
    }
})

var newarrwood = title.map((item) => {
    return item.title
}).join("\n")

document.querySelector("#answer4").innerHTML = `${newarrwood}`


//Q5
var eight = items.filter(a => {
    if(a.materials.length>=8){
        return a
    }
})
var eightmat = ""
eight.forEach(a => {
    eightmat += a.title + " has " + a.materials.length + " materials:\n"
    eightmat += a.materials.join("\n")
    eightmat += "\n\n"
})

document.querySelector("#answer5").innerHTML = `${eightmat}`
console.log(eight)


//Q6
var made = items.filter(m => {
    if (m.who_made === "i_did"){
        return m
    }
})

document.querySelector("#answer6").innerHTML = `${made.length} were made by their sellers`