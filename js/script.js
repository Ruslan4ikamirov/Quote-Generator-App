const button = document.getElementById('btn');
const quote = document.getElementById('quote');
const author = document.getElementById('author');

button.addEventListener('click', () => {
    async function getQuote() {
        const response = await fetch('http://api.quotable.io/random');
        const data = await response.json();
        console.log(data);
        quote.innerHTML = data.content;
        author.innerHTML = data.author;
    }
    getQuote();
});



