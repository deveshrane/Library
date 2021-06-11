let myLibrary = [];
let readval;
const title = document.querySelector('#title');
const author = document.querySelector('#author');
const pages = document.querySelector('#pages');
const reads = document.getElementsByName('read');
const form = document.querySelector('form');
const output = document.querySelector('.output');
const disbtn = document.querySelector('.disbtn');
const body = document.querySelector('body');
const close = document.querySelector('.fa-times-circle');
const newbookbtn = document.querySelector('#newbookbtn');
const addnewbook = document.querySelector('.addnewbook');
listener();
function listener() {
    newbookbtn.addEventListener('click', showForm);
    form.addEventListener('submit', function (e) {
        for (let i = 0; i < reads.length; i++) {
            if (reads[i].checked === true) {
                readval = reads[i].value;
                break;
            }
        }
        addBookToLibrary();
        display();
        reset();
        e.preventDefault();
    }, false);
    close.addEventListener('click', closeForm);
}

function showForm() {
    addnewbook.style.display = "flex";
    body.className = "dark";
}

function addBookToLibrary() {
    const x = new Book(title.value, author.value, pages.value, readval);
    myLibrary.push(x);
    alert('Book added successfully');
}

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    if (readval == "true") {
        this.read = "Read";
    } else {
        this.read = "not read yet";
    }
    return this;
}

Book.prototype.info = function () {
    return `${this.title} by ${this.author}, ${this.pages}, ${this.read}`;
}

function display() {
    const main = document.querySelector('main');
    const card = document.createElement('div');
    card.className = "card";
    card.innerHTML = `
        <h2>${myLibrary[myLibrary.length - 1].title}</h2>
        <p class="pgread">Pages read</p>
        <div class="circle">
          <p class="pgnum">${myLibrary[myLibrary.length - 1].pages}</p>
        </div>
        <p class="author-title">${myLibrary[myLibrary.length - 1].author}</p>
        <div class="container">
          <div class="edit-div">
            <button class="edit btn">Edit</button>
          </div>
          <div class="spacer"></div>
          <div class="read-div">
            <button class="read btn">Read</button>
          </div>
        </div>
        `;
    main.appendChild(card);
}

function reset() {
    author.value = " ";
    title.value = " ";
    pages.value = " ";
    readval = undefined;
}

function closeForm() {
    addnewbook.style.display = "none";
    body.className = "";
}

function edit() {
    console.log('hello');
}