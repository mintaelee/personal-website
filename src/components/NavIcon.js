import React, { Component } from 'react'


export default class NavIcon extends Component {

    render() {
        return (
            <div id="navIcon" style={this.props.isContentVisible ? {display: ''} : {display: 'none'}}>
                <ul>
                    <li><button className='button' onClick={() => {this.props.handleScrollToHome()}}>Home</button></li>
                    <li><button className='button' onClick={() => {this.props.handleScrollToProfile()}}>Profile</button></li>
                    <li><button className='button' onClick={() => {this.props.handleScrollToExperience()}}>Experience</button></li>
                    <li><button className='button' onClick={() => {this.props.handleScrollToProjects()}}>Projects</button></li>
                </ul>
            </div>
        )
    }
}
