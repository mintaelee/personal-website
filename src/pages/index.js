import React from 'react'
import Layout from '../components/layout'

import Header from '../components/Header'
import Content from '../components/Content'
import Main from '../components/Main'


class IndexPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isArticleVisible: false,
      timeout: false,
      articleTimeout: false,
      article: '',
      loading: 'is-loading',
      isTitleVisible: true,
      isNavVisible: false,
      isContentVisible: false,
      isHeadingOnTop: false,
      content: ''
    }

    this.home = React.createRef()

    this.handleOpenArticle = this.handleOpenArticle.bind(this)
    this.handleCloseArticle = this.handleCloseArticle.bind(this)
    this.setWrapperRef = this.setWrapperRef.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
    this.handleOpenNav = this.handleOpenNav.bind(this)
    this.handleCloseNav = this.handleCloseNav.bind(this)
    this.handleOpenContent = this.handleOpenContent.bind(this)
  }

  componentDidMount () {
    this.timeoutId = setTimeout(() => {
        this.setState({loading: ''});
    }, 100);
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount () {
    if (this.timeoutId) {
        clearTimeout(this.timeoutId);
    }
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  setWrapperRef(node) {
    this.wrapperRef = node;
  }

  handleOpenArticle(article) {

    this.setState({
      isArticleVisible: !this.state.isArticleVisible,
      article
    })

    setTimeout(() => {
      this.setState({
        timeout: !this.state.timeout
      })
    }, 325)

    setTimeout(() => {
      this.setState({
        articleTimeout: !this.state.articleTimeout
      })
    }, 350)

  }

  handleOpenNav(){

    if (!this.state.isContentVisible){
      this.setState(prevState => {
        return {
          isTitleVisible: !prevState.isTitleVisible
        }
      })
      setTimeout(() => {
        this.setState(prevState => {
          return {
            isNavVisible: !prevState.isNavVisible
          }
        })
      },1000)
    }

  }

  handleOpenContent(content){
    this.handleCloseNav()

    if (!this.state.isContentVisible){
      setTimeout(() => {
        this.setState(prevState => {
          return {
            isContentVisible: !prevState.isContentVisible
          }
        })
      }, 2000)
    }
    setTimeout(() => {
      this.setState({
        content: content
      })
    }, 2000)
    
  }

  handleCloseNav(){
    
    this.setState(prevState => {
      return {
        isNavVisible: !prevState.isNavVisible
      }
    })
    setTimeout(() => {
      this.setState(prevState => {
        return {
          isTitleVisible: !prevState.isTitleVisible
        }
      })
    },1000)
  }
  
  handleCloseArticle() {

    this.setState({
      articleTimeout: !this.state.articleTimeout
    })

    setTimeout(() => {
      this.setState({
        timeout: !this.state.timeout
      })
    }, 325)

    setTimeout(() => {
      this.setState({
        isArticleVisible: !this.state.isArticleVisible,
        article: ''
      })
    }, 350)

  }

  handleClickOutside(event) {
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      if (this.state.isArticleVisible) {
        this.handleCloseArticle();
      }
    }
  }

  render() {
    return (
      <Layout location={this.props.location}>
        <div className={`body ${this.state.loading} ${this.state.isArticleVisible ? 'is-article-visible' : ''}`}>
          <div ref={this.home} id="wrapper">
            <Header 
              openNav={this.handleOpenNav}
              closeNav={this.handleCloseNav}
              isTitleVisible={this.state.isTitleVisible}
              isNavVisible={this.state.isNavVisible}
              onOpenArticle={this.handleOpenArticle} 
              timeout={this.state.timeout} 
              openContentAndScrollTo={this.handleOpenContent}
              isHeadingOnTop={this.state.isHeadingOnTop}
              handleNavIcon={this.handleNavIcon}
              isContentVisible={this.state.isContentVisible}
              />
            <div id="bg"></div>
          </div>
            <Content
              home={this.home}
              isContentVisible={this.state.isContentVisible}
              content={this.state.content}
              onOpenArticle={this.handleOpenArticle} 
            />
            <Main
              isArticleVisible={this.state.isArticleVisible}
              timeout={this.state.timeout}
              articleTimeout={this.state.articleTimeout}
              article={this.state.article}
              onCloseArticle={this.handleCloseArticle}
              setWrapperRef={this.setWrapperRef}
            />
        </div>
      </Layout>
    )
  }
}

export default IndexPage
