import React from 'react';
import personality from './Personality';
import Behavior from './Behavior';


class About extends React.Component
{
    constructor()
    {
        super();
        this.description =
        {
            aboutMe:"I am an Engineer, Technologist, Coder, Brother, Son, Friend, Optimist and Ambitious.",
            myPersonality : personality
        };
    }

    render()
    {
        return(
            <div>
                <p>About Me: {this.description.aboutMe}</p>
                <p>{this.description.myPersonality}</p>
                <Behavior/>
            </div>
            );
    }
}

export default About;