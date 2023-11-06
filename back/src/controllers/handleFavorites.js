let myFavorites = []

function postFav(req, res){
    myFavorites.push(req.body)

    return res.status(201).json(myFavorites)
}

function deleteFav(req,res){
    const { id } = req.params
   myFavorites = myFavorites.filter(char => char.id !== id)
//    console.log(myFavorites);

   return res.status(200).json(myFavorites)
}

module.exports = {
    postFav,
    deleteFav
}