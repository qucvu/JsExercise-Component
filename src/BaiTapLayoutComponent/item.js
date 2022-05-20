import React, { Component } from "react";
// import styles from "./item.module.css"
class Item extends Component {
  items = [
    {
      id: 1,
      icon: "bi bi-collection-fill",
      title: "Fresh new layout",
      desc: "With Bootstrap 5, we've created a fresh new layout for this template!",
    },
    {
      id: 2,
      icon: "bi bi-cloud-download",
      title: "Free to download",
      desc: "As always, Start Bootstrap has a powerful collectin of free templates",
    },
    {
      id: 3,
      icon: "bi bi-card-heading",
      title: "Jumbotron hero header",
      desc: "The heroic part of this template is the jumbotron hero header!",
    },
    {
      id: 4,
      icon: "bi bi-bootstrap",
      title: "Feature boxes",
      desc: "We've created some custom feature boxes using Bootstrap icons!",
    },
    {
      id: 5,
      icon: "bi bi-code",
      title: "Simple clean code",
      desc: "We keep our dependencies up to date and squash bugs as they come!",
    },
    {
      id: 6,
      icon: "bi bi-patch-check",
      title: "A name you trust",
      desc: "Start Bootstrap has been the leader in free Bootstrap templates since 2013!",
    },
  ];

  rederItem = () => {
    return this.items.map((item, index) => {
      return (
        <div key={item.id} className="col-lg-6 col-xxl-4 mb-5">
          <div className="card bg-light border-0 h-100">
            <div className="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
              <div
                className=" +justify-content-center align-items-center bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4"
                style={{
                  width: 64,
                  height: 64,
                  fontSize: 32,
                  display: "inline-flex",
                  transform: "translateY(-50%)",
                }}
              >
                <i className={item.icon} />
              </div>
              <h2 className="fs-4 fw-bold">{item.title}</h2>
              <p className="mb-0">{item.desc}</p>
            </div>
          </div>
        </div>
      );
    });
  };

  render() {
    return (
      <section className="pt-4">
        <div className="container px-lg-5">
          <div className="row gx-lg-5">{this.rederItem()}</div>
        </div>
      </section>
    );
  }
}

export default Item;
