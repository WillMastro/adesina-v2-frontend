
import { Fade } from 'react-awesome-reveal';
import NavBar from '../../components/navBar/navbar';
import Triller from './triller';
import VideoList from './videoList';


const Watch = () => {

    const logout = () => {
        localStorage.removeItem('adesina_token');
        window.location.reload();
    }

    // const movies = [
    //     {
    //         title: "How to capture an event",
    //         views: "1.2M",
    //         thumbNail: "https://i.pinimg.com/736x/61/24/a5/6124a500984101b787668b80c4f0e639.jpg",
    //         video: "https://www.youtube.com/watch?v=9ix7TUGVYIo"
    //     },
    //     {
    //         title: "The Adesina Assets",
    //         views: "1.2M",
    //         thumbNail: "https://i.pinimg.com/736x/78/cd/fe/78cdfebf919a5abfdd28a3bf5c9c90bc.jpg",
    //         video: "https://www.youtube.com/watch?v=9ix7TUGVYIo"
    //     },
    //     {
    //         title: "Creative Thinking",
    //         views: "1.2M",
    //         thumbNail: "https://i.pinimg.com/736x/61/24/a5/6124a500984101b787668b80c4f0e639.jpg",
    //         video: "https://www.youtube.com/watch?v=9ix7TUGVYIo"
    //     },
    //     {
    //         title: "The Matrix",
    //         views: "1.2M",
    //         thumbNail: "https://i.pinimg.com/736x/61/24/a5/6124a500984101b787668b80c4f0e639.jpg",
    //         video: "https://www.youtube.com/watch?v=9ix7TUGVYIo"
    //     },
    // ]

    return (<>
        <NavBar active="Watch" />
        <Fade>
            <Triller />
        </Fade>
        <VideoList />
    </>);
}

export default Watch;