import React from 'react'
import BaseSlide from '@/components/BaseSlide';
export const Contact = ({ children, title }) => {
  return (
    <BaseSlide title={title}>
      <>{children}</>
    </BaseSlide>
  );
};

export default Contact
