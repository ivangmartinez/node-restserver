const express = require('express');

/**
 * 
 * @param {express.Request} req 
 * @param {express.Response} res 
 */
const getAllUsers = (req, res)=> {
    const users =[
        {
            id:1,
            name:"ivan"
        },
        {
            id:2,
            name:"diego"
        },
        {
            id:3,
            name:"moira"
        },
    ]
  res.json(users);
}


/**
 * 
 * @param {express.Request} req 
 * @param {express.Response} res 
 */
const createUser = (req, res)=> {
    const user = req.body;
    user.id = 4;
    const result = {
        message:"User created",
        user
    }
  res.status(201).json(result); 
}


/**
 * 
 * @param {express.Request} req 
 * @param {express.Response} res 
 */
const updateUser = (req, res)=> {
    const user = req.body;
    const {id} = req.params;
    user.id = id;
    const result = {
        message:"User updated",
        user
    }
  res.json(result);
}


/**
 * 
 * @param {express.Request} req 
 * @param {express.Response} res 
 */
const upadatePartialUser = (req, res)=> {
    const user = req.body;
    const {id} = req.params;
    user.id = id;
    const result = {
        message:"User updated with patch",
        user
    }
  res.json(result);
}


/**
 * 
 * @param {express.Request} req 
 * @param {express.Response} res 
 */
const deleteUser = (req, res)=> {
    const {id} = req.params;
    const result = {
        message:`User with id: ${id} deleted`
    }
  res.status(201).json(result);
}

module.exports = {
    getAllUsers,
    createUser,
    updateUser,
    upadatePartialUser,
    deleteUser
}

