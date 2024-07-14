import mongoose from "mongoose"

const Mongo = async () => {
    try {
       const mongooseDB = await mongoose.connect(process.env.MONGO_URL) 
       console.log(`mongoose connection Successfully on ${mongooseDB.connection.host}`)
    } catch (error) {
       console.log(`error ${error.message}`) 
    }
}

export default Mongo