const mongodb = require('mongodb');
const getDb = require('../util/database').getDb ;

class User {
  constructor(name , email){
    this.name = name;
    this.email = email 
  }

  save(){
      let db = getDb();
      return db.collection('users').insertOne(this)
      .then(user=>{
        return user
      })
      .catch(err=>{
        console.log(err)
      })
  }

  static findById(userId){
    let db = getDb();
    return db.collection('users').findOne({_id: new mongodb.ObjectId(userId)})
    .then(user=>{
      return user
    })
    .catch(err=>{
      console.log(err)
    })
  }
}

module.exports = User
