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

    render() {
        return (
            <>
                <NavIcon
                    handleScrollToHome={this.handleScrollToHome}
                    handleScrollToProfile={this.handleScrollToProfile}
                    handleScrollToExperience={this.handleScrollToExperience}
                    handleScrollToProjects={this.handleScrollToProjects}
                    isContentVisible={this.props.isContentVisible}
                />
                <div ref={this.profile} className={'resume a'} style={this.props.isContentVisible ? {display: ''} : {display: 'none'}}>
                    <h1>Profile</h1>
                    <div className='content-wrapper'>
                        <span className="image profile"><img src={profile_pic} alt="" /></span>
                        <div className='content-text'>
                            <h2>About me</h2>
                            <p>Aenean ornare velit lacus, ac varius enim ullamcorper eu. Proin aliquam facilisis ante interdum congue. Integer mollis, nisl amet convallis, porttitor magna ullamcorper, amet egestas mauris. Ut magna finibus nisi nec lacinia. Nam maximus erat id euismod egestas. By the way, check out my <a href="#work">awesome work</a>.</p>
                        </div>      
                    </div>
                </div>
                <div ref={this.experience} className={'resume b'} style={this.props.isContentVisible ? {display: ''} : {display: 'none'}}>
                    <h1>Experience</h1>
                    <div className='content-wrapper'>
                        <div className='content-text'>
                            <h2>About me</h2>
                            <p>Aenean ornare velit lacus, ac varius enim ullamcorper eu. Proin aliquam facilisis ante interdum congue. Integer mollis, nisl amet convallis, porttitor magna ullamcorper, amet egestas mauris. Ut magna finibus nisi nec lacinia. Nam maximus erat id euismod egestas. By the way, check out my <a href="#work">awesome work</a>.</p>
                        </div>      
                    </div>
                </div>
                <div ref={this.projects} className={'resume a'} style={this.props.isContentVisible ? {display: ''} : {display: 'none'}}>
                    <h1>Projects</h1>
                    <div className='content-wrapper'>
                        <div className='content-text'>
                            <h2>About me</h2>
                            <p>Aenean ornare velit lacus, ac varius enim ullamcorper eu. Proin aliquam facilisis ante interdum congue. Integer mollis, nisl amet convallis, porttitor magna ullamcorper, amet egestas mauris. Ut magna finibus nisi nec lacinia. Nam maximus erat id euismod egestas. By the way, check out my <a href="#work">awesome work</a>.</p>
                        </div>      
                    </div>
                </div>
                <div id='contact' style={this.props.isContentVisible ? {display: ''} : {display: 'none'}}>
                    <h1>Contact Me</h1>
                    <div id='content-wrapper'>
                        <div id='content-text'>
                            <h2>About me</h2>
                            <p>Aenean ornare velit lacus, ac varius enim ullamcorper eu. Proin aliquam facilisis ante interdum congue. Integer mollis, nisl amet convallis, porttitor magna ullamcorper, amet egestas mauris. Ut magna finibus nisi nec lacinia. Nam maximus erat id euismod egestas. By the way, check out my <a href="#work">awesome work</a>.</p>
                        </div>      
                    </div>
                </div>
            </>
        )
    }
}
