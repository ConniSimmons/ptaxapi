const DBNAME = 'ptax-api';
module.exports= {
   PORT: 5555,
   DBNAME,
   APPNAME: 'Pink Tax',
   DBURI: `mongodb+srv://${process.env.DBUSERNAME}:${process.env.DBPASSWORD}@cluster0-mznto.mongodb.net/${DBNAME}?retryWrites=true&w=majority`
  
}
