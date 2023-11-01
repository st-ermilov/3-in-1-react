type typeDiscount = {
    fruit: number,
    vegetables: number
}

type typeProduct = {
    price: number,
    name: string,
    category: string
}

function calcTotal(product: typeProduct[], discount: typeDiscount) {
    const totalWithoutDiscount = product.reduce((accum, item) => accum + item.price
        , 0)
    console.log(totalWithoutDiscount)
}

const discountPercentage: typeDiscount = {fruit: 10, vegetables: 20}
const products: typeProduct[] = [
    {price: 30, name: 'apple', category: 'fruit'},
    {price: 40, name: 'banana', category: 'fruit'},
    {price: 60, name: 'potato', category: 'vegetables'},
    {price: 50, name: 'cucumber', category: 'vegetables'},
    {price: 45, name: 'coconut', category: 'fruit'},
]

const result = calcTotal(products, discountPercentage)
console.log(result)