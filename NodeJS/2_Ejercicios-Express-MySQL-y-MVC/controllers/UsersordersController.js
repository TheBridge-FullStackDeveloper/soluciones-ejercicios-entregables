const db = require("../config/database");

const UsersordersController = {
get(req,res){
    let sql = 'SELECT first_name, fecha FROM expressDB.users INNER JOIN expressDB.orders ON users.id = orders.user_id';
    db.query(sql,(err,result)=> {
      if(err) throw err;
      res.send(result)
    })
  }
}

module.exports = UsersordersController;