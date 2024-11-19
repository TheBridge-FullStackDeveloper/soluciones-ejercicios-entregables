const db = require("../config/database");

const CategoriesController = {
createTable(req,res){
    let sql = 'CREATE TABLE expressDB.categories(id INT AUTO_INCREMENT,name_category VARCHAR(50),_description VARCHAR(50),PRIMARY KEY(id))'
        db.query(sql,(err,result)=> {
          if(err) throw err;
          console.log(result);
          res.send('Posts table categories created...')
        })
    },
createCategory(req,res){
    let post = {name_category:req.body.name_category, _description:req.body._description};
    let sql = 'INSERT INTO expressDB.categories SET ?'
    db.query(sql,post,(err,result)=> {
      if(err) throw err;
      console.log(result);
      res.send('Post in categories added...')
    })
  },
update(req,res){
    let newTitle = req.body._description;
    let sql = `UPDATE expressDB.categories SET _description = '${newTitle}' WHERE id = ${req.params.id}`;
    db.query(sql, (err,result)=> {
      if(err) throw err;
      res.send('Post category updated...')
    })
  },
getAll(req,res){
    let sql = 'SELECT * FROM expressDB.categories';
    db.query(sql,(err,result)=> {
      if(err) throw err;
      res.send(result)
    })
  },
getById(req,res){
    let sql = `SELECT * FROM expressDB.categories WHERE id = ${req.params.id}`;
    db.query(sql,(err,result)=> {
      if(err) throw err;
      res.send(result)
    })
  }
}

module.exports = CategoriesController;