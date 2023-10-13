const mongoose = require('mongoose');
const dbUrl = "mongodb+srv://firstmongodb:3333@cluster0.sh4pt8z.mongodb.net/?retryWrites=true&w=majority"

const connectionParameters = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};
mongoose.connect(dbUrl, connectionParameters).then(() => {
    console.info("Connection does successfully.");
}).catch((e) => {
    console.log("Error: ", e);
});



