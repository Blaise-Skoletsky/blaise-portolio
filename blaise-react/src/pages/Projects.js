import React from 'react'
import IndivProject from '../components/IndivProject';
import pokerImg from '../components/images/pokerImg.PNG';


function Project(){

    return (
        <div>
            <div className='h-32'>
                <h1 className='text-cyan-400  font-mono text-7xl text-center'> Portfolio</h1>
            </div>
            <div>
                <IndivProject url={pokerImg} description={'Fullstack'}/>
                <IndivProject url={pokerImg} description={'Howdy'}/>
            </div>
        </div>
    );
}

export default Project