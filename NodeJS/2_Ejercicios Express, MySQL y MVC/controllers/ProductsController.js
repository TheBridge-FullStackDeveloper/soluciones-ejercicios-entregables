const db = require("../config/database");

const ProductsController = {
createTable(req,res){
    let sql = 'CREATE TABLE expressDB.products(id INT AUTO_INCREMENT,name_product VARCHAR(50),price INT,PRIMARY KEY(id))'
      db.query(sql,(err,result)=> {
        if(err) throw err;
        console.log(result);
        res.send('Posts table products created...')
      })
    },
createProduct(req,res){
    let post = {name_product:req.body.name_product, price:req.body.price};
    let sql = 'INSERT INTO expressDB.products SET ?'
    db.query(sql,post,(err,result)=> {
      if(err) throw err;
      console.log(result);
      res.send('Post in products added...')
    })
  },
update(req,res){
    let newTitle = req.body.name_product;
    let sql = `UPDATE expressDB.products SET name_product = '${newTitle}' WHERE id = ${req.params.id}`;
    db.query(sql, (err,result)=> {
      if(err) throw err;
      res.send('Post product updated...')
    })
  },
getAll(req,res){
    let sql = 'SELECT * FROM expressDB.products';
    db.query(sql,(err,result)=> {
      if(err) throw err;
      res.send(result)
    })
  },
getById(req,res){
    let sql = `SELECT * FROM expressDB.products WHERE id = ${req.params.id}`;
    db.query(sql,(err,result)=> {
      if(err) throw err;
      res.send(result)
    })
  },
getOrder(req,res){
    let sql = `SELECT * FROM expressDB.products order by id desc`;
    db.query(sql,(err,result)=> {
      if(err) throw err;
      res.send(result)
    })
  },
getByName(req,res){
    let sql = `SELECT * FROM expressDB.products WHERE name_product = '${req.params.name}'`;
    db.query(sql,(err,result)=> {
      if(err) throw err;
      res.send(result)
    })
  },
delete(req,res){
    let sql = `DELETE FROM expressDB.productscategories WHERE product_id = 1`;
    let lqs = `DELETE FROM expressDB.products WHERE id = ${req.params.id}`;
    db.query(sql, (err,result)=> {
      if(err) throw err;
      res.send('Product deleted 1 step')
    })
    db.query(lqs, (err,result)=> {
        if(err) throw err;
        res.send('Product deleted 2 step')
    })
  }
}

module.exports = ProductsController;