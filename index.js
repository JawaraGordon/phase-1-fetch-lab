/* function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
 return fetch("https://anapioficeandfire.com/api/books")
  .then(function (response) {
    return response.json(){
    .then(function (json) {
      // Use the data inside of `json` to do DOM manipulation
      renderBooks(json);
    })}; */

function fetchBooks() {
  return fetch("https://anapioficeandfire.com/api/books")
    .then((resp) => resp.json())
    .then((json) => renderBooks(json));
}

function renderBooks(books) {
  const main = document.querySelector("main");
  books.forEach((book) => {
    const h2 = document.createElement("h2");
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener("DOMContentLoaded", function () {
  fetchBooks();
});
