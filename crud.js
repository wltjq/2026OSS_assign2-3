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



render();
