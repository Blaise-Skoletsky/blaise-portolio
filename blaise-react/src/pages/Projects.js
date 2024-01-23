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
                <IndivProject url={pokerImg} description={'Multiplayer Poker game between 4-8 players!'} tools={'FULLSTACK - [Node.js - JS- HTML - CSS - Socket.io]'}/>
                <IndivProject url={pokerImg} description={'Linear regression to determine housing prices.'} tools={'ML - [Python - Pytorch]'}/>
            </div>
        </div>
    );
}

export default Project