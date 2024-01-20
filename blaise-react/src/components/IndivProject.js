import React from 'react'


function IndivProject({description, url}) {



    return (
  
          
            <div className='flex flex-row justify-center h-48'>
              <h1 className = 'text-3xl basis-1/3 justify-center text-center'>{description}</h1>
              <img className = 'h-2/3' alt='sorry' src={url}/>
            </div>
         
  
    );
  }

export default IndivProject