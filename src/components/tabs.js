import axios from "axios";
import { topics } from "../mocks/data.js";

const Tabs = (topics) => {
  // TASK 3
  // ---------------------
  // Implement this function which takes an array of strings ("topics") as its only argument.
  // As an example, if the topics passed are ['javascript', 'bootstrap', 'technology']
  // then the function returns the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  // <div class="topics">
  //   <div class="tab">javascript</div>
  //   <div class="tab">bootstrap</div>
  //   <div class="tab">technology</div>
  // </div>
  //

  const topicsDiv = document.createElement('div')
  const tabDiv1 = document.createElement('div')
  const tabDiv2 = document.createElement('div')
  const tabDiv3 = document.createElement('div')

  topicsDiv.classList.add('topics')
  tabDiv1.classList.add('tab')
  tabDiv2.classList.add('tab')
  tabDiv3.classList.add('tab')

  tabDiv1.textContent = topics[0];
  tabDiv2.textContent = topics[1];
  tabDiv3.textContent = topics[2];

  topicsDiv.appendChild(tabDiv1)
  topicsDiv.appendChild(tabDiv2)
  topicsDiv.appendChild(tabDiv3)

  return topicsDiv;

}
console.log('Task 3:', Tabs(topics))
 

const tabsAppender = (selector) => {
  // TASK 4
  // ---------------------
  // Implement this function which takes a css selector as its only argument.
  // It should obtain topics from this endpoint: `https://lambda-times-api.herokuapp.com/topics`
  // Find the array of topics inside the response, and create the tabs using the Tabs component.
  // Append the tabs to the element in the DOM that matches the selector passed to the function.
  //

  axios.get('https://lambda-times-api.herokuapp.com/topics')
  .then(res => {
    console.log("Topics:", res.data.topics)
    const tabs = Tabs(res.data.topics)
    
    document.querySelector(selector).appendChild(tabs)
    
    
   
  })
  .catch(err => {
    console.log(err)
  })

}
export { Tabs, tabsAppender }
