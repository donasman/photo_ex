import React, { useState } from 'react';
import Component1 from './components/Component1/Component1';
import { useRecoilState } from 'recoil';
import { inputState } from './atoms/inputState';

function Globalstate() {
    const [ value ] = useRecoilState(inputState);
    return (
        <div>
            <h1>{value}</h1>
            <Component1/>
        </div>
    );
}

export default Globalstate;