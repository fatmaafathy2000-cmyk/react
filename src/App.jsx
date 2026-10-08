export default function App() {
  return (
    <div className="body ">
      <div className="content">
        <div className="left">
          <img id="designs-img" src="/Group-12.png" alt="Designs" />
          <div className="card">
            <div className="num" style={{ backgroundColor: "#BEE2FD" }}>
              1
            </div>
            <div className="card-content">
              <h1>STEP 1</h1>
              <p>YOUR INFO</p>
            </div>
          </div>
          <div className="card">
            <div className="num">2</div>
            <div className="card-content">
              <h1>STEP 2</h1>
              <p>SELECT PLAN</p>
            </div>
          </div>
          <div className="card">
            <div className="num">3</div>
            <div className="card-content">
              <h1>STEP 3</h1>
              <p>ADD-ONS</p>
            </div>
          </div>
          <div className="card">
            <div className="num">4</div>
            <div className="card-content">
              <h1>STEP 4</h1>
              <p>SUMMARY</p>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="right-content">
            <div className="header">
              <h1>Personal info</h1>
              <p>Please provide your name, email address, and phone number.</p>
            </div>
            <div className="form">
              <div className="form-group">
                <h1 className="form-label">
                  Name
                </h1>
                <div id="input">
                  <p>e.g. Stephen King</p>
                </div>
              </div>
              <div className="form-group">
                <h1 className="form-label">
                  Email Address
                </h1>
                <div id="input">
                  <p>e.g. stephenking@lorem.com</p>
                </div>
              </div>
              <div className="form-group">
                <h1 className="form-label">
                  Phone Number
                </h1>
                <div id="input">
                  <p>e.g. +1 234 567 890</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bottom">
            <div className="button">Next Step</div>
          </div>
        </div>
      </div>
    </div>
  );
}
