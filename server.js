// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const YourModel = require('./Usermodel.js'); // Update the model name accordingly
// const route = require('./route'); // Import the router

// const app = express();
// app.use(express.json());
// app.use(cors());

// const config = {
//     mongoURI: "mongodb+srv://Sid:Hello@cluster0.vxyjgk1.mongodb.net/Web_List?retryWrites=true&w=majority",
//     port: 3000
// };

// // Connect to MongoDB
// mongoose.connect("mongodb+srv://Sid:Hello@cluster0.vxyjgk1.mongodb.net/Web_list?retryWrites=true&w=majority", {dbName:"Web_List"})
//     .then(() => {
//         console.log("Connected to MongoDB");

//         // Routes
//         app.get('/entity', (req, res) => {
//             YourModel.find({})
//                 .then((data) => res.json(data))
//                 .catch((err) => {
//                     console.error("Error fetching data from database:", err);
//                     res.status(500).json({ error: "Internal Server Error" });
//                 });
//         });

//         app.use('/', route); // Use the router

//         // Start the server
//         app.listen(config.port, () => {
//             console.log(`Server is running on port ${config.port}`);
//         });
//     })
//     .catch((err) => {
//         console.error("Error connecting to MongoDB", err);
//     });


const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const YourModel = require('./Usermodel.js'); // Update the model path accordingly

const app = express();
app.use(express.json());
app.use(cors());

const config = {
    mongoURI: "mongodb+srv://Sid:Hello@cluster0.vxyjgk1.mongodb.net/?retryWrites=true&w=majority",
    port: 3000
};

// Connect to MongoDB
mongoose.connect(config.mongoURI, {dbName: "Web_list" })
    .then(() => {
        console.log("Connected to MongoDB");

        // Routes
        app.get('/entities', async (req, res) => {
            try {
                const data = await YourModel.find({});
                res.json(data);
            } catch (err) {
                console.error("Error fetching data from database:", err);
                res.status(500).json({ error: "Internal Server Error" });
            }
        });

        // Start the server
        app.listen(config.port, () => {
            console.log(`Server is running on port ${config.port}`);
        });
    })
    .catch((err) => {
        console.error("Error connecting to MongoDB", err);
    });
