import React from 'react';
import './App.css';
import user from './img/ILLUST.png';
import users from './img/rocket.png';

function App() {
  return (
    <div className="mainDiv">
      <div className="mainItemsDiv">
        <div className="mainItemDiv">
          <div className="mainItmsTitleDiv">
            Become more than just an Engineer
          </div>
          <div className="mainItmsTextDiv">
            Engineer's cradle is your once stop solution for all exploratory needs.<br/>
            We provide you with finest mentors. industrial experts and resources<br/>
            to help you expand you breath of knowledge.
          </div>
          <div className="mainBtnIconDiv">
            <div className="mainBtnItemsDiv">
              <div className="mainBtnIconTextDiv">
                Get Started
              </div>
              <div className="mainBtnimg">
                <img src ={users} alt="user"/>
              </div>
            </div>
          </div>
        </div>
        <div className="mainItemsPictureDiv">
          <div className="mainItemsPictureIconDiv">
            <img src ={user} alt="user"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
