import React from 'react';
import Rainbow from '../hoc/Rainbow';

const About = () => {
  return (
    <div className="container">
      <h4 className="center">About</h4>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque libero cupiditate nesciunt soluta ipsa! Autem dolorem aut recusandae unde, iure necessitatibus, tenetur exercitationem provident molestiae beatae delectus a, fugit incidunt.</p>
    </div>
  );
};

export default Rainbow(About);