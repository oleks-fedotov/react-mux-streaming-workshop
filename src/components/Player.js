import React, { useEffect, useRef, useCallback } from "react";
import Hls from "hls.js";
import styled from "styled-components";

const VideoWrapper = styled.div`
  video {
    width: 500px;
    max-width: 100%;
  }
`;

const DownloadLink = styled.a`
  display: block;
`;

export default function Player({ src, thumbnailSrc, mp4File }) {
  const videoRef = useRef();
  const playVideo = useCallback(function() {
    if (!videoRef.current) return;
    videoRef.current.play();
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (Hls.isSupported()) {
      var hls = new Hls();
      hls.loadSource(src);
      hls.attachMedia(video);

      hls.on(Hls.Events.MANIFEST_PARSED, playVideo);
      return () => hls.off(playVideo);
    } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = src;
      video.addEventListener("loadedmetadata", playVideo);
      return video.removeEventListener(playVideo);
    }
  }, [playVideo, src]);

  return (
    <VideoWrapper>
      {!!mp4File && <DownloadLink href={mp4File}>Download</DownloadLink>}
      <video poster={thumbnailSrc} ref={videoRef} muted controls src={src} />
    </VideoWrapper>
  );
}
