
// დავალება1 (რიცხვები, რომლებიც იყოფა5ზე)


// let number = (prompt("ჩაწერეთ რიცხვი:")); 
 
// if ((number)) { 
    

//     for (let i = 0; i <= number; i++) { 
//         if (i % 5 === 0) { 
//             console.log(i);
//         }
//     }
// } 




// დავალება2 (პალინდრომი)


// let word = prompt("sityva:"); 

// if (word) {  
//     let word2 = "";  
    
  
//     for (let i = word.length - 1; i >= 0; i--) {  
//         word2 += word[i];  
//     }

  
//     if (word === word2) {  
//         console.log("პალინდრომია");  
//     } else {  
//         console.log("არ არის პალინდრომი");  
//     }
// } 




// დავალება3 (რიცხვებისჯამი)

// let numbers = prompt("ჩაწერეთ რიცხვები");  
// let sum = 0;  

// for (let i = 0; i < numbers.length; i++) {  
//     sum += parseInt(numbers[i]);  
// }  

// console.log("ჯამი:", sum);






// დავალება4 (გამოიცანირიცხვი)

// let secretNumber = 77;
// let attempts = 5; 

// alert("გამოიცანი რიცხვი 1-დან 100-მდე 5 ცდაში.");

// while (attempts > 0) {
//     let guess = parseInt(prompt(`შენ გაქვს ${attempts} ცდა:`));

//     if (isNaN(guess)) {
//         alert("ჩაწერე რიცხვი!");
//         continue; 
//     }

//     if (guess === secretNumber) {
//         alert("საღოლ!");
//         break;
//     } else if (guess < secretNumber) {
//         alert("დაბალია! კიდევ სცადე.");
//     } else {
//         alert("მაღალია! კიდევ სცადე.");
//     }

//     attempts--; 

//     if (attempts === 0) {
//         alert("ლუზერ!წააგე");
//     }
// }







// // დავალება5 (ჩამოხრჩობანა)


let word = "ალუბალი";
let attempts = 6;
let guessedWord = "_ ".repeat(word.length);
let guessedLetters = [];



while (attempts > 0 && guessedWord !== word) {
    alert(guessedWord);
    console.log(guessedWord);

    alert("შენ გაქვს: " + attempts + " ცდა ");
    
    let guess = prompt("გამოიცანი აბა:");
   

        if (word.includes(guess)) {

            let newWord = "";
            for (let i = 0; i < word.length; i++) {
                if (word[i] === guess) {
                    newWord += guess;
                } else {
                    newWord += guessedWord[i];
                }

            }
     
            guessedWord = newWord;
        } else {
            attempts--;
        }
    }

    
if (guessedWord === word) {
    alert("მოიგეე");
    console.log(word + " მოიგეე");
   
} else {
    alert("წააგე :(");
    console.log("წააგეე");

}


























