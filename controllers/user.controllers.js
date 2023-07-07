const uuidv4 = require('uuidv4');
const TokenGenerator = require('uuid-token-generator');
const b2a = require('b2a');
const db = require('../models')
// Mock USER schema
const USERS = db.users

// Helper function to find a user by their username
function findUserByUsername(username) {
  return USERS.find(user => user.username === username);
}

// Helper function to find a user by their access token
function findUserByAccessToken(accessToken) {
  return USERS.find(user => user.accessToken === accessToken);
}

// Helper function to generate a token
function generateToken() {
  const token = new TokenGenerator(256, TokenGenerator.BASE62).generate();
  return b2a.encode(token);
}

// Helper function to create a user object
function createUser(username, password) {
  const id = uuidv4.uuid();
  const token = generateToken();
  const user = {
    id,
    username,
    password,
    accessToken: token,
    isLoggedIn: false
  };
  USERS.push(user);
  return user;
}

// Controller method for user sign up
function signUp(req, res) {
  const { username, password } = req.body;

  // Check if the username is already taken
  if (findUserByUsername(username)) {
    return res.status(400).json({ error: 'Username already taken' });
  }

  // Create the user and store it in the schema
  const user = createUser(username, password);

  // Return the created user object
  res.status(201).json({ user });
}

// Controller method for user login
function login(req, res) {
  const { username, password } = req.body;

  // Find the user by username
  const user = findUserByUsername(username);

  // Check if the user exists and the password matches
  if (!user || user.password !== password) {
    return res.status(401).json({ error: 'Invalid username or password' });
  }

  // Generate a new access token for the user
  const newAccessToken = generateToken();

  // Update the user's access token and login status
  user.accessToken = newAccessToken;
  user.isLoggedIn = true;

  // Return the updated user object
  res.json({ user });
}

// Controller method for user logout
function logout(req, res) {
  const { accessToken } = req.body;

  // Find the user by access token
  const user = findUserByAccessToken(accessToken);

  // Check if the user exists and is logged in
  if (!user || !user.isLoggedIn) {
    return res.status(401).json({ error: 'Invalid access token' });
  }

  // Update the user's login status
  user.isLoggedIn = false;

  res.sendStatus(200);
}
function getCouponCode(req, res) {
    // Check if the user is logged in
    const { accessToken } = req.body;
    const user = findUserByAccessToken(accessToken);
    if (!user || !user.isLoggedIn) {
      return res.status(401).json({ error: 'Invalid access token' });
    }
  
    // Generate a coupon code
    const couponCode = uuidv4.uuid();
  
    // Return the coupon code
    res.json({ couponCode });
  }
  
  // Controller method for booking a show
  function bookShow(req, res) {
    // Check if the user is logged in
    const { accessToken } = req.body;
    const user = findUserByAccessToken(accessToken);
    if (!user || !user.isLoggedIn) {
      return res.status(401).json({ error: 'Invalid access token' });
    }
  
    // Process the booking logic
    // ...
  
    // Return the booking confirmation
    res.json({ message: 'Show booked successfully' });
  }
  



module.exports = {
    signUp,
    login,
    logout,
    getCouponCode,
    bookShow
  };
  