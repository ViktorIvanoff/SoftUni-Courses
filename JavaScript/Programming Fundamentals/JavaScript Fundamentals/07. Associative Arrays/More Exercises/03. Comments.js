function solve(input) {
    // ['user aUser123', 'someUser posts on someArticle: NoTitle, stupidComment', 'article Books', 'article Movies', 'article Shopping', 'user someUser', 'user uSeR4', 'user lastUser', 'uSeR4 posts on Books: I like books, I do really like them', 'uSeR4 posts on Movies: I also like movies, I really do', 'someUser posts on Shopping: title, I go shopping every day', 'someUser posts on Movies: Like, I also like movies very much', 'Victor posts on Facebook: Cars, I like BMW'

    //  "user {username}" – add the user to the list of users
    // "article {article name}" – add the article to the article list
    // "{username} posts on {article name}: {comment title}, {comment content}" – save the info

    let users = [];

    let articles = {};

    for (let line of input) {

        if (line.includes('user')) {
            // user aUser123'
            let [rest, username] = line.split('user ');
            users.push(username);

        } else if (line.includes('posts on')) {
            // 'someUser posts on someArticle: NoTitle, stupidComment',
            // {username} posts on {article name}: {comment title}, {comment content}" – save the info

            let [userInfo, commentInfo] = line.split(': ');
            let [username, articleName] = userInfo.split(' posts on ');
            let [commentTitle, commentContent] = commentInfo.split(', ');

            // The user can only comment, when he is on the list of users and the article is in the list of articles

            if (users.includes(username) && articles[articleName]) {

                articles[articleName].push({
                    username,
                    commentTitle,
                    commentContent
                })
            }

        } else {
            // 'article Books'

            let [rest, article] = line.split('article ');

            articles[article] = [];
        }
    }

    let sortedArticles = Object.entries(articles).
        sort(sortingArticles);

    for (let article of sortedArticles) {

        console.log(`Comments on ${article[0]}`);

        let sortedUsers = article[1].sort((a, b) => a.username.localeCompare(b.username));

        //         --- From user someUser: Like - I also like movies very much
        // // --- From user uSeR4: I also like movies - I really do
        for (let user of sortedUsers) {

            console.log(`--- From user ${user.username}: ${user.commentTitle} - ${user.commentContent}`);
        }
    }
    // Comments on Movies
    // --- From user someUser: Like - I also like movies very much
    // --- From user uSeR4: I also like movies - I really do
    // Comments on Books
    // --- From user uSeR4: I like books - I do really like them
    // Comments on Shopping
    // --- From user someUser: title - I go shopping every day

    // sorting 

    //  At the end sort the articles by count of comments and print the users with their comments ordered by usernames in ascending.

    // [
    //     [
    //       'Books',
    //       {
    //         username: 'uSeR4',
    //         commentTitle: 'I like books',
    //         commentContent: 'I do really like them'
    //       }
    //     ],
    //     [
    //       'Movies',
    //       {
    //         username: 'someUser',
    //         commentTitle: 'Like',
    //         commentContent: 'I also like movies very much'
    //       }
    //     ],
    //     [
    //       'Shopping',
    //       {
    //         username: 'someUser',
    //         commentTitle: 'title',
    //         commentContent: 'I go shopping every day'
    //       }
    //     ]
    //   ]

    function sortingArticles(a, b) {

        return b[1].length - a[1].length;
    }

}