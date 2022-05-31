const db = require("../config/database");

const DatabaseController = {
    create(req,res){
    let sql ='CREATE DATABASE expressDB';
    db.query(sql,(err,result)=>{
      if(err)throw err;
      console.log(result);
      res.send('Database created...')
    })
  }
}

module.exports = DatabaseController;