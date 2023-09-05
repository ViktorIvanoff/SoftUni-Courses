function getArticleGenerator(articles) {
//     Write a JS program that sequentially displays articles on a web page when the user clicks a button. You will receive an array of strings that will initialize the program. You need to return a function that keeps the initial array in its closure and every time it’s called, it takes the first element from the array and displays it on the web page, inside "article", in div with ID "content". If there are no more elements left, your function should do nothing.
// Your function will be called automatically, there is no need to attach any event listeners.

// Return a function that sequentially displays the array elements on the web page.

// let articles = [
//     "Cats are the most popular pet in the United States: There are 88 million pet cats and 74 million dogs.",
//     "A group of cats is called a clowder.",
//     "Cats have over 20 muscles that control their ears.",
//     "A cat has been mayor of Talkeetna, Alaska, for 15 years. His name is Stubbs.",
//     "The world's largest cat measured 48.5 inches long."
// ];

    return () => {

        if (articles.length > 0) {
            let sentence = articles.shift();

            let div = document.getElementById('content');
            let article = document.createElement('article');
    
            article.textContent = sentence;
            div.appendChild(article);
        }
    }
}


