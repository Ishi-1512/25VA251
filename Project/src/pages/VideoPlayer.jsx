import { useParams } from "react-router-dom";
import videos from "../data/videos";

function VideoPlayer() {
  const { id } = useParams();

  const video = videos.find(
    (v) => v.id === Number(id)
  );

  if (!video) {
    return <h2>Video not found</h2>;
  }

  return (
    <div className="player-page">
      <video
        controls
        width="1000"
      >
        <source
          src={video.video}
          type="video/mp4"
        />
      </video>

      <h2>{video.title}</h2>

<p>
  {video.views} • {video.time}
</p>

<div className="channel-row">
  <p>{video.channel}</p>

  <button className="subscribe-btn">
    Subscribe
  </button>
</div>

<div className="video-buttons">
  <button>👍 Like</button>
  <button>👎 Dislike</button>
  <button>🔗 Share</button>
</div>
    </div>
  );
}

export default VideoPlayer;