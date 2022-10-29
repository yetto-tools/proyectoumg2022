import React from 'react';
import BaseSlide from '../BaseSlide';

export const About = ({ children, title }) => {
  return (
    <BaseSlide title={title}>
      <>{children}</>
    </BaseSlide>
  );
};


export default About;
