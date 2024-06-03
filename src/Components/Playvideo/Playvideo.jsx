// import React, { useEffect, useState } from 'react'
// import './Playvideo.css'
// import video1 from '../../assets/video.mp4'
// import like from '../../assets/like.png'
// import share from '../../assets/share.png'
// import dislike from '../../assets/dislike.png'
// import save from '../../assets/save.png'
// import jack from '../../assets/jack.png'
// import user_profile from '../../assets/user_profile.jpg'
// import {API_KEY} from '../../data'
// const Playvideo = ({videoId}) => {
//     const {apiData,setApiData}=useState(null);

//     const fetchVideoData=async()=>{
//         //fetching video data
//         const videoDetailsUrl=`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=[API_KEY]`
//         await fetch(videoDetailsUrl).then(responce=>responce.json()).then(data=>setApiData(data.items[0]))
//     }
//     useEffect(()=>{
//         fetchVideoData();
//     },[])

//   return (
//     <div className='play-video'>
//         {/* <video src={video1} controls autoPlay muted></video> */}
//         <iframe src={`https://www.youtube.com/embed/${videoId}?autoplay=1`} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
// console.log(apiData)       
//         <h3>{apiData ? apiData.snippet.title:""}</h3>
//         <div className="play-info">
//             <p>1232 views &bull; 2 days ago</p>
//             <div>
//                 <span><img src={like} alt="" />125</span>
//                 <span><img src={dislike} alt="" />5</span>
//                 <span><img src={share} alt="" />15</span>
//                 <span><img src={save} alt="" />Save</span>

//             </div>

           
//         </div>
//         <hr />
//             <div className="publisher">
//                 <img src={jack} alt="" />
//                 <div>
//                     <p>CodewithPawan</p>
//                     <span>1M Subscribers</span>
//                 </div>
//                 <button >Subscribe</button>
//             </div>
//             <div className='video-description'>
//                 <p>Channel that make learning easy</p>
//                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, voluptates?</p>
//                 <hr />
//                 <h4>122 Comments</h4>
//             </div>
        
//                 <div className="comments">
//                     <img src={user_profile} alt="" />
//                     <div>
//                         <h3>Jack kills <span>1 day ago</span></h3>
//                         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem voluptatibus velit illum quaerat commodi quae unde sed minima enim consequuntur?</p>
//                         <div className="comment-action">
//                             <img src={like} alt="" />
//                             <span>233</span>
//                             <img src={dislike} alt="" />
                            
//                         </div>
//                     </div>
//                 </div>
//                 <div className="comments">
//                     <img src={user_profile} alt="" />
//                     <div>
//                         <h3>Jack kills <span>1 day ago</span></h3>
//                         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem voluptatibus velit illum quaerat commodi quae unde sed minima enim consequuntur?</p>
//                         <div className="comment-action">
//                             <img src={like} alt="" />
//                             <span>233</span>
//                             <img src={dislike} alt="" />
                            
//                         </div>
//                     </div>
//                 </div>
//                 <div className="comments">
//                     <img src={user_profile} alt="" />
//                     <div>
//                         <h3>Jack kills <span>1 day ago</span></h3>
//                         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem voluptatibus velit illum quaerat commodi quae unde sed minima enim consequuntur?</p>
//                         <div className="comment-action">
//                             <img src={like} alt="" />
//                             <span>233</span>
//                             <img src={dislike} alt="" />
                            
//                         </div>
//                     </div>
//                 </div>
//                 <div className="comments">
//                     <img src={user_profile} alt="" />
//                     <div>
//                         <h3>Jack kills <span>1 day ago</span></h3>
//                         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem voluptatibus velit illum quaerat commodi quae unde sed minima enim consequuntur?</p>
//                         <div className="comment-action">
//                             <img src={like} alt="" />
//                             <span>233</span>
//                             <img src={dislike} alt="" />
                            
//                         </div>
//                     </div>
//                 </div>

//             {/* </div>
//          */}
//     </div>
//   )
// }

// export default Playvideo





import moment from 'moment';
import React, { useEffect, useState } from 'react';
import './Playvideo.css';
import video1 from '../../assets/video.mp4';
import like from '../../assets/like.png';
import share from '../../assets/share.png';
import dislike from '../../assets/dislike.png';
import save from '../../assets/save.png';
import jack from '../../assets/jack.png';
import user_profile from '../../assets/user_profile.jpg';
import { API_KEY } from '../../data';

const Playvideo = ({ videoId }) => {
  const [apiData, setApiData] = useState(null);
  const [channelData, setChannelData] = useState(null);

  const fetchVideoData = async () => {
    try {
      const videoDetailsUrl = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&id=${videoId}&key=${API_KEY}`;
      const response = await fetch(videoDetailsUrl);
      const data = await response.json();

      if (data.items && data.items.length > 0) {
        setApiData(data.items[0]);
      } else {
        console.error('No data found for this video ID');
        setApiData(null);
      }
    } catch (error) {
      console.error('Error fetching video data:', error);
      setApiData(null);
    }
  };

  const fetchOtherData = async () => {
    if (!apiData) return;
    try {
      const channelDataUrl = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet,contentDetails,statistics&id=${apiData.snippet.channelId}&key=${API_KEY}`;
      const response = await fetch(channelDataUrl);
      const data = await response.json();

      if (data.items && data.items.length > 0) {
        setChannelData(data.items[0]);
      } else {
        console.error('No data found for this channel ID');
        setChannelData(null);
      }
    } catch (error) {
      console.error('Error fetching channel data:', error);
      setChannelData(null);
    }
  };

  useEffect(() => {
    fetchVideoData();
  }, [videoId]);

  useEffect(() => {
    fetchOtherData();
  }, [apiData]);

  return (
    <div className='play-video'>
      <iframe 
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1`} 
        frameBorder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        referrerPolicy="strict-origin-when-cross-origin" 
        allowFullScreen>
      </iframe>
      {console.log(apiData)}
      <h3>{apiData ? apiData.snippet.title : "Loading..."}</h3>
      <div className="play-info">
        <p>{apiData ? `${apiData.statistics.viewCount} views • ${moment(apiData.snippet.publishedAt).fromNow()}` : "Loading..."}</p>
        <div>
          <span><img src={like} alt="" />125</span>
          <span><img src={dislike} alt="" />5</span>
          <span><img src={share} alt="" />15</span>
          <span><img src={save} alt="" />Save</span>
        </div>
      </div>
      <hr />
      <div className="publisher">
        <img src={channelData ? channelData.snippet.thumbnails.default.url : ""} alt="" />
        <div>
          <p>{apiData ? apiData.snippet.channelTitle : "Loading..."}</p>
          <span>{channelData ? `${channelData.statistics.subscriberCount} Subscribers` : "Loading..."}</span>
        </div>
        <button>Subscribe</button>
      </div>
      <div className='video-description'>
        <p>{apiData ? apiData.snippet.description.slice(0, 200) : "Loading..."}</p>
        <hr />
        <h4>{apiData ? `${apiData.statistics.commentCount} Comments` : "Loading..."}</h4>
      </div>
      <div className="comments">
        <img src={user_profile} alt="" />
        <div>
          <h3>Jack kills <span>1 day ago</span></h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem voluptatibus velit illum quaerat commodi quae unde sed minima enim consequuntur?</p>
          <div className="comment-action">
            <img src={like} alt="" />
            <span>233</span>
            <img src={dislike} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Playvideo;
