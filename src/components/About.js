import React from 'react';

class About extends React.Component
{
    constructor()
    {
        super();
        this.description =
        {
            aboutMe:"I am an Engineer, Technologist, Coder, Brother, Son, Friend, Optimist and Ambitious."
        };
    }

    render()
    {
        return(
            <p>About Me: {this.description.aboutMe}</p>
        );
    }
}
export default About;