const express = require('express');
require('dotenv').config();
const axios = require('axios');

const router = express.Router();

// GETTING LIST OF CITIES FROM SEARCH INPUT
router.post('/cities/', async (req, res) => {
    try{
        const cities = await axios({
            "method": "GET",
            "url": 'https://developers.zomato.com/api/v2.1/cities',
            "headers":  {
                "user-key": process.env.ZOMATO_API_KEY
            },
            "params": {
                "q": req.body.query
            } 
        });

        res.json(cities.data);
    }catch(err){
        console.log(err);
    }
});

// GETTING LOCATION DETAILS - BEST RESTAURANTS LIST
router.post('/location-details/', async (req, res) => {
    try{
        const locationDetails = await axios({
            "method": "GET",
            "url": 'https://developers.zomato.com/api/v2.1/location_details',
            "headers": {
                "user-key": process.env.ZOMATO_API_KEY
            },
            "params": {
                "entity_id": req.body.id,
                "entity_type": "city"
            }
        });

        res.json(locationDetails.data);
    }catch(err){
        console.log(err)
    }
})


// GETTING LIST OF AVAILABLE COLLECTION 0F RESTAURANTS
router.post('/collections/', async (req, res) => {
    try{
        const collections = await axios({
            "method": "GET",
            "url": 'https://developers.zomato.com/api/v2.1/collections',
            "headers": {
                "user-key": process.env.ZOMATO_API_KEY
            },
            "params": {
                "city_id": req.body.id,
            }
        });

        if(collections.data.collections){
            collections.data.collections.forEach(item => item.collection["city_id"] = req.body.id)
        }

        res.json(collections.data);
    }catch(err){
        console.log(err)
    }
});


// GETTING LIST OF RESTAURANTS IN COLLECTION
router.post('/collection-restaurants/', async (req, res) => {
    try{
        const collections = await axios({
            "method": "GET",
            "url": 'https://developers.zomato.com/api/v2.1/collections',
            "headers": {
                "user-key": process.env.ZOMATO_API_KEY
            },
            "params": {
                "city_id": req.body.cityId,
            }
        });

        const collectionRestaurants = await axios({
            "method": "GET",
            "url": 'https://developers.zomato.com/api/v2.1/search',
            "headers": {
                "user-key": process.env.ZOMATO_API_KEY
            },
            "params": {
                "entity_id": req.body.cityId,
                "entity_type": "city",
                "collection_id": req.body.collectionId
            }
        });

        const selectedCollection = collections.data.collections.filter(item => item.collection.collection_id == req.body.collectionId)

        const response = {
            collection: selectedCollection[0].collection,
            restaurants: collectionRestaurants.data.restaurants
        }

        res.json(response);
    }catch(err){
        console.log(err)
    }
});

// GETTING RESTAURANT'S DETAIL INFO
router.post('/restaurant-details/', async (req, res) => {
    try{
        const restaurantDetails = await axios({
            "method": "GET",
            "url": 'https://developers.zomato.com/api/v2.1/restaurant',
            "headers": {
                "user-key": process.env.ZOMATO_API_KEY
            },
            "params": {
                "res_id": req.body.id,
            }
        });

        res.json(restaurantDetails.data);
    }catch(err){
        console.log(err)
    }
});

// GETTING LIST OF CUSTOMER'S REVIEWS
router.post('/customers-reviews/', async (req, res) => {
    try{
        const customersReviews = await axios({
            "method": "GET",
            "url": 'https://developers.zomato.com/api/v2.1/reviews',
            "headers": {
                "user-key": process.env.ZOMATO_API_KEY
            },
            "params": {
                "res_id": req.body.id,
            }
        });

        res.json(customersReviews.data);
    }catch(err){
        console.log(err)
    }
});

module.exports = router;