import React from 'react';
import ReactDOM from 'react-dom';
import Request from 'react-http-request';

const navbar = (
    <nav class="container">
      <div class="row_nav">

        <div class="col-1 hamb">
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
        </div>
        <div class="col-3 app_name"> <h2>Corum</h2> </div>
        <div class="col-3"></div>

      </div>
    </nav>
);

const title = (
    <div class="container">
      <div class="row_title">

        <div class="col-1 blank"></div>
        <div class="col-5 title"> <h1>Songs</h1> </div>

      </div>
    </div>
);


const song_list = (
  <div class="container">
    <div class="row_songList">

      <div class="col-1 blank"></div>
      <div class="col-9 song_title"> <h3>ApiSongs</h3> </div>
      <div class="col-2 song_artist"> <h4>Artist</h4> </div>

    </div>
  </div>
);

const song_one = (
  <Request
        url='https://songs-api-ubiwhere.now.sh/api/songs'
        method='get'
        accept='application/json'
        verbose={true}
      >
      {
          ({error, result, loading}) => {
            if (loading) {
              return <div>loading...</div>;
            } else {
              return <div>{ JSON.stringify(result) }</div>;
            }
          }
        }
        </Request>
);

ReactDOM.render( navbar, document.getElementById("navbar"));
ReactDOM.render( title, document.getElementById("title"));
ReactDOM.render( song_list, document.getElementById("song_list"));
ReactDOM.render( song_one, document.getElementById("song_one"));
