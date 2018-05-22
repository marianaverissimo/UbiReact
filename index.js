import React from 'react';
import ReactDOM from 'react-dom';

const navbar = (
    <nav class="container">
      <div class="row">

        <div class="col-3">
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
        </div>
        <div class="col-4"> <h2>Corum</h2> </div>

      </div>
    </nav>
);

const title = (
    <div class="container">
      <div class="row">

        <div class="col-3"></div>
        <div class="col-4"> <h1>Songs</h1> </div>

      </div>
    </div>
);

ReactDOM.render( navbar, document.getElementById("navbar"));
ReactDOM.render( title, document.getElementById("title"));
