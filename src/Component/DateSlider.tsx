import React, { Component } from 'react';
import Slider from '@material-ui/core/Slider';
import './ContentContainer.css';

function valuetext(value: any) {
    return `${value}°C`;
};

function DateSlider() {

    const [value, setValue] = React.useState([20, 37]);

    const handleChange = (event: React.ChangeEvent<{}>, newValue: number |  number[]) :void => { 
        if(typeof newValue == 'number'){
            setValue([0, newValue])
        }else{
            setValue(newValue)
        }
    };

    return(
        <Slider value={value} onChange={handleChange} valueLabelDisplay="auto" aria-labelledby="range-slider" getAriaValueText={valuetext}/>
    )
}

export default DateSlider;