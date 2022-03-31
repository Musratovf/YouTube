import React from 'react';
import './_video.scss'

import {AiFillEye} from "react-icons/ai"

// const [fetchApi, setFetchApi] = useState(null);



const Video = () => {
    return <div className="video">
        <div className="video__top">
            <img src="https://i.ytimg.com/vi/1K2EbBZ_lxg/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDYp3Bsv_zv139gdphZ_PQbjdgYKw" alt="" />
            <span>05:43</span>
        </div>
        <div className="video__title">
            Create app in 5 minutes #made by Chintu
        </div>
        <div className="video__details">
            <span>
            <AiFillEye/> 5m Views • 
            </span>
            <span> 5 days ago</span>
        </div>
        <div className="video__channel">
            <img src="https://yt3.ggpht.com/ytc/AKedOLTpTPlRxrDfszPRShO1Emc4dTiWvBeWf91WZKVe=s88-c-k-c0x00ffffff-no-rj" alt="" />
            <p>Rainbow Hat Jr</p>
        </div>
    </div>
}

export default Video;
