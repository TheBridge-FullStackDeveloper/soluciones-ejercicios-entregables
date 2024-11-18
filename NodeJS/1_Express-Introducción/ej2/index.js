const express = require("express");
const app = express()
const PORT = 3000

// Ruta: Raíz del sitio (‘/’) ,Metodo: get, Acción: Mostrar un mensaje de bienvenida
app.get('/', (req, res) => {
  res.send("Welcome");
});
  
// Ruta: Productos, Método: get, Acción: Mostrar un mensaje que diga: listado de productos
app.get('/productos', (req, res) => {
    res.send("Listado de productos");
  });

// Ruta: Productos, Método: post, Acción: Mostrar un mensaje que diga: crear un producto
app.post('/productos', (req, res) => {
    res.send("Crear un producto");
  });

// Ruta: Productos, Método: put, Acción: Mostrar un mensaje que diga: actualizar un producto
app.put('/productos', (req, res) => {
    res.send("Actualizar un producto");
  });

// Ruta: Productos, Método: delete, Acción: Mostrar un mensaje que diga: borrar un producto
app.delete('/productos', (req, res) => {
    res.send("Borrar un producto");
  });

// Ruta: Usuarios, Metodo: get, Acción: Mostrar un mensaje que diga: listado de usuarios
app.get('/usuarios', (req, res) => {
    res.send("listado de usuarios");
  });

// Ruta: Usuarios, Método: post, Acción: Mostrar un mensaje que diga: crear un usuario
app.post('/usuarios', (req, res) => {
    res.send("crear un usuario");
  });

// Ruta: Usuarios, Metodo: put, Acción: Mostrar un mensaje que diga: actualizar un usuario
app.put('/usuarios', (req, res) => {
    res.send("actualizar un usuario");
  });

// Ruta: Usuarios, Metodo: delete, Acción: Mostrar un mensaje que diga: borrar un usuario
app.delete('/usuarios', (req, res) => {
    res.send("borrar un usuario");
  });

// Utilizar Postman para probar todos los llamados ✅😏


app.listen(PORT, () => {
    console.log("Servidor iniciado en el puerto "+ PORT);
});


