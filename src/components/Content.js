import React, { Component } from 'react'
import NavIcon from './NavIcon'
import profile_pic from '../images/profile_pic.jpeg'

export default class Content extends Component {
    constructor(props){
        super(props)

        this.state = {
            content: ''
        }
        

        this.profile = React.createRef()
        this.experience = React.createRef()
        this.projects = React.createRef()
        this.contact = React.createRef()
    }

    componentDidUpdate(prevProps, prevState){
        if (prevProps.content !== this.props.content){
            this.setState({
                content: this.props.content
            })
            if (this.props.content === 'profile'){
                this.handleScrollToProfile()
            }
            if (this.props.content === 'experience'){
                this.handleScrollToExperience()
            }
            if (this.props.content === 'projects'){
                this.handleScrollToProjects()
            }
        }
    }
    
    handleScrollToHome = () => {
        if (this.props.home){
            this.props.home.current.scrollIntoView({
                behavior: "smooth",
                block: "nearest"
            })
        }
    }
    handleScrollToProfile = () => {
        if (this.profile.current){
            this.profile.current.scrollIntoView({
                behavior: "smooth",
                block: "nearest"
            })
        }
    }
    handleScrollToExperience = () => {
        if (this.experience.current){
            this.experience.current.scrollIntoView({
                behavior: "smooth",
                block: "nearest"
            })
        }
    }
    handleScrollToProjects = () => {
        if (this.projects.current){
            this.projects.current.scrollIntoView({
                behavior: "smooth",
                block: "nearest"
            })
        }
    }
    handleScrollToContact = () => {
        if (this.contact.current){
            this.contact.current.scrollIntoView({
                behavior: "smooth",
                block: "nearest"
            })
        }
    }

    render() {
        return (
            <>
                <NavIcon
                    handleScrollToHome={this.handleScrollToHome}
                    handleScrollToProfile={this.handleScrollToProfile}
                    handleScrollToExperience={this.handleScrollToExperience}
                    handleScrollToProjects={this.handleScrollToProjects}
                    handleScrollToContact={this.handleScrollToContact}
                    isContentVisible={this.props.isContentVisible}
                />
                <div ref={this.profile} className={'resume a'} style={this.props.isContentVisible ? {display: ''} : {display: 'none'}}>
                    <h1>Profile</h1>
                    <div className='content-wrapper'>
                        <span className="image profile"><img src={profile_pic} alt="" /></span>
                        <div className='content-text'>
                            <h2>Name: Mintae Lee</h2>
                            <h2>Location: New York, NY</h2>
                            <p>Welcome to my personal website! I am a junior fullstack developer, willing to learn and try new different things!</p>
                        </div>      
                    </div>
                </div>
                <div ref={this.experience} className={'resume b'} style={this.props.isContentVisible ? {display: ''} : {display: 'none'}}>
                    <h1>Experience</h1>
                    <div className='content-wrapper'>
                        <div className='content-text'>
                            <h2>Education</h2>
                            <p>Aenean ornare velit lacus, ac varius enim ullamcorper eu. Proin aliquam facilisis ante interdum congue. Integer mollis, nisl amet convallis, porttitor magna ullamcorper, amet egestas mauris. Ut magna finibus nisi nec lacinia. Nam maximus erat id euismod egestas.</p>
                            <h2>Experience</h2>
                            <p>Aenean ornare velit lacus, ac varius enim ullamcorper eu. Proin aliquam facilisis ante interdum congue. Integer mollis, nisl amet convallis, porttitor magna ullamcorper, amet egestas mauris. Ut magna finibus nisi nec lacinia. Nam maximus erat id euismod egestas.</p>
                        </div>      
                    </div>
                </div>
                <div ref={this.projects} className={'resume a'} style={this.props.isContentVisible ? {display: ''} : {display: 'none'}}>
                    <h1>Projects</h1>
                    <div className='content-wrapper'>
                        <div className='content-text'>
                            <h2>Websites/Web Applications</h2>
                            <p>Aenean ornare velit lacus, ac varius enim ullamcorper eu. Proin aliquam facilisis ante interdum congue. Integer mollis, nisl amet convallis, porttitor magna ullamcorper, amet egestas mauris. Ut magna finibus nisi nec lacinia. Nam maximus erat id euismod egestas.</p>
                        </div>      
                    </div>
                </div>
                <div ref={this.contact} id='contact' style={this.props.isContentVisible ? {display: ''} : {display: 'none'}}>
                    <h1>Contact</h1>
                    <div id='content-wrapper'>
                        <div id='content-text'>
                            <h2></h2>
                            <p>Aenean ornare velit lacus, ac varius enim ullamcorper eu. Proin aliquam facilisis ante interdum congue. Integer mollis, nisl amet convallis, porttitor magna ullamcorper, amet egestas mauris. Ut magna finibus nisi nec lacinia. Nam maximus erat id euismod egestas.</p>
                            <ul className="icons">
                                <li><a href="https://www.linkedin.com/in/min-tae-lee-bb4018108/" className="icon fa-linkedin"><span className="label">Twitter</span></a></li>
                                <li><a href="https://github.com/mintaelee" className="icon fa-github"><span className="label">GitHub</span></a></li>
                            </ul>
                            <button className='button' onClick={() => {this.props.onOpenArticle('contact')}}>Contact</button>
                        </div>      
                    </div>
                </div>
            </>
        )
    }
}
