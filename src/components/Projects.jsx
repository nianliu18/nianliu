import React from 'react';


const Projects = (props) => {
  return (
    <div className="mainproject-container">
      <div recipe-container>
        <h1> Recipe App </h1>
        <p>
          <img src="https://i.imgur.com/Li5wRAS.png" className="recipe-icon"/>
          What inspired me to to create this app was my passion for cooking. I wanted to deepen my understanding in backend Express/NodeJs and PSQL databases and also create something that I would be able to use when I want write down recipes. This app fetches API information from a server called Edamam which is free and has thousands of recipes to choose from. It gives users the ability to see, create, edit and delete recipes within their app.
        <a href="https://git.generalassemb.ly/nianliu18/project-2.git"> Click to GitHub </a>
        </p>
      </div>
      <div>
        <h1>Simple Weather App</h1>
        <p>
          <img src="https://i.imgur.com/Ci28sm0.png" className="weather-icon"/>
          The weather app is a frontend web app designed using React and fetches from a weather API coming from openweathermap.org. My goal was to make this frontend web app as simple as possible and later get together with another fellow developer and UX designer to improve the overal user experience and design of my project.
        </p>
        <a href="http://nianssimpleweatherapp.bitballoon.com/"> Click to Weather App </a>
      </div>
      <div>
        <h1>Home Remedies Blog</h1>
        <p>
          <img src="https://i.imgur.com/5JzAqNS.png" className="medicine-icon"/>
            Home Remedies Blog was created due to my love for Eastern medicine and home remedies. My father is an herbalist and ever since I was a kid I would remember making arthritis pills and heart health medicine with my old man. This was also an opportunity for me to learn a new language. This app is built completely on Ruby on Rails and I also dove deeper into understanding the language by implementing Devise Authentication where users are able to sign in and post blogs on their experiences in home remedies and herbal medicine.
        </p>
        <a href="git@git.generalassemb.ly:nianliu18/project-3.5-homeRemedyBlog.git"> Click to GitHub </a>
      </div>
      <div>
        <h1>Dice Poker Browser Game</h1>
        <p>
          <img src="https://i.imgur.com/V06mCA9.png" className="dice-icon"/>
          This was one of my first projects where I was still using JQuery and Vanilla Javascript to make websites and browser games. Dice Poker is a game I play when I am out with friends drinking. Just like poker users roll their dice and whoever gets the highest poker combination wins. I had a lot of fun with this project because it was independent and it really got me thinking logically on the winning conditions of the game and how I can command my browser game to know when the game is over or not.
        </p>
        <a href="http://dice-poker-nian.bitballoon.com/"> Click to Game </a>
      </div>
    </div>
  );
}

export default Projects;
