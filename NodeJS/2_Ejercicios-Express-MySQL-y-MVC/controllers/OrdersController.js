const db = require("../config/database");

const OrdersController = {
createTable(req,res){
    let sql = 'CREATE TABLE expressDB.orders(id INT AUTO_INCREMENT,fecha date,user_id INT,PRIMARY KEY(id),FOREIGN KEY(user_id) REFERENCES expressDB.users(id) ON DELETE CASCADE)'
        db.query(sql,(err,result)=> {
          if(err) throw err;
          console.log(result);
          res.send('Posts table orders created...')
        })
    },
createOrder(req,res){
    let post = {fecha:req.body.fecha, user_id:req.body.user_id};
    let sql = 'INSERT INTO expressDB.orders SET ?'
    db.query(sql,post,(err,result)=> {
      if(err) throw err;
      console.log(result);
      res.send('Post in orders added...')
    })
  },
getAll(req,res){
    let sql = 'SELECT * FROM expressDB.orders';
    db.query(sql,(err,result)=> {
      if(err) throw err;
      res.send(result)
    })
  }
}

module.exports = OrdersController;