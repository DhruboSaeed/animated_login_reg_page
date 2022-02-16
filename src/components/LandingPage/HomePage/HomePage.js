import React from "react";
import "./style.css";

function HomePage() {
  return (
    <div>
      <div className="toolPg">
        <div className="main_container">
          <div className="container mt10">
            <div className="toolPgHeader">
              <h1 className="title">Web Email Finder</h1>
              <div className="desc">
                Extract email addresses and phone numbers from any websites!
              </div>
            </div>

            <div className="toolpgBody">
              <form className="form-design">
                <div className="form-group">
                  <label className="level-design">
                    Enter one domain/URL per line Below And Press Extract Email
                    :-
                  </label>
                  <textarea
                    rows="4"
                    className="form-control"
                    spellCheck="false"
                  ></textarea>
                  <div className="justify-content-end d-flex ">
                    <small className="text-secondary">
                      0/100 Unique Websites entered
                    </small>
                  </div>
                </div>
                <div className="form-group">
                  <label>Set/Arrange Email Priority</label>
                  <div className="drag-sort">
                    <div className="sort-wrapper noselect">
                      <div className="inner domain">@domain</div>
                      <div className="inner">info@</div>
                      <div className="inner">sales@</div>
                      <div className="inner">support@</div>
                      <div className="inner">contact@</div>
                      <div className="inner">admin@</div>
                      <div className="inner">editor@</div>
                      <div className="inner">hello@</div>
                      <div className="inner">marketing@</div>
                      <div className="inner">feedback@</div>
                      <div className="inner">hr@</div>
                      <div className="inner">team@</div>
                      <div className="inner">customerservice@</div>
                      <div className="inner">office@</div>
                      <div className="inner">mail@</div>
                      <div className="inner">enquiries@</div>
                      <div className="inner free">@gmail</div>
                      <div className="inner free">@hotmail</div>
                      <div className="inner free">@yahoo</div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4">
                    <div className="form-group">
                      <div className="d-flex align-items-center">
                        <label class="switch">
                          <input type="checkbox" />
                          <span class="slider round"></span>
                        </label>
                        <span>Extract Phone Numbers</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      <div className="d-flex align-items-center">
                        <label class="switch">
                          <input type="checkbox" />
                          <span class="slider round"></span>
                        </label>
                        <span>Extract Social Media Profiles</span>
                      </div>
                    </div>
                  </div>
                </div>
                <hr />
                <div className="d-flex">
                  <button className="btn btn-dark" type="button">
                    {" "}
                    Extract Emails
                  </button>
                  <button className="btn btn-warning" type="button">
                    Reset
                  </button>
                  <button className="btn btn-secondary" type="button">
                    Report Error
                  </button>
                </div>
              </form>
            </div>

            <div className="package-details">
              <div className="row">
                <div className="heading-details">
                  <p>
                    Email finder is a very important online tool in the digital
                    marketing sphere, getting a good Web Email Finder is good,
                    but getting a fast one is even better. SoftTechLab
                    represents speed – we don’t just deliver email finder
                    services like every other company, we provide that
                    opportunity for digital marketers to experience the fastest
                    Web email finder tool, something that can only be found on
                    SoftTechLab.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
