import React from "react";

export default function Footer() {
  return (
    <div className="pt-5">
      <div>
        <h6 className="text-center mt-5 text-danger">
          <a
            className="mt-5 text-danger"
            href="https://github.com/dsjuneau/home-wallet"
          >
            Find it on GitHub <i className="fab fa-github" />
          </a>
        </h6>
        <div className="mt-2 container text-center">
          <small>
            *Zestimate in Home Profile provided &copy; Zillow, Inc. 2006-2016.
            <br />
            Use is subject to{" "}
            <a
              href="https://www.zillow.com/corp/Terms.htm"
              target="_blank"
              rel="noopener noreferrer"
            >
              Terms of Use
            </a>
            <br />
            <a
              href="https://www.zillow.com/zestimate/"
              target="_blank"
              rel="noopener noreferrer"
            >
              What's a Zestimate?
            </a>
          </small>
        </div>
      </div>
    </div>
  );
}
