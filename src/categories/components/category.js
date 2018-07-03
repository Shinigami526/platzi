import React from 'react'
import Playlist from '../../Playlist/components/playlist'
import './category.css'

function Category(props){
	return (
          <div className="Category">
             <p className="Category">{props.description}</p>
             <h2>{props.title}</h2>
            <Playlist 
            handleOpenModal={props.handleOpenModal}
            playlist={props.playlist} 
            />
          </div>
	)
}

export default Category