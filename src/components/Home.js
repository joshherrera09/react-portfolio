import React from 'react';

const Home = ({name, paragraph, image}) => {
    return (
        <div>
            <div className="home_container">
                <div className="home_head_wrapper">
                    <h1>Hello I'm <br /><span>{name}</span></h1>
                    <p>{paragraph}</p>
                </div>
                <div className="image_container">
                    <img src={image} alt="Author"></img>
                    <div className="bg"></div>
                </div>
            </div>
        </div>
    )
}

export default Home;