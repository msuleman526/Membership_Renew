import { useState } from 'react';
import './App.css';
import Page1 from './Pages/Page1';

function App() {

  let [stage, setStage] = useState(0)

  return (
    <>
      <div className="__hero_banner snipcss-tKZxK" style={{marginTop: '-117px', background: 'url(https://westslc.com.au/wp-content/uploads/2020/08/membership-banner_3.gif) center/cover no-repeat', height: '300px'}}>
        <div className="row">
          <div className="column">
            <div className="__title_wrapper">
              <h1>
                MEMBERSHIP
              </h1>
            </div>
          </div>
        </div>
      </div>

      {(stage == 0) && <Page1 />}

    </>
  );
}

export default App;
