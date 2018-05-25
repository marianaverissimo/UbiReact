import React from 'react';
import ReactDOM from 'react-dom';
import Request from 'react-http-request';

var songList;

const navbar = (
    <nav className="container">
      <div className="row_nav">

        <div className="col-1 hamb">
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
        </div>
        <div className="col-3 app_name"> <h2>Corum</h2> </div>
        <div className="col-3"></div>

      </div>
    </nav>
);

const title = (
    <div className="container">
      <div className="row_title">

        <div className="col-1 blank"></div>
        <div className="col-5 title"> <h1>Songs</h1> </div>

      </div>
    </div>
);


function SongListFunction(songList) {
  console.log(songList);
  const songListRender = songList.map((song) =>
  <div className="container song_list">
      <div className="row_songList">
          <div className="col-1 blank"></div>
          <div className="col-8 song_title">{song['title']}</div>
          <div className="col-3 song_artist">{song['artist']}</div>
      </div>
      <div className="row_moreDetails">
          <div className="col-1 blank"></div>
          <div className="col-5 song_year"> {song['year']} </div>
          <div className="col-3 song_url"> <a href= "{song['webUrl']}"> Lyrics </a> </div>
      </div>
    </div>
  );
  return (
    <ul>{songListRender}</ul>
  );
}

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
              console.log(result.body);
              return <div>{ SongListFunction(result.body)}</div>;
            }
          }
        }
        </Request>
);


ReactDOM.render( navbar, document.getElementById("navbar"));
ReactDOM.render( title, document.getElementById("title"));
ReactDOM.render( song_one, document.getElementById("song_one"));
