const db = require("../db/connection");
const jwt = require('jsonwebtoken');
const router = require('express').Router();
const bcrypt = require('bcryptjs');
const async = require("hbs/lib/async");

const signup = (userinfo) => {

  console.log(userinfo);
  
  //Distructuring below looks cleaner
  //Signup form
  const {
    firstname,
    lastname,
    email,
    address,
    city,
    state,
    zipcode,
    username,
    password,
    passwordConfirm,
  } = userinfo;
  //checking if there is someone else with the same email already in the users table.
  db.query("SELECT email FROM signup  WHERE email = ? ",
    [email], async (error, results) => {
      if (error) {
        console.log(error);
      }
      if (results.length > 0) {
        return {
          message: "Email is already in use",
        };
      } else if (password !== passwordConfirm) {
        return {
          message: "Passwords do not match",
        };
      }
      let hashedPassword = await bcrypt.hash(password, 8);
      console.log(hashedPassword);
      //Inserting form information into the database signup table

      db.query('INSERT INTO signup SET ?',{firstname: firstname,
        lastname: lastname, email: email, address: address, city: city,
        state: state,
        zipcode: zipcode,
        username: username,
       password: hashedPassword},( error, results)=>{

        if(error){
            console.log(error);
        }else{
            return {
                message: "You have succesfull Signed Up"
            };
       }
       
       //inserting information into users table
        db.query('INSERT INTO users SET ?',{firstname: firstname,
         lastname: lastname, email: email, username: username,
        password: hashedPassword}, (error, results)=>{
            if(error){
                console.log(error);

                }else {
                    return {
                        message: "Login Success"
                    }
                }
            }
        )}
  )});
};
module.exports = {signup}