import React from 'react';
//  const keywords = "grinning face happy smiley emotion emotion";


export default function Keywords({keywords}){
    return(
        
        <div className="row">  

               {keywords.split(" ").map(word =>(
                 <div className="card card-keyword" >{word}</div>
                
                 
                 
                
               ))}   
                     </div>
              
    )
};