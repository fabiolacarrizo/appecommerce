
const products = [
    {id: '1', name:'Reloj',codigo:'DQ1907', price:1000, categoria:'Mujer', subcategoria:'Analogico', description:'Reloj de pulsera', stock:'20', img:'/images/dq1907.jpg'},

    {id: '2', name:'Reloj',codigo:'DQ1879', price:1000, categoria:'Hombre', subcategoria:'Analogico', description:'Maquina con calendario', stock:'20', img:'/images/dq1879.jpg' },

    {id: '3', name:'Reloj',codigo:'DQ2089', price:930, categoria:'Niños', subcategoria:'Digital', description:'Alarma y cronometro', stock:'20', img:'/images/dq2089.jpg' },

    {id: '4', name:'Reloj',codigo:'DQ1886', price:850, categoria:'Mujer',subcategoria:'Analogico', description:'Malla de metal', stock:'20', img:'/images/dq1886.jpg' },

    {id: '5', name:'Reloj',codigo:'DQ1898', price:'1200', categoria:'Digital',subcategoria:'Digital', description:'Alarma y cronometro', stock:'20', img:'/images/dq1898.jpg' },

    {id: '6', name:'Reloj',codigo:'DQ2166', price:'1000', categoria:'Digital',subcategoria:'Digital', description:'Alarma y Cronometro', stock:'20', img:'/images/dq2166.jpg' },

    {id: '7', name:'Reloj',codigo:'DQ2161', price:'1230', categoria:'Oferta',subcategoria:'Digital', description:'digital', stock:'20', img:'/images/dq2161.jpg' },

    {id: '8', name:'Reloj',codigo:'DQ2130', price:'850', categoria:'Hombre',subcategoria:'Analogico', description:'analogico', stock:'20', img:'/images/dq2130.jpg' }
]

export const getProducts = ()=>{
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
           resolve(products)
        }, 1000)
    })
}

export const getProductsById=(id)=>{
    return new Promise (resolve =>{
        setTimeout(()=>{
            resolve(products.find(prod =>{
                return prod.id === id
            }))
       }, 500) 
    })
}

export const getProductsByIdCategory=(categoriaId)=>{
    return new Promise((resolve) => {
        setTimeout(() => {
           resolve(products.filter(prod => prod.categoria === categoriaId)) 
        }, 1000);
    })
}

export const getProductsByIdSubCategory= (subCategoriaId)=>{
      return new Promise((resolve) => {
        setTimeout(()=>{
          resolve(products.filter(prod => prod.subcategoria === subCategoriaId))
        }, 1000)
      })
}