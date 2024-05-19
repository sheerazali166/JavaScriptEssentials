


var xhr = new XMLHttpRequest();
var url = './health_article.json';

// URL definition and request set up
xhr.open('GET', url, true);

// Response type specification
xhr.responseType = 'json';

// Handling the 'onload' event
xhr.onload = function() {

    var articles = xhr.response.articles;
    var articlesDiv = document.getElementById('articles');

    articles.forEach(function(article) {
    
        var articleDiv = document.createElement('div');
        articleDiv.classList.add('article');
    
        var title = document.createElement('h2');
        title.textContent = article.title;
    
        var description = document.createElement('p');
        description.textContent = article.description;
    
    
        var waysHeader = document.createElement('h3');
        waysHeader.textContent = 'Ways to Achieve:';
     
        var waysList = document.createElement('ul');
        article.ways_to_achieve.forEach(function(way) {
    
            var listItem = document.createElement('li');
            listItem.textContent = way;
            waysList.appendChild(listItem);
    
        });

        var benefitsHeader = document.createElement('h3');
        benefitsHeader.textContent = 'Benefits:';
    
        var BenefitsList = document.createElement('ul');
        article.benefits.forEach(function(benefit) {
    
            var listItem = document.createElement('li');
            listItem.textContent = benefit;
            BenefitsList.appendChild(listItem);
    
    
        });

        articleDiv.appendChild(title);
        articleDiv.appendChild(description);
        articleDiv.appendChild(waysHeader);
        articleDiv.appendChild(waysList);
        articleDiv.appendChild(benefitsHeader);
        articleDiv.appendChild(BenefitsList);
    
        articlesDiv.appendChild(articleDiv);

        // var articleDiv = document.createElement('div');
        // articleDiv.classList.add('article');

        // articleDiv.appendChild(title);

    });

}

xhr.send();













