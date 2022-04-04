import React from 'react';
import { useState } from 'react';
import Show from './Show';
import './Navi.css';

function Navi({ vitaeSection }) {
    const { experience, education } = vitaeSection;

    const [seeExperience, setSeeExperience] = useState(false);

    return (
        <section className='Navi'>
            <nav>
                <button onClick={() => setSeeExperience(false)}>Education</button>
                <button onClick={() => setSeeExperience(true)}>Experience</button>
            </nav>
            {seeExperience
                ? <Show show={experience}/>
                : <Show show={education}/>
            }
        </section>
    )
}

export default Navi;