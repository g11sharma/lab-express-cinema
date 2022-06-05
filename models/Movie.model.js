const { Schema, SchemaTypes, model } = require('mongoose')
// const mongoose = require('mongoose')


//////schema Movie

const movieSchema = new Schema(
    {
        title: {
            type :String,
        },
        director: {
            type:String,
        },
        stars : [
            { 
                type: String,          
      },
        ],
    
        image :{
            type:String,
            Default:"https://images.media-allrecipes.com/images/75131.jpg",
          },
          description :{
              type :String
          },
          showtimes :[
              {
              type:String,
              }
             ],
    })
  
    const Movie = model("Movie", movieSchema);

    module.exports = Movie;
  
