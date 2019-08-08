import React, { Component } from 'react';
import './MainShowcase.css';
import ParticleField from '../../components/ParticleField';

export class MainShowcase extends Component {
    render() {
        return (
            <div className="mainshowcase-container">
                <ParticleField color="#135"/>
                <div className="mainshowcase-header-container">
                    <div className="mainshowcase-line-break" />
                 <h1 className="mainshowcase-header"> MAC  Formula  Autonomous</h1>
                <div className="mainshowcase-line-break" />
                </div>
                {/* <div className="mainshowcase-image-container">
                    <img src={carRender} className="mainshowcase-image"/>
                </div> */}
                <div className="mainshowcase-title-container">
                    <h1 className="mainshowcase-title">The future of racing.</h1>
                </div>
            </div>
        )
    }
}

export default MainShowcase
