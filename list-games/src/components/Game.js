import React from 'react';
import { Link } from 'react-router-dom';
import { Button} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import HomeIcon from '@material-ui/icons/Home';
import { Modal } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

function VideoModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        dialogClassName="modal-90w"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton >
        <video controls >
            <source src={props.video}
                type="video/mp4"/>

            Sorry, your browser doesn't support embedded videos
            
         </video>
        </Modal.Header>
      </Modal>
    );
  }
export default function GameList(props){

const [modalShow, setModalShow] = React.useState(false);

if(props.game === undefined) return 'loading...'  
return (
    <div className = "game_container flex-center"
        style={{
            height: '95vh',
            width: '100vw', 
            marginTop: 16,
            backgroundImage: `linear-gradient(
                rgba(0, 0, 0, 0.3),
                rgba(0, 0, 0, 0.3)
              ),
              url(${props.game.background_image})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            
        }}
    >   
        <div className = 'home_btn'> <Link to = {"/games"}><HomeIcon fontSize = 'large'/></Link>  </div>
        <div className ='text'>
            <h1 className = 'game_logo'> {props.game.name} </h1>
            <div className = 'btns'>
                <Button variant = "contained" size = 'large' onClick ={() => setModalShow(true)} ><Link to = {`/games/${props.game.slug}/trailer`}>Watch Trailer</Link></Button>
                <Button variant = "contained" size = 'large' onClick ={props.openModalVideo}  ><Link to = {`/screenshots/${props.game.id}`}>View screenshots</Link></Button>
                <Button variant = "contained" size = 'large' onClick ={props.handleDelete} ><Link to = {"/games"}>Delete this game</Link></Button>
            </div>
        </div> 
        <VideoModal 
        show={modalShow}
        onHide={() => setModalShow(false)}
        video = {props.game.clip.clip}/> 
    </div>
)
}
