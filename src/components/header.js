const Header = (title, date, temp) => {
  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //

  // Creating Elements
  const headerDiv = document.createElement('div');
  const dateSpan = document.createElement('span');
  const h1 = document.createElement('h1');
  const tempSpan = document.createElement('span');

  // Adding classes
  headerDiv.classList.add('header');
  dateSpan.classList.add('date');
  tempSpan.classList.add('temp');

  // Adding Text
  dateSpan.textContent = date
  h1.textContent = title;
  tempSpan.textContent = temp;

  // Appending Children
  headerDiv.appendChild(dateSpan);
  headerDiv.appendChild(h1);
  headerDiv.appendChild(tempSpan);

  return headerDiv;
  
}
console.log(Header());

const headerAppender = (selector) => {
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //
  const headerObject = Header('My Time', 'April 9, 2021', '42°');
  // const headerContainer = document.querySelector('header-container')
  // if(selector === '.header-container'){
  //   return headerObject
  // } else {
  //   return "Error"; 
  return new Promise((resolve))
  }

  
  
}
console.log(headerAppender())
export { Header, headerAppender }
