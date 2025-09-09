import React from "react";
import "./Menu.css";
import { Tab, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import img1 from "../../Assets/f1.png";
import img2 from "../../Assets/f2.png";
import img3 from "../../Assets/f3.png";
import img4 from "../../Assets/f4.png";
import img5 from "../../Assets/f5.png";
import img6 from "../../Assets/f6.png";
import img7 from "../../Assets/f7.png";
import img8 from "../../Assets/f8.png";
import img9 from "../../Assets/f9.png";

const MenuTabs = () => {
  return (
    <section className="card-items-part">
      <Tab.Container defaultActiveKey="home">
        {/* Nav Pills */}
        <Nav variant="pills" className="justify-content-center mb-4">
          <Nav.Item>
            <Nav.Link eventKey="home">Home</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="burger">Burger</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="pizza">Pizza</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="pasta">Pasta</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="fries">Fries</Nav.Link>
          </Nav.Item>
        </Nav>

        {/* Tab Content */}
        <Tab.Content>
          {/* Home Tab */}
          <Tab.Pane eventKey="home">
            <div className="container">
              <div className="row">
                {/* Card 1 */}
                <div className="col-md-4 mb-4">
                  <div className="card">
                    <div className="card-img-container">
                      <img src={img1} alt="home" />
                    </div>
                    <div className="card-body">
                      <h5>Delicious Pizza</h5>
                      <p>
                        Veniam debitis quaerat officiis quasi cupiditate quo,
                        quisquam velit, magnam voluptatem repellendus sed eaque
                      </p>
                      <div className="shop">
                        <p>$20</p>
                        <a href="#">
                          <i className="bi bi-cart2"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card 2 */}
                <div className="col-md-4 mb-4">
                  <div className="card">
                    <div className="card-img-container">
                      <img src={img2} alt="home" />
                    </div>
                    <div className="card-body">
                      <h5>Delicious Pizza</h5>
                      <p>
                        Veniam debitis quaerat officiis quasi cupiditate quo,
                        quisquam velit, magnam voluptatem repellendus sed eaque
                      </p>
                      <div className="shop">
                        <p>$17</p>
                        <a href="#">
                          <i className="bi bi-cart2"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card 3 */}
                <div className="col-md-4 mb-4">
                  <div className="card">
                    <div className="card-img-container">
                      <img src={img3} alt="home" />
                    </div>
                    <div className="card-body">
                      <h5>Delicious Pizza</h5>
                      <p>
                        Veniam debitis quaerat officiis quasi cupiditate quo,
                        quisquam velit, magnam voluptatem repellendus sed eaque
                      </p>
                      <div className="shop">
                        <p>$15</p>
                        <a href="#">
                          <i className="bi bi-cart2"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 mb-4">
                  <div className="card">
                    <div className="card-img-container">
                      <img src={img4} alt="home" />
                    </div>
                    <div className="card-body">
                      <h5>Delicious Pizza</h5>
                      <p>
                        Veniam debitis quaerat officiis quasi cupiditate quo,
                        quisquam velit, magnam voluptatem repellendus sed eaque
                      </p>
                      <div className="shop">
                        <p>$15</p>
                        <a href="#">
                          <i className="bi bi-cart2"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 mb-4">
                  <div className="card">
                    <div className="card-img-container">
                      <img src={img5} alt="home" />
                    </div>
                    <div className="card-body">
                      <h5>Delicious Pizza</h5>
                      <p>
                        Veniam debitis quaerat officiis quasi cupiditate quo,
                        quisquam velit, magnam voluptatem repellendus sed eaque
                      </p>
                      <div className="shop">
                        <p>$15</p>
                        <a href="#">
                          <i className="bi bi-cart2"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 mb-4">
                  <div className="card">
                    <div className="card-img-container">
                      <img src={img6} alt="home" />
                    </div>
                    <div className="card-body">
                      <h5>Delicious Pizza</h5>
                      <p>
                        Veniam debitis quaerat officiis quasi cupiditate quo,
                        quisquam velit, magnam voluptatem repellendus sed eaque
                      </p>
                      <div className="shop">
                        <p>$15</p>
                        <a href="#">
                          <i className="bi bi-cart2"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                 <div className="col-md-4 mb-4">
                  <div className="card">
                    <div className="card-img-container">
                      <img src={img7} alt="home" />
                    </div>
                    <div className="card-body">
                      <h5>Delicious Pizza</h5>
                      <p>
                        Veniam debitis quaerat officiis quasi cupiditate quo,
                        quisquam velit, magnam voluptatem repellendus sed eaque
                      </p>
                      <div className="shop">
                        <p>$20</p>
                        <a href="#">
                          <i className="bi bi-cart2"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                 <div className="col-md-4 mb-4">
                  <div className="card">
                    <div className="card-img-container">
                      <img src={img8} alt="home" />
                    </div>
                    <div className="card-body">
                      <h5>Delicious Pizza</h5>
                      <p>
                        Veniam debitis quaerat officiis quasi cupiditate quo,
                        quisquam velit, magnam voluptatem repellendus sed eaque
                      </p>
                      <div className="shop">
                        <p>$20</p>
                        <a href="#">
                          <i className="bi bi-cart2"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                 <div className="col-md-4 mb-4">
                  <div className="card">
                    <div className="card-img-container">
                      <img src={img9} alt="home" />
                    </div>
                    <div className="card-body">
                      <h5>Delicious Pizza</h5>
                      <p>
                        Veniam debitis quaerat officiis quasi cupiditate quo,
                        quisquam velit, magnam voluptatem repellendus sed eaque
                      </p>
                      <div className="shop">
                        <p>$20</p>
                        <a href="#">
                          <i className="bi bi-cart2"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Tab.Pane>
          {/* Burger Tab */}
          <Tab.Pane eventKey="burger">
            <div className="container">
              <div className="row">
                {/* Card 1 */}
                <div className="col-md-4 mb-4">
                  <div className="card">
                    <div className="card-img-container">
                      <img src={img7} alt="burger" />
                    </div>
                    <div className="card-body">
                      <h5>Delicious Pizza</h5>
                      <p>
                        Veniam debitis quaerat officiis quasi cupiditate quo,
                        quisquam velit, magnam voluptatem repellendus sed eaque
                      </p>
                      <div className="shop">
                        <p>$20</p>
                        <a href="#">
                          <i className="bi bi-cart2"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card 2 */}
                <div className="col-md-4 mb-4">
                  <div className="card">
                    <div className="card-img-container">
                      <img src={img8} alt="burger" />
                    </div>
                    <div className="card-body">
                      <h5>Delicious Pizza</h5>
                      <p>
                        Veniam debitis quaerat officiis quasi cupiditate quo,
                        quisquam velit, magnam voluptatem repellendus sed eaque
                      </p>
                      <div className="shop">
                        <p>$17</p>
                        <a href="#">
                          <i className="bi bi-cart2"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card 3 */}
                <div className="col-md-4 mb-4">
                  <div className="card">
                    <div className="card-img-container">
                      <img src={img2} alt="burger" />
                    </div>
                    <div className="card-body">
                      <h5>Delicious Pizza</h5>
                      <p>
                        Veniam debitis quaerat officiis quasi cupiditate quo,
                        quisquam velit, magnam voluptatem repellendus sed eaque
                      </p>
                      <div className="shop">
                        <p>$15</p>
                        <a href="#">
                          <i className="bi bi-cart2"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Tab.Pane>
          {/* Pizza Tab */}
           <Tab.Pane eventKey="pizza">
            <div className="container">
              <div className="row">
                {/* Card 1 */}
                <div className="col-md-4 mb-4">
                  <div className="card">
                    <div className="card-img-container">
                      <img src={img1} alt="Pizza" />
                    </div>
                    <div className="card-body">
                      <h5>Delicious Pizza</h5>
                      <p>
                        Veniam debitis quaerat officiis quasi cupiditate quo,
                        quisquam velit, magnam voluptatem repellendus sed eaque
                      </p>
                      <div className="shop">
                        <p>$20</p>
                        <a href="#">
                          <i className="bi bi-cart2"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card 2 */}
                <div className="col-md-4 mb-4">
                  <div className="card">
                    <div className="card-img-container">
                      <img src={img6} alt="Pizza" />
                    </div>
                    <div className="card-body">
                      <h5>Delicious Pizza</h5>
                      <p>
                        Veniam debitis quaerat officiis quasi cupiditate quo,
                        quisquam velit, magnam voluptatem repellendus sed eaque
                      </p>
                      <div className="shop">
                        <p>$17</p>
                        <a href="#">
                          <i className="bi bi-cart2"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Card 3 */}
                <div className="col-md-4 mb-4">
                  <div className="card">
                    <div className="card-img-container">
                      <img src={img3} alt="Pizza" />
                    </div>
                    <div className="card-body">
                      <h5>Delicious Pizza</h5>
                      <p>
                        Veniam debitis quaerat officiis quasi cupiditate quo,
                        quisquam velit, magnam voluptatem repellendus sed eaque
                      </p>
                      <div className="shop">
                        <p>$15</p>
                        <a href="#">
                          <i className="bi bi-cart2"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>


              </div>
            </div>
          </Tab.Pane>
          <Tab.Pane eventKey="pasta">
            <div className="container">
              <div className="row">
                {/* Card 1 */}
                <div className="col-md-4 mb-4">
                  <div className="card">
                    <div className="card-img-container">
                      <img src={img4} alt="pasta" />
                    </div>
                    <div className="card-body">
                      <h5>Delicious Pizza</h5>
                      <p>
                        Veniam debitis quaerat officiis quasi cupiditate quo,
                        quisquam velit, magnam voluptatem repellendus sed eaque
                      </p>
                      <div className="shop">
                        <p>$20</p>
                        <a href="#">
                          <i className="bi bi-cart2"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card 2 */}
                <div className="col-md-4 mb-4">
                  <div className="card">
                    <div className="card-img-container">
                      <img src={img9} alt="pasta" />
                    </div>
                    <div className="card-body">
                      <h5>Delicious Pizza</h5>
                      <p>
                        Veniam debitis quaerat officiis quasi cupiditate quo,
                        quisquam velit, magnam voluptatem repellendus sed eaque
                      </p>
                      <div className="shop">
                        <p>$17</p>
                        <a href="#">
                          <i className="bi bi-cart2"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                
                
              </div>
            </div>
          </Tab.Pane>
          {/* Fries TAb*/}
          <Tab.Pane eventKey="fries">
            <div className="container">
              <div className="row">
                {/* Card 1 */}
                <div className="col-md-4 mb-4">
                  <div className="card">
                    <div className="card-img-container">
                      <img src={img5} alt="fries" />
                    </div>
                    <div className="card-body">
                      <h5>Delicious Pizza</h5>
                      <p>
                        Veniam debitis quaerat officiis quasi cupiditate quo,
                        quisquam velit, magnam voluptatem repellendus sed eaque
                      </p>
                      <div className="shop">
                        <p>$20</p>
                        <a href="#">
                          <i className="bi bi-cart2"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

              

              </div>
            </div>
          </Tab.Pane>
        </Tab.Content>
      </Tab.Container>
    </section>
  );
};

export default MenuTabs;
