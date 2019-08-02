import React, { Component } from 'react'
import Header from '../../components/Header';
import MainShowcase from './MainShowcase';

export class Home extends Component {
    render() {
        return (
            <div>
                <Header />
                <MainShowcase />
            </div>
        )
    }
}

export default Home
