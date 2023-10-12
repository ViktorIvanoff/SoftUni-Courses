
const url = `http://localhost:3030/jsonstore/cookbook/recipes`;

window.addEventListener('load', async () => {
    try {
        const res = await fetch(url);
        const data = await res.json();
        let recipes = Object.values(data);
        showRecipes(recipes);
    }
    catch(err) {
        console.log(err);
    }
});

    function showRecipes(recipes) {
        const mainSectionElement = document.querySelector('main');
        mainSectionElement.innerHTML = '';

        recipes.forEach((r) => {
            const article = document.createElement('article');
            article.classList.add('preview');
    
            const titleDiv = document.createElement('div');
            titleDiv.classList.add('title');
            const h2 = document.createElement('h2');
            h2.textContent = `${r.name}`;
            titleDiv.appendChild(h2);
    
            article.appendChild(titleDiv);
    
            const smallDiv = document.createElement('div');
            smallDiv.classList.add('small');
            const img = document.createElement('img');
            img.src = `${r.img}`;
            smallDiv.appendChild(img);
            article.appendChild(smallDiv);

            mainSectionElement.appendChild(article);

            // attach event listener to each article
            article.addEventListener('click', async () => {
                //fetch data
                // fill html
                const recipeUrl = `http://localhost:3030/jsonstore/cookbook/details/${r._id}`;
                const recipeRes = await fetch(recipeUrl);
                const recipeData = await recipeRes.json();
                loadSeparateRecipe(recipeData);
            });
        });
    }

    function loadSeparateRecipe(data) {
        const mainSectionElement = document.querySelector('main');
        mainSectionElement.innerHTML = '';

        const secondArticle = document.createElement('article');

        const h2 = document.createElement('h2');
        h2.textContent = `${data.name}`;
        secondArticle.appendChild(h2);

        const bandDiv = document.createElement('div');
        bandDiv.classList.add('band');

        const thumbDiv = document.createElement('div');
        thumbDiv.classList.add('thumb');

        const img = document.createElement('img');
        img.src = `${data.img}`;
        thumbDiv.appendChild(img);

        bandDiv.appendChild(thumbDiv);

        const ingredientsDiv = document.createElement('div');
        ingredientsDiv.classList.add('ingredients');

        const h3 = document.createElement('h3');
        h3.textContent = "Ingredients:";
        ingredientsDiv.appendChild(h3);
  
        const ul = document.createElement('ul');
        data.ingredients.map((i) => {
            let li = document.createElement('li');
            li.textContent = `${i}`;
            ul.appendChild(li);
        });
   
        ingredientsDiv.appendChild(ul);

        bandDiv.appendChild(ingredientsDiv);

        secondArticle.appendChild(bandDiv);
        // secondArticle.appendChild(ingredientsDiv);
    
        const descriptionDiv = document.createElement('div');
        descriptionDiv.classList.add('description');

        const secondH3 = document.createElement('h3');
        secondH3.textContent = "Preparation:";
        descriptionDiv.appendChild(secondH3);

        data.steps.map((s) => {
            let p = document.createElement('p');
            p.textContent = `${s}`;
            descriptionDiv.appendChild(p);
        });
       
        secondArticle.appendChild(descriptionDiv);

        mainSectionElement.appendChild(secondArticle);
        return secondArticle;
    }
      
 
    

