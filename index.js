import React from 'react';
import ReactDOM from 'react-dom';
import Request from 'react-http-request';

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
            } if(result) {
              var data = JSON.parse(result.text);
              console.log(data[0].title);
              return data[0].title;
            }
          }
        }
        </Request>
);

const song_list = (
  <div className="container">
    <div className="row_songList">

      <div className="col-1 blank"></div>
      <div className="col-9 song_title"> </div>
      <div className="col-2 song_artist"></div>

    </div>
  </div>
);

ReactDOM.render( navbar, document.getElementById("navbar"));
ReactDOM.render( title, document.getElementById("title"));
ReactDOM.render( song_list, document.getElementById("song_list"));
ReactDOM.render( song_one, document.getElementById("song_one"));
