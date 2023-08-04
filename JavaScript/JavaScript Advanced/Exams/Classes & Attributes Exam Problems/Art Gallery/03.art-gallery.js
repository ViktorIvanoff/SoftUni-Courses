class ArtGallery{
    constructor(creator) {
        this.creator = creator;
        this.possibleArticles = { "picture":200,"photo":50,"item":250 };
        this.listOfArticles = [];
        this.guests = [];
    }

    addArticle(articleModel, articleName, quantity) {
        //     ('picture',    'Mona Liza',  3);
        // •	If the articleModel, is not present in possibleArticles object with specified default models, an error with the following message should be thrown:
        // "This article model is not included in this gallery!"
        articleModel = articleModel.toLowerCase();
        quantity = Number(quantity);

        if(!this.possibleArticles[articleModel]) {
            throw new Error("This article model is not included in this gallery!");
        }

        // •	If the articleName already exists in listOfArticles array and the articleModel is the same just add the new quantity to the old one.
        let article = this.listOfArticles.find(a => a.articleName === articleName);

        if(article && article.articleModel === articleModel) {
            article.quantity += quantity;
        } else {
//             Otherwise, add the articleModel, articleName, quantity to listOfArticles array in following format: {articleModel, articleName, quantity}. The articleModel must be toLowerCase().
// •	And finally, return the following message:
// "Successfully added article {articleName} with a new quantity- {quantity}."
            this.listOfArticles.push( {articleModel, articleName, quantity} );
        }
        return `Successfully added article ${articleName} with a new quantity- ${quantity}.`;
    }

    inviteGuest (guestName, personality) {
        // •	If the guestName is already present in the guests array, throw a new error:
        //    "{guestName} has already been invited."
        let guest = this.guests.find(g => g.guestName === guestName);
        if(guest) {
            throw new Error(`${guestName} has already been invited.`);
        } else {

            let points = 0;
            if (personality === 'Vip') {
                points = 500;
            } else if(personality === 'Middle') {
                points = 250;
            } else{
                points = 50;
            }

            this.guests.push( {guestName, points, purchaseArticle: 0} );
        }
        return `You have successfully invited ${guestName}!`;
        // therwise, create a new record in the guests array in following format: {guestName, points, purchaseArticle: default 0}. Where the points are the points that the guest has. With them he can buy an article. They are determined depending on personality (see the table below).
    }

    buyArticle (articleModel, articleName, guestName) {
        // •	If the ‘Mona Liza’ articleName is not found in listOfArticles array or the articleModel ‘picture’ doesn’t match, throw a new error:
        // "This article is not found."
        // ('picture', 'Mona Liza', 'John'));
        let article = this.listOfArticles.find(a => a.articleName === articleName);

        if(!article || article.articleModel != articleModel) {
            throw new Error("This article is not found.");
        }
        // •	If the quantity of the current article is equal to 0, return message:
        //            "The {articleName} is not available."
        if(article.quantity === 0) {
            return `The ${articleName} is not available.`;
        }
        // •	If the guestName is not present in the guests array, return message:
        //        "This guest is not invited."
        let guest = this.guests.find(g => g.guestName === guestName);

        if(!guest) {
            return "This guest is not invited.";
        }

        let articlePoints = this.possibleArticles[articleModel];
//         •	Otherwise, you need to check if the guest has the required number of points to purchase the article. (The necessary points of the article (price) are determined by the model in possibleArticles array)
// o	If the points are not enough to buy an article, return the following message:
//          "You need to more points to purchase the article."
        if(guest.points < articlePoints) {
            return "You need to more points to purchase the article.";
        } else {
            guest.points -= articlePoints;
            article.quantity--;
            guest.purchaseArticle++;
        }

        return `${guestName} successfully purchased the article worth ${articlePoints} points.`;
// o	If they are enough, you need to reduce the current points of the guest by according to the points of model article in possibleArticles array, reduce the quantity of the current article and increase the number of purchases of the guest.
// •	Finally, return message:
// "{guestName} successfully purchased the article worth {articlePoint} points."

    }

    showGalleryInfo (criteria) {
//         If the criterion is-"article"- then you need to return all the information about the articles saved in listOfArticle array in following format:
// o	On first line show the following message:
//    "Articles information:"
// o	On the lines, display information about each article: each article is an object, which is in the Articles Array of Objects 
// {articleModel} - {articleName} - {quantity}
        let result = [];
        if(criteria === 'article') {
            result.push("Articles information:");
            this.listOfArticles.forEach(a => 
                result.push(`${a.articleModel} - ${a.articleName} - ${a.quantity}`)
            );
        } else {
//             •	If the criterion is-"guest"- then you need to return all the information about the guests saved in guest array in following format:
// o	On first line show the following message:
//       "Guests information:"
// o	On the lines, display information about each guest:
//                         {guestName} - {purchaseArticle} 
            result.push("Guests information:");
            this.guests.forEach(g => 
                result.push(`${g.guestName} - ${g.purchaseArticle}`)
                );
        }
        return result.join('\n');
    }
    // Articles information:
    // picture - Mona Liza - 3
    // item - Ancient vase - 1
    // Guests information:
    // John - 1
    // Peter - 1
}
const artGallery = new ArtGallery('Curtis Mayfield'); 
artGallery.addArticle('picture', 'Mona Liza', 3);
artGallery.addArticle('Item', 'Ancient vase', 2);
artGallery.addArticle('picture', 'Mona Liza', 1);
artGallery.inviteGuest('John', 'Vip');
artGallery.inviteGuest('Peter', 'Middle');
artGallery.buyArticle('picture', 'Mona Liza', 'John');
artGallery.buyArticle('item', 'Ancient vase', 'Peter');
console.log(artGallery.showGalleryInfo('article'));
console.log(artGallery.showGalleryInfo('guest'));
