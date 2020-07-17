import React from 'react'
import add,{sub,mul,div} from './Calc';

function List(){
        return (
        <ul>
            <li>Addition of Two Number is:{add(40,4)}</li>
            <li>Substraction of Two Number is:{sub(40,4)}</li>
            <li>Multiplication of Two Number is:{mul(40,4)}</li>
            <li>Division of Two Number is:{div(40,4)}</li>
        </ul>
    );
}

export default List;