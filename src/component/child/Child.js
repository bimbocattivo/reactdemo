import React,{useEffect} from 'react';
import PropTypes from 'prop-types';

import ChildFunc from './ChildFunc'

const dataChild1=['hello', 'from', 'child', '**1'];
const dataChild2=['hello', 'from', 'child', '**2'];

const Child = props => {

   // console.log('ChildFunc:',ChildFunc().map(item=>item))
    const {data1,data2}=ChildFunc({dataChild1,dataChild2});
    console.log('data1:',data1,'data2',data2)
    props.data(data1,data2);
    //props.data(ChildFunc());
    useEffect(()=>{
         
    })

   
    return (
        <div>{'ChildFunc().map(item=>item)'}
            <h2>child</h2>
        </div>
    );
};

Child.propTypes = {
    
};

export default Child;