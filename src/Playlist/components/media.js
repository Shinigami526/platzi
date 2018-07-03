import React from 'react';
import PropTypes from 'prop-types'
import './style.css'

class Media extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			title: "porque aprender react"
		}
	}
	handleClick = (event) => {
		console.log(this.props.title)
		this.setState({
			title: 'y porque si'
		})
  	}
    render() {
		const { title, cover, author} = this.props;
		console.log(cover)
    	return (
            <div className="Media" onClick={this.handleClick}>
            	<img className="Media-image"
            	  src={cover}
            	  alt=""
                  width={260}
                  height={160}
            	/>
            	<h3 className="Media-title">{title}</h3>
            	<p className="Media-author">{author}</p>
            </div> 
     )
    }
}
Media.propsTypes = {
	title: PropTypes.string,
	cover: PropTypes.string,
	author: PropTypes.string
}
export default Media