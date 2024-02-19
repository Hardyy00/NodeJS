const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({

    items: [],
    user: {

        _id: {
            type: mongoose.Types.ObjectId;
        }
    }
})