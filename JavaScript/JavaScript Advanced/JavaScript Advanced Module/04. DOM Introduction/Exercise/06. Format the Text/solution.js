function solve() {

  let input = document.getElementById('input');
  let textArr = input.value.split('.').filter(s => s !== '');
  let output = document.getElementById('output');

  while (textArr.length > 0) {

    let text = textArr.splice(0, 3).join('. ') + '.';
    let p = document.createElement('p');
    p.textContent = text;
    output.appendChild(p);

  }
}

//   JavaScript, often abbreviated as JS, is a high-level, interpreted programming language. It is a language which is also characterized as dynamic, weakly typed, prototype-based and multi-paradigm.
// JavaScript, often abbreviated as JS, is a high-level, interpreted programming language. It is a language which is also characterized as dynamic, weakly typed, prototype-based and multi-paradigm. Alongside HTML and CSS, JavaScript is one of the three core technologies of the World Wide Web. JavaScript enables interactive web pages and thus is an essential part of web applications. The vast majority of websites use it, and all major web browsers have a dedicated JavaScript engine to execute it. As a multi-paradigm language, JavaScript supports event-driven, functional, and imperative (including object-oriented and prototype-based) programming styles. It has an API for working with text, arrays, dates, regular expressions, and basic manipulation of the DOM, but the language itself does not include any I/O, such as networking, storage, or graphics facilities, relying for these upon the host environment in which it is embedded.

// Create a functionality that gets a text from textarea, formats the given text - you need to find out how many sentences there are in the text, simply split the whole text by '.' 
// Also, every sentence must have at least 1 character.

// Generate HTML paragraphs as a string (Use interpolation string to create paragraph element: `<p> {text} </p>`) and append it to the div with an id = "output".

// When the [Format] button is clicked, get the text inside the textarea with an id="input" and format it. The formatting is done as follows:
// •	Create a new paragraph element that holds no more than 3 sentences from the given input.
// •	Hint: Use interpolation string to create paragraph element. (`<p> {text} </p>`)
// •	If the given input contains less or 3 sentences, you need to create only 1 paragraph, fill it with these sentences and append this paragraph to the div with an id="output". 
// Otherwise, when you have more than 3 sentences, create enough paragraphs to get all sentences from the textarea.
// Just remember to restrict the sentences in each paragraph to 3.

// •	If the input textarea contains 2 sentences, create only 1 paragraph with these 2 sentences

// •	If the input textarea contains 7 sentences, create 3 paragraphs
// - The first paragraph must contain the first 3 sentences
// - The second paragraph must contain the other three sentences of the whole text
// - The third paragraph will contain only the last sentence 

