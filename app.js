
const cervezas = [

    {id: 1, precio: 100, marca: "BRAMA", ml: 1000},
    
    {id: 2, precio: 170, marca: "QUILMES", ml: 1000},
    
    {id: 3, precio: 260, marca: "HEINEKEN", ml: 1000},
    
    {id: 4, precio: 270, marca: "STELLA ARTOIS", ml: 1000},
    
    {id: 5, precio: 180, marca: "SANTA FE", ml: 1000},
    
    {id: 6, precio: 300, marca: "PATAGONIA", ml: 1000},
    
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
        
        
        const nombre = prompt("ingresa tu nombre")
        let bebida = prompt(nombre +" ingrese la bebida que desee")
        
        
        function buscar (){
        if(bebida.toUpperCase() == ("FERNET")){
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
    }
    console.log(buscar());
        
       