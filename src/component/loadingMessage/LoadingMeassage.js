import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './splash.css'


const LoadingMeassage = props => {

    const [state,setState]=useState({loading:true});
    console.log('loading:',state)
    useEffect(()=>{
            //await auth0Client.loadSession();

            setTimeout(() => setState({loading:false}),1500)    
    })
    return (!state.loading?<div className="splash-screen">
           Wait a moment while we load your app.
    <div className="loading-dot">.</div>
    </div>:'Refresh the page'
    );
};

LoadingMeassage.propTypes = {
    
};

export default LoadingMeassage;