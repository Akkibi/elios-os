import React, { useRef, useEffect, useState } from 'react';

const Document = ({content}) => {
    console.log(content);
    return (
        <div className=' overflow-y-scroll w-full h-full'>
            <h1>{content[0]}</h1><br />
          <p>{content[1]}</p><br />
          <p>{content[2]}</p><br />
          <p>{content[3]}</p>
        </div>
    );
}

export default Document;
