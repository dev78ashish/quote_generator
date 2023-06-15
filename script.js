const quoteText = document.querySelector(".quote")
const quoteBtn = document.querySelector("button")
const authorName = document.querySelector(".name")
const copyBtn = document.querySelector(".copy")
const soundBtn = document.querySelector(".sound")

function randomquote(){
    quoteText.innerHTML = "Loading Quote....."
    fetch("https://api.quotable.io/random").then(res=>res.json()).then(result=>{
        console.log(result)
        quoteText.innerHTML = result.content
        authorName.innerHTML = result.author
    })
}

quoteBtn.addEventListener("click", randomquote)

soundBtn.addEventListener("click", () => {
    let utter = new SpeechSynthesisUtterance(`${quoteText.innerHTML}`);
    speechSynthesis.speak(utter);
});
  
copyBtn.addEventListener("click", () =>{
    navigator.clipboard.writeText(quoteText.innerHTML);
  // Alert the copied text
  alert("Copied the text: " + quoteText.innerHTML);
})