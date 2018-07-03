import React from 'react'
import HomeLayout from '../components/layout'
import Categories from '../../categories/components/categories'
import Related from '../components/related'
import ModalContainer from '../../widget/container/modal'
import Modal from '../../widget/components/modal'
import HandleError from '../../error/containers/handle-error'

class Home extends React.Component {
	state = {
        modalVisible: false,
        handleError: false
	}
	handleOpenModal= () => {
        this.setState({
        	modalVisible:true
        })
   	}
	handleCloseModalClick = (event) => {
       this.setState({
       	  modalVisible:false,
       })
       }
   	
   render() {
       
        return (
        <HandleError>
           <HomeLayout>
              <Related />
           	  <Categories 
           	  categories={this.props.data.categories}
              handleOpenModal={this.handleOpenModal}
           	  />
              {
              	this.state.modalVisible &&
              	<ModalContainer>
                  <Modal handleClick={this.handleCloseModalClick}>
                     <h1>Esto es un portal</h1>
                  </Modal>
                </ModalContainer>
              }
           </HomeLayout>
        </HandleError>   
       )
   }
}


export default Home