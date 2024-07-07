const speakBtn = document.querySelector('.speak-btn');
let currentQuote;
let currentAuthor;
function Quotes(quote1,author1){
    currentQuote = quote1;
    currentAuthor =author1;
}
speakBtn.addEventListener('click', () =>{
    let utterance = new SpeechSynthesisUtterance(`${currentQuote} by ${currentAuthor}`);
    speechSynthesis.speak(utterance);
})


const apikey = "thlUjNYOLZpudJjFqBtTgA==pvWlVg4JoJsAVUPc";
const apiUrl = "https://api.api-ninjas.com/v1/quotes?category=happiness";

const quotes = document.querySelector(".Quotes");
const author = document.querySelector(".author-name b");
fetch(apiUrl, {
  headers: {
    "X-Api-Key": apikey,
  },
})
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then((data) => {
    quotes.innerHTML = data[0].quote;
    author.innerHTML = data[0].author;
    Quotes(data[0].quote,data[0].author)
  });

const generateBtn = document.querySelector(".quote-btn");
generateBtn.addEventListener("click", () => {
  fetch(apiUrl, {
    headers: {
      "X-Api-Key": apikey,
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      quotes.innerHTML = data[0].quote;
      author.innerHTML = data[0].author;
      Quotes(data[0].quote,data[0].author);
    });
});
