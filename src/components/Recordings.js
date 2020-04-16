import React from "react";
import styled from "styled-components";
import Player from "./Player";
import Nav from "./Nav";

const recordings = [
  {
    playbackId: "N6NURMzLw1dsG00WJ3ZC3dXVmwCwlcGSa5lxFPzeLCaA",
    thumbTime: 5,
    mp4File: "high.mp4"
  },
  {
    playbackId: "KYNa6RFrY3n1NjK02skv98OtL02ZIPLO5A",
    thumbTime: 10
  },
  {
    playbackId: "QfBZOIgZ6zy501QsM54mtkSikiwqNlQan",
    thumbTime: 15
  }
];

const PlayerWrapper = styled.div`
  padding: 20px 0;
`;

export default () => (
  <div>
    <Nav />
    <h1>Recordings:</h1>
    {recordings.map(({ playbackId, thumbTime, mp4File }) => (
      <PlayerWrapper key={playbackId}>
        <Player
          mp4File={
            !!mp4File &&
            `https://stream.mux.com/${playbackId}/${mp4File}?download=download.mp4`
          }
          thumbnailSrc={`https://image.mux.com/${playbackId}/animated.gif?time=${thumbTime}&width=640`}
          src={`https://stream.mux.com/${playbackId}.m3u8`}
        />
      </PlayerWrapper>
    ))}
  </div>
);
