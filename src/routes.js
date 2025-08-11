const express = require('express');

const router = express.Router();

const {pool,poolConnect} = require('./config/database');

router.get('/users',async (req,res) => {
  try{
    await poolConnect;
    const result = await pool.request().query('SELECT * FROM Users');
    res.status(200).json(result.recordset);
  }catch(error){
    console.error('Error al obtener usuarios:',error);
    res.status(500).json({message: "no se ha logrado obtener los usuarios."});
  }
}
);

module.exports = router;