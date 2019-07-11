import React from 'react';

const PageWrapper = (props) => {
  return (
    <React.Fragment>
      // TODO: Add navbar part here
      {...props.children}
    </React.Fragment>
  )
};

export default PageWrapper;
