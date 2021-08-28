import React from 'react';
import Herobox from '../../components/Herobox';
import Passions from '../../components/Passions';
import Interests from '../../components/Interests';
import './Home.css';


const Home = () => {
    return (
        <div className="home">
            <Herobox />
            <Passions />
            <Interests />
     </div>
    )
}

export default Home;