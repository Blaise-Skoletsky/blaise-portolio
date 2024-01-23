import React from 'react'


function IndivProject({description, url, tools}) {



    return (
  
          
            <div className='flex flex-row  h-48 w-3/4 justify-center mx-40'>
              <div className = 'basis-1/2 mt-6 justify-center text-center'>
                <h1 className='text-xl'>{tools}</h1>
                <h1 className='text-2xl'>{description}</h1>
              </div>
              <div className='items-center'>
                <img className = 'h-2/3 ' alt='image failed to load' src={url}/>
              </div>
            
            </div>
         
  
    );
  }

export default IndivProject