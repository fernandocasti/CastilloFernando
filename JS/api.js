/* Metodo async creado para mostrar el id y el nombre del producto

const pedirPost = async () => {
    const posts = document.getElementById("catalogoVinos");

    fetch(`https://api.mercadolibre.com/sites/MLA/search?category=MLA1404#json`)

    .then( (response) => response.json())
    .then( (data) => {
        data.forEach( (post) => {
            const li = document.createElement(`li`);
            li.innerHTML = `
            <h2>${post.results}</h2>
            `;
            posts.append(li);
        });
    });
}
pedirPost();*/

const pedirproducto = async () =>{
    const mostrar = document.getElementById("catalogoVinos");
    const resp = await fetch("https://api.mercadolibre.com/categories/MLA1404/attributes#json");
    const data = await resp.json();
    data.map( (lista) => {
        const li = document.createElement("li");
        li.innerHTML = `
            <div class="row">
                <img src="https://loremflickr.com/100/100/${lista.name}">
                <h4>${lista.name}</h4>
                <p>${lista.id}</p>
            </div>
        `
        mostrar.append(li)
    });
};
pedirproducto();