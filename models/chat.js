import mongoose from 'mongoose';

const chatSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    history: [
        {
            role: {
                type: String,
                enum: ["user","model"],
                required: true,
            },
            parts: [
                {
                  text: {
                    type: String,
                    required: true,
                  },  
                },
            ],
            img: {
                type: String,
                required: false,
            },
        },
    ]
},
{ timestamps: true}
);

export default mongoose.model.chat || mongoose.model("chat",chatSchema); // export our model , before it checking if its present if not create it.