const axios = require('axios');
const Joi = require('Joi'); 
const bcrypt = require('bcryptjs'); 
const jwt = require('jsonwebtoken'); 
const key = require('../_secrets/keys'); 
const dbConfig = require('../knexfile'); 
const knex = require('knex'); 

const db = knex(dbConfig.development); 

const { authenticate } = require('./middlewares');

module.exports = server => {
  server.post('/api/register', register);
  server.post('/api/login', login);
  server.get('/api/jokes', authenticate, getJokes);
};



function generateToken(username){
  
  const secret = key.jwtKey;
  
  const payload = {
    username, 
  }
  
  const options = {
    expiresIn: '5hr', 
    jwtid: '340952349066'
  }

  return jwt.sign(payload, secret, options); 
}

function validateRequest(userInput){
  const schema = {
    username: Joi.string().min(6).alphanum().max(30).required(),
    password: Joi.string().min(8).required()
  }
  return Joi.validate(userInput, schema)
}

function register(req, res) {
  const creds = req.body; 

  const validated = validateRequest(creds)
  if(validated.error){
    res.status(404).json(validated.error.details)
    return; 
  }

  const hash = bcrypt.hashSync(creds.password, 12); 
  creds.password = hash;

  db('users')
    .insert(creds)
    .then(id => {
      const token = generateToken(creds.username); 
      res.status(201).json({id, token}); 
  }).catch(err => {
    res.status(500).json({error: "Could not update data in the database"})
  })
}


function login(req, res) {
  // implement user login
}

function getJokes(req, res) {
  axios
    .get(
      'https://08ad1pao69.execute-api.us-east-1.amazonaws.com/dev/random_ten'
    )
    .then(response => {
      res.status(200).json(response.data);
    })
    .catch(err => {
      res.status(500).json({ message: 'Error Fetching Jokes', error: err });
    });
}
