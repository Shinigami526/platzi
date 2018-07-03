import React from 'react';
import Media from './media';
import Figure from '../../icons/components/Figure'

class Playlist extends React.Component {
         render() {
             const playlist = this.props.data.categories
             console.log(this.props.data.categories)
             return (
                 <div>
                 {
                     playlist.map((item) => {
                         return (
                            <div className="playlist" key={item.id}> 
                             
                            <h1>{item.title}</h1>
                             <Figure.Play color='black' size={32} />
                             <Figure.Pause  color='red' size={32} />
                             <Figure.Volumen  color='green' size={32} />
                             <Figure.Full_screen color='blue' size={32} />
                             <h3>{item.description}</h3>
                             {
                                 item.playlist.map((items) => {

                                   return <Media {...items} key={items.id}/>
                             })
                            }
                            </div>
                         )
                     })
                 }
                 
                 </div>
             )
         }
}

export default Playlist