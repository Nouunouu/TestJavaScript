const express = require('express');
const router = express.Router();
const {list, create ,deleteHotel ,updateHotel,searchhotels} = require('../services/HotelService'); // Assurez-vous que le chemin est correct




router.get('/list', list);  // Route GET pour afficher la liste des utilisateurs
router.post('/add', create);  // Route POST pour ajouter un utilisateur avec un paramètre "age"
// routes.js
// routes.js
router.put('/updateHotel/:id', updateHotel);  // Route DELETE pour supprimer un utilisateur par son nom
router.delete('/deleteHotel/:id', deleteHotel);  // Route DELETE pour supprimer un utilisateur par son nom
router.get('/search', searchhotels);  // Route DELETE pour supprimer un utilisateur par son nom


module.exports = router;  // Exporter le routeur
