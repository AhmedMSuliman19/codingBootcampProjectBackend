// Import express into the file
const express = require('express');
const router = express.Router();
const MapsModel = require('../models/MapsModel');


// POST route for add maps
router.post(
    '/',
    (req, res)=>{
        const formData = {
            name: req.body.name,
            size: req.body.size,
            image: req.body.image
        }
        const newMapsModel = MapsModel(formData);
        newMapsModel.save();

        res.send('Map has been saved!');
    }
);

// A get route for fetching data from the 'maps' collection
router.get(
    '/',
    (req, res) => {
        MapsModel.find()
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

// A POST route for updating maps
router.post(
    '/update',
    (req, res) => {
        const formData = {
            name: req.body.qty,
            size: req.body.size,
            image: req.body.image,
            _id: req.body._id
        };

        MapsModel
        .findOneAndUpdate(
            { _id: formData._id }, // search criteria
            { name: formData.name, size: formData.size, image: formData.image }, // the keys & values to update
            {}, // options (if any)
            (err, document) => {

                if(err) {
                    console.log(err);
                } else {
                    res.json(
                        {
                            message: 'Map updated',
                            document: document
                        }
                    )
                }
            }
        )
    }
);

// Export the router
module.exports = router;