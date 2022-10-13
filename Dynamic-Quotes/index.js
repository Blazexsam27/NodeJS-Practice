let jsonData = "";
const quote = document.getElementById('quote');
const author = document.getElementById('author');
let quoteData = "";

const getNewQuote = () => {
	const rnum = Math.floor(Math.random() * 1644);
	quoteData = jsonData[rnum];
	quote.innerText = `${quoteData.text}`;
	author.innerText = quoteData.author == null ? "- Unknown" :  `- ${quoteData.author}`;;


}

const getQuotes = async () => {
	const url = "https://type.fit/api/quotes";
	const data = await fetch(url);
	jsonData = await data.json();
	getNewQuote();
}

getQuotes();