import React, { useEffect } from 'react';

const Login: React.FC = () => {
  useEffect(() => {
    setTimeout(() => {
      console.log('router');
    }, 1000);
  });

  return <div>this is login</div>;
};

export default () => {
  return <Login />;
};
