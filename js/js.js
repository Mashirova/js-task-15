document.getElementById("button-one").addEventListener("click", getJson);
const tpl = document.getElementById('card').context;

function getJson() {
    fetch("db.json")
    .then((res) => {
        return res.json();
    })
    .then((data) => {
        console.log(data);
        let card = "";

        const fragment = document.createDocumentFragment();
        data.forEach((post) => {
            const card = document.createElement('div');
            card.className = 'card';
            card.innerHTML = `
            <div id="card">
            <img src="${post.img}" alt="">
            <div id="title">${post.title}
                <span id="price">${post.price}</span>
            </div>
            <p id="desc">${post.desc}",
            </p>
        </div>
            `
            fragment.append(card)
        });

        document.querySelector('.cards').append(fragment)


    });
}