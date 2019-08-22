import React from 'react'
import PropTypes from 'prop-types'
import { apiHandleContactForm } from '../api/api'

class Main extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      user_name: '',
      user_email: '',
      contact: '',
    }
  }


  handleOnChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleContactFormSubmit = (event) => {
    event.preventDefault()
  
    const {user_name, user_email, contact} =this.state


    apiHandleContactForm({user_name, user_email, contact})
      .then(result => {
        console.log(result)
        if(result.data.msg === 'success'){
          alert("Message Sent.")

        } else if (result.data.msg === 'fail'){
          alert("Message failed to send")
        }
      })
      .catch(error => {
        console.log(error)
      })


    
  }



  render() {

    let close = <div className="close" onClick={() => {this.props.onCloseArticle()}}></div>

    return (
      <div ref={this.props.setWrapperRef} id="main" style={this.props.timeout ? {display: 'flex'} : {display: 'none'}}>
        <article id="contact-form" className={`${this.props.article === 'contact' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Contact</h2>
          <form onSubmit={event => {this.handleContactFormSubmit(event)}}>
            <input type="hidden" name="contact_number"></input>
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="user_name" id="name" onChange={(event) => {this.handleOnChange(event)}}/>
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="user_email" id="email" onChange={(event) => {this.handleOnChange(event)}}/>
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="contact" id="message" rows="4" onChange={(event) => {this.handleOnChange(event)}}></textarea>
            </div>
            <ul className="actions">
              <li><button type="submit" value="Send Message" className="special">Submit</button></li>
              <li><button type="reset" value="Reset">Reset</button></li>
            </ul>
          </form>
          {close}
        </article>

      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main