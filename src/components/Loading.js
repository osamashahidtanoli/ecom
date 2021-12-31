import Loader from '../assets/loader.gif';
import '../App.css';

const Loading = () => {
    return (
        <div className="loaderDiv">
            <img className="loaderImg" alt='loader' src={Loader}/>
        </div>
    )
}

export default Loading
