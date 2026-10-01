let books = [
    {
        id: 1,
        title: "안녕",
        author: "Kim",
        category: "소설",
        price: 10000
    },

    {
        id: 2,
        title: "메롱",
        author: "Lee",
        category: "시",
        price: 12000
    },

    {
        id: 3,
        title: "맥심",
        author: "Park",
        category: "잡지",
        price: 15000
    }
];

function render() {
    const booklist = document.querySelector('.book-list');
    booklist.innerHTML = "";

    books.forEach((book) => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td>${book.id}</td>
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.category}</td>
            <td>${book.price}</td>
            <td>
                <button class="editbtn">수정</button>
                <button class="delbtn">삭제</button>
            </td>
        `;
        booklist.appendChild(tr);
    });
}

const id = document.querySelector("#id");
const title = document.querySelector("#title");
const author = document.querySelector("#author");
const price = document.querySelector("#price");
const category = document.querySelector("#category");
const btn = document.querySelector("#addbtn");
let editingId =null;

btn.addEventListener("click", function(e) {
    e.preventDefault();
    const idNum = Number(id.value);
    if(id.value.trim() === "" || isNaN(idNum)) {
        alert("id를 다시 확인하세요.");
        id.focus();
        return;
    }

    if(title.value.trim() === "") {
        alert("도서명을 입력하세요.");
        title.focus();
        return;
    }

    if(author.value.trim() === "") {
        alert("작가를 입력하세요.");
        author.focus();
        return;
    }

    const priceNum = Number(price.value);
    if(price.value.trim() === "" || isNaN(priceNum) || priceNum < 0) {
        alert("가격을 다시 확인하세요.");
        price.focus();
        return;
    }

    if(btn.textContent === "저장") {
        for(let i = 0; i < books.length; i++) {
            if(books[i].id === idNum && idNum !== editingId) {
                alert("이미 존재하는 id입니다.");
                id.focus();
                return;
            }
        }
        for(let i = 0;i<books.length;i++) {
            if(books[i].id === editingId ) {
                books[i].id = idNum;
                books[i].title = title.value.trim();
                books[i].author = author.value.trim();
                books[i].category = category.value;
                books[i].price = priceNum;
                break;
            }
        }
        editingId = null;
        btn.textContent="추가";
        id.value = "";
        title.value = "";
        author.value = "";
        price.value = "";
        render();
        return;
    }

    for(let i =0;i<books.length;i++) {
        if(books[i].id===idNum) {
            alert("이미 존재하는 id입니다.");
            id.focus();
            return;
        }
    }

    books.push({id : idNum, title : title.value.trim(), author : author.value.trim(), price : priceNum, category : category.value});
    id.value = "";
    title.value = "";
    author.value = "";
    price.value = "";
    render();
})

render();



const booklist = document.querySelector(".book-list");
booklist.addEventListener("click", function(e) {
    const tr = e.target.parentElement.parentElement;
    const targetId = tr.children[0].textContent;

    if(e.target.className === "delbtn") {
        for(let i = 0; i<books.length ; i++) {
            if(String(books[i].id) === targetId) {
                books.splice(i,1);
                break;
            }
        }

        if(editingId === Number(targetId)) {
            editingId = null;
            btn.textContent = "추가";
            id.value = "";
            title.value = "";
            author.value = "";
            price.value = "";
        }
        render();
    }

    if(e.target.className === "editbtn") {
        id.value = tr.children[0].textContent;
        title.value = tr.children[1].textContent;
        author.value = tr.children[2].textContent;
        category.value = tr.children[3].textContent;
        price.value = tr.children[4].textContent;

        editingId = Number(targetId);
        btn.textContent = "저장";
    }
})
