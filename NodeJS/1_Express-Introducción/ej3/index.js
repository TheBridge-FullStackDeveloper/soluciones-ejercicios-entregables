// Importar el módulo Express
const express = require("express");
const app = express();
const PORT = 3000;
// Array de productos
const products = [
  { id: 1, name: "Harry Potter Mug", price: 300 },
  { id: 2, name: "FIFA 22 PS5", price: 1000 },
  { id: 3, name: "Goku Super Saiyan Figure", price: 100 },
  { id: 4, name: "Zelda Breath of the Wild", price: 200 },
  { id: 5, name: "Valorant Skin", price: 120 },
  { id: 6, name: "Star Wars Mug", price: 220 },
];

// Middleware para parsear el cuerpo de las solicitudes como JSON
app.use(express.json());

// Ruta para obtener todos los productos
app.get("/products", (req, res) => {
  res.send({ description: "products", items: products });
});

// Ruta para crear un nuevo producto
app.post("/products", (req, res) => {
  const newProduct = {
    id: products.length + 1,
    name: req.body.name,
    price: req.body.price,
  };

  // Comprobar si se proporcionaron el nombre y el precio
  if (!req.body.name || !req.body.price) {
    res.status(400).send({ msg: "Please fill all inputs" });
  } else {
    // Agregar el nuevo producto al array
    products.push(newProduct);
    res.status(201).send({ newProduct });
  }
});

// Ruta para actualizar un producto por su ID
app.put("/id/:id", (req, res) => {
  const found = products.some((product) => product.id == req.params.id);
  if (found) {
    products.forEach((product) => {
      if (product.id == req.params.id) {
        // Actualizar el nombre y el precio del producto si se proporcionan
        product.name = req.body.name ? req.body.name : product.name;
        product.price = req.body.price ? req.body.price : product.price;
        res.send(product);
      }
    });
  } else {
    res.status(404).send({ msg: `Product with ID ${req.params.id} not found` });
  }
});

// Ruta para eliminar un producto por su ID
app.delete("/id/:id", (req, res) => {
  const found = products.some((product) => product.id == req.params.id);
  if (found) {
    // Filtrar los productos y eliminar el producto con el ID especificado
    res.send(products.filter((product) => product.id != req.params.id));
  } else {
    res.status(404).send({ msg: `Product with ID ${req.params.id} not found` });
  }
});

// Ruta para obtener productos dentro de un rango de precios (valores fijos)
app.get("/products/filter/price/:price", (req, res) => {
  // Filtrar los productos por precio (valores fijos)
  const filteredProducts = products.filter(
    (product) => product.price == req.params.price
  );

  res.send({ results: filteredProducts });
});

// Ruta para obtener productos dentro de un rango de precios
app.get("/products/filter/price/all", (req, res) => {
  const minPrice = req.query.min || 0;
  const maxPrice = req.query.max || Infinity;

  // Filtrar los productos por precio
  const filteredProducts = products.filter(
    (product) => product.price >= minPrice && product.price <= maxPrice
  );

  res.send({ results: filteredProducts });
});

app.get("/products/filter/id/:id", (req, res) => {
  // Ruta GET para filtrar productos por ID
  const foundProduct = products.find((product) => product.id == req.params.id);
  // Utiliza el método "find()" para buscar un producto cuyo ID coincida con "productId"

  if (foundProduct) {
    res.send({ result: foundProduct });
    // Si se encuentra un producto, se envía el producto encontrado como respuesta
  } else {
    res.status(404).send({ msg: `Product with ID ${productId} not found` });
    // Si no se encuentra un producto, se envía un mensaje de error con el código de estado 404
  }
});

app.get("/products/filter/name/:name", (req, res) => {
  // Ruta GET para filtrar productos por nombre

  const productName = req.params.name;
  // Obtiene el valor del parámetro de ruta ":name" que representa el nombre del producto

  const foundProducts = products.filter(
    (product) => product.name.toLowerCase() === productName.toLowerCase()
  );
  // Utiliza el método "filter()" para filtrar los productos cuyo nombre coincida con "productName"
  // El uso de "toLowerCase()" permite hacer una comparación sin tener en cuenta mayúsculas o minúsculas

  if (foundProducts.length > 0) {
    res.send({ results: foundProducts });
    // Si se encuentran productos, se envían los productos encontrados como respuesta
  } else {
    res
      .status(404)
      .send({ msg: `Product with name "${productName}" not found` });
    // Si no se encuentran productos, se envía un mensaje de error con el código de estado 404
  }
});

// Iniciar el servidor en el puerto 8081
app.listen(PORT, () => {
  console.log("Server started on port " + PORT);
});
