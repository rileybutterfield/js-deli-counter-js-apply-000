function takeANumber(lineArr, name){
lineArr.push(name)
let number = lineArr.length
return `Welcome, ${name}. You are number ${number} in line.`
}

function nowServing (lineArr){
  if (lineArr.length === 0){
    return "There is nobody waiting to be served!"
  } else {
    let firstInLine = lineArr[0]
    lineArr.shift()
    return `Currently serving ${firstInLine}.`
  }
}

function currentLine(lineArr){
  let string  = "The line is currently"
  if (lineArr.length === 0){
    string += " empty."
  } else {
    string += `: `
    for (let i = 0; i < lineArr.length; i++){
      var name = lineArr[i]
      string += `${i+1}. ${name}`
      if (i < lineArr.length-1){
        string += ", "
      }
    } 
  }
  return string
}


//ticket wheel: establish customer count that represents every customer for the day & ticketWheel function should increase customer count by 1 in a permanent way and returns string that says "Welcome, your current number is currentCount"


let customerCount = 0
function ticketWheel(){
customerCount ++
console.log(`Welcome, your current number is ${customerCount}`)
}

ticketWheel()
ticketWheel()
ticketWheel()


