const db = require("../config/database");

const ProductscategoriesController = {
createTable(req,res){
    let sql = 'CREATE TABLE expressDB.productscategories(id INT AUTO_INCREMENT,product_id INT,category_id INT,PRIMARY KEY(id),FOREIGN KEY(product_id) REFERENCES expressDB.products(id),FOREIGN KEY(category_id) REFERENCES expressDB.categories(id))'
        db.query(sql,(err,result)=> {
          if(err) throw err;
          console.log(result);
          res.send('Posts table categories created...')
        })
    },
createProductscategories(req,res){
    let post = {product_id:req.body.product_id, category_id:req.body.category_id};
    let sql = 'INSERT INTO expressDB.productscategories SET ?'
    db.query(sql,post,(err,result)=> {
      if(err) throw err;
      console.log(result);
      res.send('Post in productscategories added...')
    })
  },
get(req,res){
    let sql = 'SELECT name_product, name_category FROM expressDB.productscategories INNER JOIN expressDB.categories ON categories.id = productscategories.category_id INNER JOIN expressDB.products ON products.id = productscategories.product_id';
    db.query(sql,(err,result)=> {
      if(err) throw err;
      res.send(result)
    })
  }
}

module.exports = ProductscategoriesController;