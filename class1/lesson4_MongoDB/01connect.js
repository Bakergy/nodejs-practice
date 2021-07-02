//npm install mongo
//npm install mongoose
import mongoose from 'mongoose';
const uri = "mongodb+srv://admin:w2KGU8WfHAmrzt5n@bakergycluster.2t1dj.mongodb.net/Bakergy?retryWrites=true&w=majority";
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
const dbCon = mongoose.connection;

dbCon.on('error', (err) => console.log(err.stack))
dbCon.once('open', () => { console.log("Database Connected."); });

export {
  dbCon
};
