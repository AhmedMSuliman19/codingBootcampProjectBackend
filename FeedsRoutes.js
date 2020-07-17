// Import express into the file
const express = require('express');
const router = express.Router();
const FeedsModel = require('../models/FeedsModel');

// A POST route for saving data into the 'feeds' collection
router.post(
    '/',
    (req, res) => {
        
        // Read the data
        const formData = {
           text: req.body.text,
           username: req.body.username,
           hashtags: req.body.hashtags,
           image: req.body.image 
        };

        // Save the data to database (feeds collection)
        const newFeedModel = new FeedsModel(formData);
        newFeedModel.save();
        
        res.send('Your POST has been recieved.')
    }   
);

router.post(
    '/likes',
    (req, res) => {

        // Read the data
        const formData = {
           username: req.body.username
        };

        FeedsModel.find({username: formData.username})
        .then(
            (feed)=> {
                let id = feed[0]["_id"];
                if(!feed[0]["likes"].includes(id)){
                    let newLikesArray = feed[0]["likes"];
                    newLikesArray.push(id);
                    FeedsModel.findOneAndUpdate({username: feed[0]["username"]}, {likes: newLikesArray}, {upsert: true}, function(err, doc) {
                        if (err) return res.send(500, {error: err});
                        return res.send('Your like has been recieved.');
                    });
                }
                else{
                    res.send('User already liked this post.');
                }
            }
        )
        .catch(
            (e) => {
                console.log('error occured', e)
            } 
         );
        
    }   
);

// A get route for fetching data from the 'feeds' collection
router.get(
    '/',
    (req, res) => {
        FeedsModel.find()
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