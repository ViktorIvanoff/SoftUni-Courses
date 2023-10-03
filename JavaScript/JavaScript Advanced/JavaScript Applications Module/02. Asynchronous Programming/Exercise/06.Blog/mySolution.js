function attachEvents() {
   // data object of objects
    // {
    // body: {postBody},
    // id: {postId},
    // title: {postTitle}
    //     }

    // take all elements
    const loadPostsBtn = document.getElementById('btnLoadPosts');
    const viewPostsBtn = document.getElementById('btnViewPost');

    const postsSelectOption = document.getElementById('posts');
    const postTitleElement = document.getElementById('post-title');
    const postBodyElement = document.getElementById('post-body');
    const postCommentsUl = document.getElementById('post-comments');

    const postsUrl = `http://localhost:3030/jsonstore/blog/posts`;
    const commentsUrl = `http://localhost:3030/jsonstore/blog/comments`;

    //attach event listeners
    // load all posts data
    // add posts options to `select` (update html)
    // load data per post by postId
    // show post data (update html)
    // load all comments data
    // filter comments based on the selected post
    // show filtered comments (update html)

    loadPostsBtn.addEventListener('click', loadPosts);
    viewPostsBtn.addEventListener('click', viewPosts);

    //load all posts data
    async function loadPosts(e) {
        try {
            // fetch data
            const res = await fetch(postsUrl);
            const data = await res.json();

            // small error handling
            if(!res.ok) {
                throw new Error(res.statusText);
            }

            //clear fields ??? 
            postsSelectOption.innerHTML = '';

            Object.entries(data)
            .forEach( ([key, value]) => {
               let postOption = document.createElement('option');
               postOption.value = key;
               postOption.textContent = value.title;
               postsSelectOption.appendChild(postOption)

            });

            // -MSbypx-13fHPDyzNRtf : {
                // value
            // body: 
            // "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis maiores eligendi quos quidem ex numquam hic. Eos quos similique voluptates accusamus quae voluptas magni ad a ipsum, quia enim debitis cumque quibusdam exercitationem architecto sint nostrum dolorum dolor repudiandae nulla deserunt, dolorem itaque!"
            // id: 
            // "-MSbypx-13fHPDyzNRtf"
            // title: "Unit Testing And Modules" }
        }
        catch(error) {
            console.log(error);
        }
    }

    async function viewPosts(e) {
        try {
            // find selected post and load it
            let postId = '';
            document.querySelectorAll('option')
            .forEach((o) => {
               if(o.selected) {
                // get the selected option
                postId = o.value;
               } 
            });

            // fetch data
            const postUrl = `http://localhost:3030/jsonstore/blog/posts/${postId}`;

            const res = await fetch(postUrl);
            const data = await res.json();

            // small error handling
            if(!res.ok) {
                throw new Error(res.statusText);
            }

            postTitleElement.innerHTML = '';
            postTitleElement.textContent = data.title;
            postBodyElement.textContent = data.body;

            //load all comments
            let commentsRes = await fetch(commentsUrl);
            let commentsData = await commentsRes.json();

            if(!commentsRes.ok) {
                throw new Error(commentsRes.statusText);
            }

            let filteredComments = Object.values(commentsData).filter(x => x.postId === postId);

            postCommentsUl.innerHTML = '';
            
            filteredComments
            .forEach(comment => {
                let commentLi = document.createElement('li');
                commentLi.id = comment.id;
                commentLi.textContent = comment.text;
                postCommentsUl.appendChild(commentLi);
            });
        
//             id
// : 
// "-MSgyZoHC-v0eEdoy31Y"
// postId
// : 
// "-MSbzSdzWBvBHJN7gdRw"
// text
// : 
// "I have learned a lot from this post."      
}
        catch(error){
            console.log(error);
        }
    }
}

attachEvents();