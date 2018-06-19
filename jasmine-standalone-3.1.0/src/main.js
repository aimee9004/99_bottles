(function() {
    let str = ''
    for(let i = 99; i > 0; i--) {
        if(i === 99) {
            str += `99 bottles of beer on the wall, 99 bottles of beer.\nTake one down, pass it around, ${i-1} bottles of beer on the wall.\n \n`
        }else if(i === 1) {
            str += `1 bottle of beer on the wall, 1 bottle of beer.\nTake one down and pass it around, no more bottles of beer on the wall. \nNo more bottles of beer on the wall, no more bottles of beer. \nGo to the store and buy some more, 99 bottles of beer on the wall.`
        }else {
            str += `${i} bottles of beer on the wall, ${i+1} bottles of beer.\nTake one down, pass it around, ${i-1} bottles of beer on the wall.\n \n`
        }
    }
    console.log(str)
}())