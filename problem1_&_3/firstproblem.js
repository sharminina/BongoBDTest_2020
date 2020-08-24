//checking for alphabets only
function alphaOnly(e) {
    try {
        if (window.event) {
            var charCode = window.event.keyCode;
        }
        else if (e) {
            var charCode = e.which;
        }
        else { return true; }
        if ((charCode > 64 && charCode < 91) || (charCode > 96 && charCode < 123))
            return true;
        else
            return false;
    }
    catch (err) {
        alert(err.Description);
    }
  };
  //disabling submit if input fields are empty
  (function() {
    $('form > div > input').keyup(function() {

        var empty = false;
        $('form > div >input').each(function() {
            if ($(this).val() == '') {
                empty = true;
            }
        });

        if (empty) {
            $('#submit').attr('disabled', 'disabled');
        } else {
            $('#submit').removeAttr('disabled');
        }
    });
})()

//code for anagram 
function createCharMap(text) {
    let charMap = {}

    for (let char of text) {
        if (charMap.hasOwnProperty(char)) {
            charMap[char]++
        } else {
            charMap[char] = 1
        }
    }

    return charMap
}
function checkAnagram(stringA, stringB) {
let stringAL=stringA.toLowerCase();
let stringBL=stringB.toLowerCase();
    function createCharMap(text) {
        let charMap = {}

        for (let char of text) {
            if (charMap.hasOwnProperty(char)) {
                charMap[char]++
            } else {
                charMap[char] = 1
            }
        }

        return charMap
    }
try{
    if (stringAL.length === stringBL.length) {
        let stringAMap = createCharMap(stringAL)
        let stringBMap = createCharMap(stringBL)
        for (let char in stringAMap) {
            if (stringAMap[char] !== stringBMap[char]) {
                console.log("Not anagrams");
                document.getElementById("alertText").innerHTML= "Words are not anagrams !!";
                return false
                
            }
        }
        console.log('they are anagrams');
        document.getElementById("alertText").innerHTML= "Words are anagrams !!";
        return true
        
        
    } else {
        console.log("Not anagrams");
        document.getElementById("alertText").innerHTML= "Words are not anagrams !!";
        return false
        
    }
}
catch(err){
    console.log("err");
    document.getElementById("alertText").innerHTML="err.message";
}
   
    
}
function clearResult(){
    document.getElementById("alertText").innerHTML=" ";
}