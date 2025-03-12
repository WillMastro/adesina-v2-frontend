import '../../../media_queries.css';
import "./style.css"
import video from '../dummyVideos';
import VideoCarousel from './videoCarosel';



const Triller = ({ }: any) => {
    return (<>
        <section>
            <VideoCarousel videos={video} />
        </section>
    </>);
}

export default Triller;