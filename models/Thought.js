const { Schema, model } = require('mongoose');

const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            //the character limits
        },
        createdAt: {
            //date
        }

    }
)