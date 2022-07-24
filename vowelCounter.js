var reset = document.getElementById('reset-button'); 
var submit = document.getElementById('submit-button');
var sentence = document.getElementById('sentence'); 
var middle = document.getElementById('middle'); 
var text = document.getElementById('text'); 
var mainSection = document.getElementById('main-section'); 

reset.addEventListener('click',function(){
    sentence.value = ''; 
    mainSection.style.opacity = 1; 
    middle.style.opacity = 0; 
});

submit.addEventListener('click',function(){
    middle.style.opacity = 1; 
    mainSection.style.opacity = 0; 
    const vowels = ["a", "e", "i", "o", "u"];
    let count = 0;
    for (let letter of sentence.value.toLowerCase()) {
        if (vowels.includes(letter)) {
            count++;
        }
    }
    text.innerHTML= "Total vowels in sentence : " + count;
}); 