const bookTitle = document.querySelector("#input-title");
const bookAuthor = document.querySelector("#input-title");
const btnAdd = document.querySelector("#btn-add");

let data = {
  books: [],
};

let allBooks = JSON.parse(localStorage.getItem('book')) || {}

const clickHandler = () => {
  let title = bookTitle.value;
  let authorName = bookAuthor.value;

  if (!title && !authorName) console.log("Input fields can not be empty.");
  else {
    data.books = [...data.books, { title: title, authorName: authorName }];
  }

  if (title && authorName)
    localStorage.setItem("book", JSON.stringify(data.books));


    allBooks = JSON.parse(localStorage.getItem('book'))

   
};
console.log(allBooks)

btnAdd.addEventListener("click", clickHandler);
