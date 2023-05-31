lives = 0
document.getElementById("start").style.display = "block"
document.getElementById("slot0").style.display = 'none'
document.getElementById("slot1").style.display = 'none'
document.getElementById("slot2").style.display = 'none'
document.getElementById("slot3").style.display = 'none'
document.getElementById("slot4").style.display = 'none'
document.getElementById("slot5").style.display = 'none'
document.getElementById("slot6").style.display = 'none'
document.getElementById("slot7").style.display = 'none'
document.getElementById("slot8").style.display = 'none'
document.getElementById("slot9").style.display = 'none'

document.getElementById("stick1").style.display = 'none'
document.getElementById("stick2").style.display = 'none'
document.getElementById("stick3").style.display = 'none'
document.getElementById("stick4").style.display = 'none'
document.getElementById("stick5").style.display = 'none'
document.getElementById("stick6").style.display = 'none'

 document.getElementById("lives").innerHTML = "7"

 wrongw = 0


words = ['Mass', 'Explore', 'Relationship', 'Prison', 'Light', 'Mean', 'Close', 'Clean', 'Favorite', 'Positive', 'Health', 'Basic', 'Basis', 'Silence'
    , 'Sense', 'Hate', 'River', 'Brother', 'Open', 'Faculty', 'Area', 'Sky', 'Morning', 'Stage', 'Let', 'Chicken', 'Stream', 'Test', 'Strike', 'Gain', 'Supply'
    , 'Game', 'Evening', 'Determine', 'Track', 'Poll', 'Principle', 'Tie', 'Weekend', 'Transition', 'Project', 'Attempt', 'Brown', 'Agree', 'Violent'
    , 'Listen', 'Leader', 'Deal', 'Figure', 'Coat']

x = Math.floor(Math.random() * 50)
x = words[x]
let wordsl = x.length
for (var i = 0; wordsl > i; i++) {
    document.getElementById("slot" + i).style.display = 'block'
}
right = 0
wrong = 0




lives = 0
function alph(alphabet) {
    wrong = 0
 
    document.getElementById(alphabet).style.display = "none"
    for (var i = 0; i < wordsl; i++) {
        x = x.toUpperCase()
        if (x[i] === alphabet) {
            if (i === 0) { document.getElementById("slot" + i).innerHTML = alphabet }
            else { document.getElementById("slot" + i).innerHTML = alphabet.toLowerCase() }
            right++
            if (right === wordsl) {
                alert('you win!'+" the word was " + x)
                right++
                document.getElementById("start").style.display = "none"
            }
            
      
        }

        else if(x[i] !== alphabet){
            wrong++
    if(wrong === wordsl){
                lives++
            }
        }


     
    }

    for(var i = 0; i<lives; i++){
        
    if(lives===7){ alert('you lose!'+" the word was " + x)
                lives++
                document.getElementById("start").style.display = "none"}
        i2 = i
        i2++
        document.getElementById("stick"+i2).style.display = "block"
        document.getElementById("lives").innerHTML = 7 - lives
        
    }

    

}

function valuepress(){
    wrong = 0
    right2 = 0
    valued = document.getElementById("value").value
    for(var i = 0; i<wordsl;i++){
        let a = valued.toUpperCase()
        let b = x.toUpperCase()
  
        if(a[i] === b[i]){
        right2++
        } else if(a[i] !== b[i]){
            wrong++
    if(wrong === wordsl){
                lives++
         }
        }

     
    }

    if(right2 === wordsl){
            alert('you win!'+" the word was " + x)
            document.getElementById("start").style.display = "none"
        }

        for(var i = 0; i<lives; i++){
        
        if(lives===7){ alert('you lose!'+" the word was " + x)
                    lives++
                    document.getElementById("start").style.display = "none"}
            i2 = i
            i2++
            document.getElementById("stick"+i2).style.display = "block"
            document.getElementById("lives").innerHTML = 7 - lives
            
        }

}