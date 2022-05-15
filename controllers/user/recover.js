async function recover(req,res){
    res.status(200).json({id: req.userId, username:req.username})
}

module.exports = recover