var producto = {
    name: "manzana",
    price: 3,
    IGV: 0.18
};
function total() {
    return producto.price + (producto.price * producto.IGV);
}
console.log("Producto\n=========" +
    "\nNombre: " + producto.name +
    "\nPrecio: " + producto.price +
    "\nIGV: " + producto.IGV +
    "\n----------------------" +
    "\nTotal: " + total());
