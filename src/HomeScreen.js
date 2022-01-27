import React from 'react';
import Banner from './Banner.js';
import "./HomeScreen.css";
import Nav from './Nav.js';
import requests from './Requests.js';
import Row from './Row.js';

function HomeScreen() {
  return <div>
      <Nav />
      <Banner  />
      <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals.url} isLargeRow />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending.url} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated.url} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies.url} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies.url} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies.url} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies.url} />
      <Row title="Mystery" fetchUrl={requests.fetchMystery.url} />
  </div>;
}

export default HomeScreen;
