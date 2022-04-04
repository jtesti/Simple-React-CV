import React from 'react';
import './Hero.css';

function Hero({ hero }) {
    return (
        <section className='Hero'>
            <div className='Hero_info'>
                <h1>{hero.name}</h1>
                <ul>
                    <li>{hero.email}</li>
                    <li>{hero.phone}</li>
                    <li>{hero.gitHub}</li>
                </ul>
                <div className='Hero_image'><img src='https://avatars.githubusercontent.com/u/100090019?v=4' alt='foto'></img></div>

            </div>
        </section>
    )
}

export default Hero 