const db = require("../config/database");

const UsersController = {
    
createTable(req,res){
    let sql = 'CREATE TABLE expressDB.users(id INT AUTO_INCREMENT,first_name VARCHAR(50),last_name VARCHAR(50),phone INT,PRIMARY KEY(id))'
      db.query(sql,(err,result)=> {
        if(err) throw err;
        console.log(result);
        res.send('Posts table users created...')
      })
    },
createUser(req,res){
        let post = {first_name:req.body.first_name, last_name:req.body.last_name, phone:req.body.phone};
        let sql = 'INSERT INTO expressDB.users SET ?'
        db.query(sql,post,(err,result)=> {
          if(err) throw err;
          console.log(result);
          res.send('Post in users added...')
        })
      },
update(req,res){
    let newTitle = req.body.first_name;
    let sql = `UPDATE expressDB.users SET first_name = '${newTitle}' WHERE id = ${req.params.id}`;
    db.query(sql, (err,result)=> {
      if(err) throw err;
      res.send('Post user updated...')
    })
  },
getAll(req,res){
    let sql = 'SELECT * FROM expressDB.users';
    db.query(sql,(err,result)=> {
      if(err) throw err;
      res.send(result)
    })
  },
getById(req,res){
    let sql = `SELECT * FROM expressDB.users WHERE id = ${req.params.id}`;
    db.query(sql,(err,result)=> {
      if(err) throw err;
      res.send(result)
    })
  },
beforeDelete(req,res){
    let sql = `DROP TABLE expressDB.orders;`;
    db.query(sql,(err,result)=> {
      if(err) throw err;
      res.send(result)
    })
  },
delete(req,res){
    let sql = `DELETE FROM expressDB.users WHERE id = ${req.params.id}`;
    db.query(sql, (err,result)=> {
      if(err) throw err;
      res.send('User deleted')
    })
  }
}

module.exports = UsersController;