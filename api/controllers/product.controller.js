import Product from "../models/product.model.js";
import Select from "../models/select.model.js";


//create suplier
export const createproduct = async (req, res, next) => {
  

    const {  name, img,title,desc } = req.body;
  
    const newSuplier = new Product({
      name,
      title,
      desc,
      img,
      
     
      
  
    });
    try {
      const savedsup = await newSuplier.save();
      res.status(201).json(savedsup);
    } catch (error) {
      next(error);
    }
  };


   
  
export const getproduct = async (req, res, next) => {
    try {
      const suplier = await Product.find();
  
      if (suplier.length > 0) {
        res.json({ message: "suplier detail retrieved successfully", suplier});
      } 
    } catch (error) {
      console.log(error.message);
  
      next(error);
    }
  };




  
  //create select
export const createselect = async (req, res, next) => {
  

    const { currentuserId, name,img,title,desc,product } = req.body;
  
    const newSuplier = new Select({
      currentuserId,
      name,
      img,
      title,
      desc,
      product,
      

      
  
    });
    try {
      const savedsup = await newSuplier.save();
      res.status(201).json(savedsup);
    } catch (error) {
      next(error);
    }
  };

  //delete select
export const deletedata = async (req, res, next) => {

    try {
      await Select.findByIdAndDelete(req.params.suId);
      res.status(200).json("The details has been deleted");
    } catch (error) {
      next(error);
    }
  };
  
  
  
  //update suplier
  export const updatesdata = async (req, res, next) => {
   
    try {
      const updatesuplier = await Select.findByIdAndUpdate(
        req.params.dataId,
        {
          $set: {
           
           
          
            name: req.body.name,
            img: req.body.img,
            title: req.body.title,
            desc: req.body.desc,
            product: req.body.product,
          },
        },
        { new: true }
      );
      res.status(200).json(updatesuplier);
    } catch (error) {
      next(error);
    }
  };


  export const currentuser = async (req, res, next) => {
    
    try {
      const { currentuserId } = req.params;
      
  
      
      const pay = await Select.find({currentuserId});
     
  
      
  
      
      res.json(pay);
  
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server Error' });
    }
  };
  
  