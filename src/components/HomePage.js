import React from "react";
import Player from "./Player";
import Nav from "./Nav";

export default () => {
  return (
    <div className="App">
      <Nav />
      <h1>Live Streaming App</h1>
      <Player src="https://stream.mux.com/tRbfZsJgrmpbI3VhxrDa1QnpL3IHvKcIMyA324jTRm4.m3u8" />
    </div>
  );
};
