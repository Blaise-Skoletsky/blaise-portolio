import React from 'react'
import IndivProject from '../components/IndivProject';


function Project(){

    return (
        <div>
            <div className='h-32'>
                <h1 className='text-cyan-400  font-mono text-7xl text-center'> Portfolio</h1>
            </div>
            <div>
                <IndivProject />
                <IndivProject />
            </div>
        </div>
    );
}

export default Project