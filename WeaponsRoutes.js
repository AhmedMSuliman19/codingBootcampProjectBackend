// Import express into the file
const express = require('express');
const router = express.Router();
const WeaponsModel = require('../models/WeaponsModel');


// POST route for creating product
router.post(
    '/',
    (req, res)=>{
        // Capture the form data
        const formData = {
            name: req.body.name,
            type: req.body.type,
            image: req.body.image
        }

        // Instantiate the ProductsModel
        const newWeaponsModel = WeaponsModel(formData);
        newWeaponsModel.save();

        res.send('Weapon has been saved!');
    }
);

// A POST route for updating weapons
router.post(
    '/update',
    (req, res) => {
        const formData = {
            name: req.body.qty,
            type: req.body.type,
            image: req.body.image,
            _id: req.body._id
        };

        WeaponsModel
        .findOneAndUpdate(
            { _id: formData._id }, // search criteria
            { name: formData.name, type: formData.type, image: formData.image }, // the keys & values to update
            {}, // options (if any)
            (err, document) => {

                if(err) {
                    console.log(err);
                } else {
                    res.json(
                        {
                            message: 'Weapon updated',
                            document: document
                        }
                    )
                }
            }
        )
    }
);

// A get route for fetching data from the 'weapons' collection
router.get(
    '/',
    (req, res) => {
        WeaponsModel.find()
        .then(
            (results) => {
                res.json(results);
            }
        )
        .catch(
           (e) => {
               console.log('error occured', e)
           } 
        );
    }
);

// Export the router
module.exports = router;