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
                <button class="btn">수정</button>
                <button class="btn">삭제</button>
            </td>
        `;
        booklist.appendChild(tr);
    });
}

const btn = document.querySelector("#addbtn");
btn.addEventListener("click", function(e) {
    e.preventDefault();
    const id = document.querySelector("#id");
    const title = document.querySelector("#title");
    const author = document.querySelector("#author");
    const price = document.querySelector("#price");
    const category = document.querySelector("#category");

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

    books.push({id : id.value.trim(), title : title.value.trim(), author : author.value.trim(), price : priceNum, category : category.value});
    id.value = "";
    title.value = "";
    author.value = "";
    price.value = "";
    render();
})



render();
