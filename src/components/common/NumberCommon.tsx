import React from "react";

export const smallCentsWithPrefix = (value: string) => {
  return(
      <React.Fragment>
          {value.split('.')[0]}. {value.split('.')[1]}.
          <span className='small-cents'>{value.split('.')[2]}</span>
      </React.Fragment>
  )
};