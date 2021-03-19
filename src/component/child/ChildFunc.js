import Child from "./Child"


// const dataChild=['hello', 'from', 'childFunction','11',11];
// const dataChild1=['hello 1', 'from', 'childFunction 1','22',22];

const  ChildFunc=(props)=>{
    //const {d1,d2}=props;
    console.log('ChildFunc props:',props, )
    return {data1:props,data2:props};
}

export default ChildFunc;