import React from 'react';

const Rainbow = (WrappedComponent) => {
  const colors = ['red', 'orange', 'blue', 'green', 'yellow', 'pink'];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  const className = randomColor + '-text';

  return (props) => (
    <div className={ className }>
      <WrappedComponent {...props} />
    </div>
  );

};

export default Rainbow;