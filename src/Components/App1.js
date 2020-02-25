import React, { Component } from 'react';
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
         <div class="hero">
        <div class="hero-clipped">
            <div class="hero-textbox">
                <h1 class="main-heading">Los Angles</h1>
                <h2 class="sub-heading">Learn Today</h2>
                <a href="/home" class="cta-btn">Start Now</a>
            </div>
        </div>
    </div>
            </div>
         );
    }
}
 
export default App;