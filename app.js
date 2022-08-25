
const cervezas = [

    {id: 1, precio: 100, marca: "BRAHAMA", ml: 1000},
    
    {id: 2, precio: 170, marca: "QUILMES", ml: 1000},
    
    {id: 3, precio: 260, marca: "HEINEKEN", ml: 1000},
    
    {id: 4, precio: 270, marca: "STELLA ARTOIS", ml: 1000},
    
    {id: 5, precio: 180, marca: "SANTA FE", ml: 1000},
    
    
    ]
const vinos = [

    {id: 1, precio: 500, marca: "BEJAMIN", ml: 1000},
    
    {id: 2, precio: 700, marca: "DON DAVID", ml: 1000},
    
    {id: 3, precio: 550, marca: "ELEMENTOS", ml: 1000},
    
    {id: 4, precio: 400, marca: "ALMA MORA", ml: 1000},
    
    {id: 5, precio: 800, marca: "TRAPICHE", ml: 1000},
    
    {id: 6, precio: 300, marca: "FINCA LAS MORAS", ml: 1000},
    
    ]
    const vodka = [

        {id: 1, precio: 780, marca: "HIRAM", ml: 1000},
        
        {id: 2, precio: 6000, marca: "SMIRNOF", ml: 1000},
        
        {id: 3, precio: 3100, marca: "ABSOLUTE", ml: 1000},
        
        {id: 4, precio: 980, marca: "SKY", ml: 1000},
        
        {id: 5, precio: 2700, marca: "BELENKAYA", ml: 1000},
        
        {id: 6, precio: 800, marca: "SERNOVA", ml: 1000},
        
        ]
    const fernet = [
    
        {id: 1, precio: 2000, marca: "BRANCA", ml: 1000},
        
        {id: 2, precio: 1700, marca: "BRANCA", ml: 750},
        
        {id: 3, precio: 600, marca: "CAPRI", ml: 1000},
        
        {id: 4, precio: 500, marca: "VITONE", ml: 1000},
        
        {id: 5, precio: 1000, marca: "BRANCA", ml: 500},
        
        {id: 6, precio: 900, marca: "1890", ml: 1000},
        
        ]
        
        let contadorCarrito = 0;
        const carrito = [];
        
        
        const productosCatalogo = (id) => {
            return `
                    <div class="col-2">
                        <div class="card">
                        <img src="https://loremflickr.com/80/80/${id.marca}" class="card-img-top" alt="API">
                            <div class="card-body">
                              <h5 class="card-title">${id.marca}</h5>
                              <p class="card-text">precio: $ ${id.precio}: </p>
                              <button id ="btn-${id.marca}-${id.id}" class="btn btn-primary">comprar</button>
                             </div>
                        </div>
                    </div>`;
        };
    
        const productosCarritos = (id) =>{
            return `
                    <div class="col-3">
                        <div class="card">
                        <img src="https://loremflickr.com/80/80/${id.marca}" class="card-img-top" alt="API">
                            <div class="card-body">
                              <h5 id="listadoBebidas" class="card-title">${id.marca}</h5>
                              <p class="card-text">precio: $ ${id.precio} </p>
                              <button id ="btn-delete-${id.idcompra}" class="btn btn-danger">Quitar</button>
                            </div>
                        </div>
                    </div>`;
        };
                  
        const mostrarListadoCervezas = () => {
            const cervezasNodo = document.getElementById("catalogoCervezas");
            let cervezashtml = "";
            
            for(const id of cervezas){
                cervezashtml += productosCatalogo(id);
            }
            
            cervezasNodo.innerHTML = cervezashtml;
            
            botonCatalogoCervezas();

            
        };
        
        const mostrarCarritos = () => {
            const carritoNodo = document.getElementById("carrito");
            let carritoHtml = "";
            
            for(const id of carrito){
                carritoHtml += productosCarritos(id);
                
            }
            carritoNodo.innerHTML = carritoHtml;
            botonesCarritos();
        };
        const botonesCarritos = () => {
            for(const id of carrito){
                const idboton = `btn-delete-${id.idcompra}`;
                const nodoboton = document.getElementById(idboton);
                console.log(id);
                console.log(idboton);
                console.log(nodoboton);
                
                nodoboton.addEventListener("click", () => {
                    const index = carrito.findIndex((p) => p.idcompra == id.idcompra);
                    carrito.splice(index, 1);
                    mostrarCarritos();
                })
                
            }
        };
        const botonCatalogoCervezas = () => {
        
            for(const id of cervezas){
                const botonid = `btn-${id.marca}-${id.id}`
                const nodoBoton = document.getElementById(botonid);
                
                nodoBoton.addEventListener ("click", () => {
                    const productoCarrito = {
                        marca: id.marca,
                        idcompra: contadorCarrito,
                    };
                    
                    contadorCarrito += 1;
                    carrito.push(productoCarrito);
                    mostrarCarritos();
                });
            }
        };
        mostrarListadoCervezas();
       
           
            
            
        
        
        
        /* ESTE CODIGO ES PARA USARLO EN EL PROYECTO FINAL
        
        
        let agregarBebidas = document.getElementById("bebidas");
        let bebidas = ["CERVEZAS", "FERNET", "VINOS", "VODKA", "GASEOSAS"]
        let agregarGalletitas =  document.getElementById("galletitas");
        let galletitas = ["OREOS", "MELBA", "9 DE ORO", "PITUSAS", "DON SATUR"]
        
        for(const bebida of bebidas){
            let lista = document.createElement("li");
            lista.innerHTML = bebida;
            agregarBebidas.appendChild(lista);
        }
        
        for(const galletita of galletitas){
            let listas = document.createElement("li");
            listas.innerText = galletita;
            agregarGalletitas.appendChild(listas);
        }
        
        let Formularios = document.getElementById("formulario");
        Formularios.addEventListener("click", validar);
        
        function validar (e){
        e.preventDefault();
        let form = e.target;
        console.log(e);
        console.log(Formularios);
        console.log(form);
        }
        console.log("hola");
        const nombre = prompt("ingresa tu nombre")
        let bebida = prompt(nombre +" ingrese la bebida que desee de la siguiente lista: 1 cerveza, 2 vinos, 3 vodka, 4 fernet")
        
        function buscar (){
        if(bebida.toUpperCase() == "FERNET"){
            console.log("esta es nuestra lista de " +bebida +":")
            for(const id of fernet){
                console.log(id.marca +" $" +id.precio  +" " +id.ml +"ml")
            }
        }else if(bebida.toUpperCase() == ("CERVEZAS") || bebida.toUpperCase() == ("CERVEZA")){
            console.log("esta es nuestra lista de " +bebida +":")
            for(const id of cervezas){
                console.log(id.marca +" $" +id.precio +" " +id.ml +"ml")
            }
        }else if(bebida.toUpperCase() == ("VINOS") || bebida.toUpperCase() == ("VINO")){
            console.log("esta es nuestra lista de " +bebida +":")
            for(const id of vinos){
                console.log(id.marca +" $" +id.precio +" " +id.ml +"ml")
            }
        }else if(bebida.toUpperCase() == ("VODKA")){
            console.log("esta es nuestra lista de " +bebida +":")
            for(const id of vodka){
                console.log(id.marca +" $" +id.precio +" " +id.ml +"ml")
            }
        }else{
            console.log("no tenemos esa lista disponible")
        }
    }*/