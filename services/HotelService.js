var Hotels = require('../model/Hotel')



async function list(req, res, next) {

   await Hotels.find().then((data,err) => {
     if (err) {
       res.status(503).json({ message: err.message})
     }else {
       res.status(200).json({ data})
   
     }
   
   
   })
   }



const create = (req, res, next) => {
    const { name, fabrication_date,nbr_room} = req.body; 
      
    new Hotels({
    name:name,
    fabrication_date:fabrication_date,
    nbr_room:nbr_room
    }).save()
      .then((err,data)=>
      {
        if(err){console.log("errrrr"+err)}
        console.log(data)
      }
      )
    res.json(`Hotel added! Nom: ${name}`);
  };



  
//update un hotel

async function updateHotel(req, res, next) {
    Hotels.findByIdAndUpdate(req.params.id)
    .then((data,err)=>
      { 
        if(err){
          res.status(500).json(err)
        }
        res.status(200).json({message: "updated "})
      }
      )
    
  }
  
  
  
  
  async function deleteHotel(req, res, next) {
    await Hotels.findByIdAndDelete(req.params.id)
    .then((data,err)=>
      { 
        if(err){
          res.status(500).json(err)
      }
    
      res.status(200).json("aaaaaaaaaaaaa")
    }
      )
    
  }

  
  async function searchhotels(req, res, next) {
    await Hotels.find({ nbr_room: { $gte: 10, $lte: 100 } })
    .then((hotels) => {
        res.status(200).json(hotels); 

    })
    .catch((err) => {
        res.status(500).json(err)

    });
  }




  module.exports = {list, create,deleteHotel, updateHotel ,searchhotels};
