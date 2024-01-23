import React from 'react'
import IndivProject from '../components/IndivProject';
import pokerImg from '../components/images/pokerImg.PNG';


function Project(){

    return (
        <div>
            <div className='h-32'>
                <h1 className='text-cyan-400  font-mono text-7xl text-center'> Portfolio</h1>
            </div>
            <div className='justify-center'>
                <IndivProject url={pokerImg} description={'Fullstack'} tools={'Fullstack - [Node.js - Javascript - HTML - CSS]'}/>
                <IndivProject url={pokerImg} description={'Howdy'} tools={'NULL'}/>
            </div>
        </div>
    );
}

export default Project