import axios from 'axios';
import { articles } from '../mocks/data'
import { headerAppender } from './header';

const Card = (article) => {
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //

  const cardDiv = document.createElement('div')
  const headlineDiv = document.createElement('div');
  const authorDiv = document.createElement('div');
  const imgDiv = document.createElement('div');
  const img = document.createElement('img');
  const span = document.createElement('span');

  cardDiv.classList.add('cards');
  headlineDiv.classList.add('headline');
  authorDiv.classList.add('author');
  imgDiv.classList.add('img-container');

  img.src = article.authorPhoto;

  headlineDiv.textContent = `${article.headline}`;
  span.textContent = `By ${article.authorName}`;

  cardDiv.addEventListener('click', () => {
    console.log('Article Headline:', `${article.headline}`)
  });

  cardDiv.appendChild(headlineDiv)
  cardDiv.appendChild(authorDiv)
  authorDiv.appendChild(imgDiv)
  imgDiv.appendChild(img)
  authorDiv.appendChild(span)

  return cardDiv;
}
console.log('Task 5:', Card(articles))
console.log('Articles:', articles.articles)

const cardAppender = (selector) => {
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `https://lambda-times-api.herokuapp.com/articles`
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //
  axios.get('https://lambda-times-api.herokuapp.com/articles')
  .then(res => {
    console.log('Task 6a:', res.data.articles)
    const cards = Card(res.data.articles)
    const java = Card(res.data.articles.javascript[0])
    const boot = Card(res.data.articles.bootstrap[0])
    const tech = Card(res.data.articles.technology[0])
    

    // res.data.articles.forEach(item => {
    //   document.querySelector(selector).appendChild(item[0])
    // })

    console.log('Task 6:', java)
    

    document.querySelector(selector).appendChild(java)
  })
  .catch(err => {
    console.log(err)
  })
}

export { Card, cardAppender }
