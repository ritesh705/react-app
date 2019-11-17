import React from 'react';

class Personality extends React.Component
{
    render()
    {
        return <p>My Personality is {this.props.personality}</p>;
    };
}

// Props - Passing Personality into Personality Object
const personality = <Personality personality="Pleasing"/>;

export default personality;