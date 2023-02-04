const City = require('../models/city');

class CityRepository {
   async createCity({ name } ) {
        try {
            const city = await City.create({
                name
            });
            return city;
        } catch (error){
            console.log("Something went wrong in the  repository layer");
            throw{error};
        }
   }

   async updateCity(cityId , data ) {
      try {
          const city = await City.update(data ,{
            where:{
                id: cityId
            }
          });
          return city;
      } catch (error){
        console.log("Something went wrong in the  repository layer");
        throw{error};
    }
   }

   async getCity(cityId ) {
       try{
          const city = await City.findbyPk(cityId);
          return City;
       } catch (error) {
        console.log("Something went wrong in the  repository layer");
        throw{error};
       }
   }
   async deleteCity( ) {
      try{
           await City.destroy({
            where:{
                id: cityId
            }
           });
           return true;
      } catch(erro) {
           console.log("Something went wrong in the repository layer");
           throw{error};
      }
   }
}

module.exports = CityRepository;