const CelebrantModel = require("../model/celebrants");

exports.postCelebrant = async (req, res, next)=>{
    const {body} = req;
    try{
        const formattedBirthdayDate = new Intl.DateTimeFormat("en-US", {
            day: "numeric",
            month: "short",
            year: "numeric",
          }).format(new Date(body.birthdayDate));
        const celebrant = await CelebrantModel.create({
            name:body.name,
            birthdayDate:body.birthdayDate,
            formattedBirthdayDate:formattedBirthdayDate
        });
        if(celebrant){
            res.status(201).json({sucess:"Celebrant added sucessfully"})
        }else{
            res.json({error:"Unable to add celebrant"})
        }
    }catch(error){
        console.log(error)
        res.json("Internal server error")
    }
}
const currentMonth = new Date().getMonth() + 1
exports.getCelebrants = async (req, res, next)=>{
    try{
     const celebrants = await CelebrantModel.find({
        $expr:{
            $eq:[{$month:'$birthdayDate'}, currentMonth],
        },
     })
     if(celebrants){
        res.json(celebrants)
     }else{
        res.json({message:"No celebrants available"})
     }
    }catch(error){
        res.json("Internal server error")
    }
}