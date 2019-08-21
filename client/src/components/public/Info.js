import React from "react";
import zillowImage from "../../images/zillow.jpg";
import calendarImage from "../../images/calendar.jpg";
import repairImage from "../../images/repair.jpg";

export default function Info() {
  return (
    <div className="bg bg-home pt-5">
      <div className="container mt-3">
        <div className="card-header bg-secondary text-white text-center mt-5">
          <h3 className="mt-2 ">Welcome to Home Wallet</h3>
        </div>
        <div className="card mt-3">
          <div className="card-body" />
          <p className="p-3" style={{ fontSize: "20px" }}>
            Home Wallet helps you prioritize and keep track of home repairs and
            maintenance, both major and minor. Create your own list of vendors
            to keep track of who did what when and how much it cost.
          </p>
          <p className="p-3" style={{ fontSize: "20px" }}>
            To start, simply enter some basic data about the home. This helps
            HomeWallet to determine which repairs and maintenance items need to
            be tracked. Choose from a dashboard or a calendar view to see
            upcoming scheduled repairs.
          </p>
        </div>
      </div>
      <div>
        <div className="container">
          <form>
            <div className="mt-3 card-header bg-secondary text-white text-center">
              <h3 className="mt-2 ">Features</h3>
            </div>
            <div className="row text-center">
              <div className="col-4 mb-3 mt-5">
                <div className="card">
                  <img
                    src={zillowImage}
                    className="img-fluid"
                    style={{ width: "100%" }}
                    alt="document-management"
                  />
                  <div className="card-body">
                    <h5 className="card-title mt-4">
                      Create Profile with Zillow
                    </h5>
                  </div>
                </div>
              </div>
              {/* <!-- card --> */}

              <div className="col-4 mb-3 mt-5">
                <div className="card">
                  <img
                    src={calendarImage}
                    className="img-fluid"
                    style={{ width: "100%" }}
                    alt="calendar-reminder"
                  />
                  <div className="card-body">
                    <h5 className="card-title">View Home Calendar </h5>
                  </div>
                </div>
              </div>
              {/* <!-- card --> */}
              <div className="col-4 mb-3 mt-5">
                <div className="card">
                  <img
                    src={repairImage}
                    className="img-fluid"
                    style={{ width: "100%" }}
                    alt="preventative-maintenance"
                  />
                  <div className="card-body">
                    <h5 className="card-title mt-4">
                      Track Repairs and Maintenance
                    </h5>
                  </div>
                </div>
              </div>
              {/* <!-- card --> */}
            </div>
            <div className="form-group text-center">
              <a href="/Register/" className="btn btn-success mb-3">
                Click Here to Register
              </a>
              <p>
                &nbsp;&nbsp;&nbsp; Already have an account? &nbsp;&nbsp;&nbsp;
                <a href="/login">Login</a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
