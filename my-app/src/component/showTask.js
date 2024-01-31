import React from 'react';

const showTask = (props) => {
    return (
        <div>
        {props.database && (
          <div>
            <p> Tên user : {props.database?.name}</p>
            <p> id user : {props.database?.id}</p>
          </div>
        )}
      </div>
    );
};

export default showTask;