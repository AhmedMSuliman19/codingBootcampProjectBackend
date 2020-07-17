// Import express into the file
const express = require('express');
const router = express.Router();
const VehiclesModel = require('../models/VehiclesModel');


// POST route for adding maps
router.post(
    '/',
    (req, res)=>{
        const formData = {
            name: req.body.name,
            type: req.body.type,
            image: req.body.image
        }

        const newVehiclesModel = VehiclesModel(formData);
        newVehiclesModel.save();

        res.send('Vehicle has been saved!');
    }
);

// A POST route for updating vehicles
router.post(
    '/update',
    (req, res) => {
        const formData = {
            name: req.body.qty,
            type: req.body.type,
            image: req.body.image,
            _id: req.body._id
        };

        VehiclesModel
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
                            message: 'Vehicle updated',
                            document: document
                        }
                    )
                }
            }
        )
    }
);

// A get route for fetching data from the 'vehicles' collection
router.get(
    '/',
    (req, res) => {
        VehiclesModel.find()
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