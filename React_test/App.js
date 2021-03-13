import React from 'react'
const App = () => {
    return ( <
        div className = "App" >
        <
        div className = "weatherContainer pt-3 pb-3" >
        <
        WeatherBody time = { 'Morning' }
        icon = { 'Sun' }
        minTemp = { 15 }
        maxTemp = { 25 }
        />  <
        WeatherBody time = { 'day' }
        icon = { 'Sun' }
        minTemp = { 15 }
        maxTemp = { 25 }
        />   <
        WeatherBody time = { 'evening' }
        icon = { 'Sun' }
        minTemp = { 15 }
        maxTemp = { 25 }
        /> <
        WeatherBody time = { 'night' }
        icon = { 'Sun' }
        minTemp = { 15 }
        maxTemp = { 25 }
        />    <
        /div> <
        /div>
    );
};

export defualt App;