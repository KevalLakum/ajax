// promise

// fetch("https://dummyjson.com/products")
// .then((res)=>res.json())
// .then((data)=>console.log(data))


// async

let getProducts=async() => {
    let res = await fetch("https://dummyjson.com/products");
    let products = await res.json();
    console.log(products);
}
getProducts();

console.log("github completed")