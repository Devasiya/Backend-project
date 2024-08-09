//let q = "SHOW TABLES";
// try{
//   connection.query(q,(err,result) =>{
//       if(err) throw err;
//       console.log(result);
//       console.log(result.length);
//   })
//   } catch(err){
//       console.log(err);
//   }


//INSERTING NEW DATA

// let q = "INSERT INTO user (id,username,email,password) VALUES (?,?,?,?)";
// let user = ["123","123_newuser","abc@gmail.com","abc"];
// try{
// connection.query(q,user,(err,result) =>{
//     if(err) throw err;
//     console.log(result);
// })
// } catch(err){
//     console.log(err);
// }
// connection.end();

// let q = "INSERT INTO user (id,username,email,password) VALUES ?";
// let users = [["123b","123_newuserb","abc@gmail.comb","abcb"], ["123c","123_newuserc","abc@gmail.comc","abcc"]];
// try{
// connection.query(q,[users],(err,result) =>{
//     if(err) throw err;
//     console.log(result);
// })
// } catch(err){
//     console.log(err);
// }

// let getRandomUser = () => {
  //   return {
  //     id: faker.string.uuid(),
  //     username: faker.internet.userName(),
  //     email: faker.internet.email(),
  //     password: faker.internet.password(),
  //   };
  // }
  