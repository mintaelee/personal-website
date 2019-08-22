import React, { Component } from 'react'


export default class Header extends Component {
    render() {
        return (
            <header ref={this.home} id="header" style={this.props.timeout ? {display: 'none'} : {}}>
                <div className="content">
                    <div className={`inner ${this.props.isTitleVisible ? '' : 'hide'} ${this.props.isContentVisible ? '' : 'flash'}`}>
                        <h1 className={`${this.props.isContentVisible ? '' : 'cursorOn'}`} onClick={() => {this.props.openNav()}}>Mintae Lee</h1>
                        <p>FullStack Developer</p>
                    </div>
                    <div className={`nav ${this.props.isNavVisible ? '' : 'hide'}`}>
                        <ul>
                            <li><button disabled={!this.props.isNavVisible} className='button' onClick={() => {this.props.closeNav()}}>Home</button></li>
                            <li><button disabled={!this.props.isNavVisible} className='button' onClick={() => {this.props.openContentAndScrollTo('profile')}}>Profile</button></li>
                            <li><button disabled={!this.props.isNavVisible} className='button' onClick={() => {this.props.openContentAndScrollTo('experience')}}>Experience</button></li>
                            <li><button disabled={!this.props.isNavVisible} className='button' onClick={() => {this.props.openContentAndScrollTo('projects')}}>Projects</button></li>
                            <li><button disabled={!this.props.isNavVisible} className='button' onClick={() => {this.props.onOpenArticle('contact')}}>Contact</button></li>
                        </ul>
                    </div>
                </div>
            </header>
        )
    }
}


