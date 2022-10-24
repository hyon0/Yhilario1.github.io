// function suma(a,b){
//     return a+b
// }

// let value=suma(5,2)
// console.log(value)

// const suma=(a,b)=>a+b
// console.log(suma(6,8))

// const opera=(a,b)=>(
//     {
//         suma:a+b,
//         resta:a-b
//     }
// )
// console.log(opera(3,4))

// let persona={
//     nombre:'stivens',
//     edad:23
// }
// // const {nombre,edad}=persona;
// // console.log(nombre,edad)
// const persona2={
//     facultad:'FIS'
// }

// persona={
//     ...persona,
//     ...persona2,
//     hola:'hola'
// }
// console.log(persona)

// let arr1=[1,2,3]
// const arr2=[5,6,7]

// arr1=[...arr2,...arr1,4];
// console.log(arr1)

//Práctica del Carrito

const productos=[
    {
        id:1,
        nombre:'Pizza Americana',
        precio:25
    },
    {
        id:2,
        nombre:'Pizza Española',
        precio:30
    },
    {
        id:3,
        nombre:'Pizza Latina',
        precio:35
    }
]

let rpt;
let carrito=[];

const agregarCarrito=(productId,quantity)=>{
    const product=productos.find(product=>product.id==productId);
    carrito=[
        ...carrito,
        {
            ...product,
            cantidad:quantity
        }
    ]
    console.log(carrito)
}
const calcularTotal=()=>{
    const total = carrito.reduce((acc, el) => acc + el.precio*el.cantidad, 0)
console.log(`El total a pagar por su compra es: ${total}`)
}

while(rpt!=0){
    let productId=prompt('Ingrese el id del producto:\n1:Pizza Americana\n2:Pizza Española\n3:Pizza Latina');
    let c=prompt('Ingrese la cantidad')
    agregarCarrito(productId,c)
    rpt=prompt('Desea continuar?: si=cualquier tecla no=0')
    if(rpt==0){
        calcularTotal()
    }
}