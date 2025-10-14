import { Link } from "react-router-dom";
import "./Home1.css";
import { front1, front2, front3, new1, new2, new3, new4, new5, new6, new7, exploreBg, soil1 } from "./ImageGallery";
import Footer from "./Footer";

function Home() {
  return (
    <>
      <div id="imageSlider" className="carousel slide" data-bs-ride="carousel" >

        <div className="carousel-indicators">
          <button type="button" data-bs-target="#imageSlider" data-bs-slide-to="0" className="active" aria-current="true"
            aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#imageSlider" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#imageSlider" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>

        <div className="carousel-inner">
          <div className="carousel-item active ci" data-bs-interval="3000">
            <img src={front1} alt="First Slide" />
            <div className="carousel-caption cc">
              <h3>First Slide</h3>
              <p>This is the description for the first slide.</p>
            </div>
          </div>
          <div className="carousel-item ci" data-bs-interval="3000">
            <img src={front2} alt="Second Slide" />
            <div className="carousel-caption cc">
              <h3>Second Slide</h3>
              <p>This is the description for the second slide.</p>
            </div>
          </div>
          <div className="carousel-item ci">
            <img src={front3} alt="Third Slide" />
            <div className="carousel-caption cc">
              <h3>Third Slide</h3>
              <p>This is the description for the third slide.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="label">
        OUR TRENDING PRODUCT
      </div>
      <div className="container my-5">
        <div className="row">
          {/* <!-- Left block: 40% width --> */}
          <div className="col-lg-5 col-md-6 col-12">
            <div className="card h-100">
              <img src={new1} className="card-img-top left-block-img" alt="Single Plant" />
              <div className="card-body">
                <h5 className="card-title">Single Plant</h5>
                <p className="card-text">This is a beautiful indoor plant that purifies air and adds to the aesthetic of your
                  home.</p>
              </div>
            </div>
          </div>

          {/* <!-- Right block: 60% width --> */}
          <div className="col-lg-7 col-md-6 col-12">
            <div className="right-block ">
              {/* <!-- Loop through 6 plant images with content --> */}
              <div className="plant-card card">
                <img src={new2} className="card-img-top plant-img" alt="Plant 1" />
                <div className="card-body plant-info">
                  <h6 className="card-title">Plant Name 1</h6>
                  <p>Price: ₹25</p>
                  <p>Rating: ★★★★☆</p>
                </div>
              </div>
              <div className="plant-card card">
                <img src={new3} className="card-img-top plant-img" alt="Plant 2" />
                <div className="card-body plant-info">
                  <h6 className="card-title">Plant Name 2</h6>
                  <p>Price: ₹30</p>
                  <p>Rating: ★★★☆☆</p>
                </div>
              </div>
              <div className="plant-card card">
                <img src={new4} className="card-img-top plant-img" alt="Plant 3" />
                <div className="card-body plant-info">
                  <h6 className="card-title">Plant Name 3</h6>
                  <p>Price: ₹20</p>
                  <p>Rating: ★★★★★</p>
                </div>
              </div>
              <div className="plant-card card">
                <img src={new5} className="card-img-top plant-img" alt="Plant 4" />
                <div className="card-body plant-info">
                  <h6 className="card-title">Plant Name 4</h6>
                  <p>Price: ₹15</p>
                  <p>Rating: ★★★★☆</p>
                </div>
              </div>
              <div className="plant-card card">
                <img src={new6} className="card-img-top plant-img" alt="Plant 5" />
                <div className="card-body plant-info">
                  <h6 className="card-title">Plant Name 5</h6>
                  <p>Price: ₹22</p>
                  <p>Rating: ★★★★☆</p>
                </div>
              </div>
              <div className="plant-card card">
                <img src={new7} className="card-img-top plant-img" alt="Plant 6" />
                <div className="card-body plant-info">
                  <h6 className="card-title">Plant Name 6</h6>
                  <p>Price: ₹18</p>
                  <p>Rating: ★★★☆☆</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid background-image">
        <div className="content columns">
          <div>
            <p className="para">SPECIAL OFFER</p>
          </div>
          <div>
            <h2>SUCCULENT GARDEN</h2>
          </div>
          <div>
            <h1>GIFT BOXES</h1>
          </div>
          <div>
            <button className="btn1 btn-primary"><Link to="./Categoriespage">Explore the shop</Link></button>
          </div>
        </div>
      </div>

      <section className="features-section">
        <div className="container">
          <h2 className="text-center mb-4 label-3">Our Features</h2>
          <div className="row">
            {/* <!-- Feature 1 --> */}
            <div className="col-md-4">
              <div className="feature-card">
                <i className="fas fa-truck"></i>
                <h4>Fast Delivery</h4>
                <p>Quick and reliable.</p>
              </div>
            </div>
            {/* <!-- Feature 2 --> */}
            <div className="col-md-4">
              <div className="feature-card">
                <i className="fas fa-leaf"></i>
                <h4>Eco-Friendly</h4>
                <p>Sustainable and green practices.</p>
              </div>
            </div>
            {/* <!-- Feature 3 --> */}
            <div className="col-md-4">
              <div className="feature-card">
                <i className="fas fa-dollar-sign"></i>
                <h4>Affordable Prices</h4>
                <p>Quality products at the best prices.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mt-5">
        <div className="row">
          <div className="col-md-12 text-center">
            <h2 className="label-1" id="Soil">Soil Information</h2>
          </div>
        </div>
        <div className="row">
          {/* <!-- Image Card --> */}
          <div className="col-md-6">
            <div className="card mb-3">
              <img src={soil1} className="card-img-top" alt="Soil Image" />
              <div className="card-body">
                <h5 className="card-title">Best Soil Type</h5>
                <p className="card-text">Ensure your plant thrives by using the ideal soil type. Rich, well-draining
                  soil is crucial for healthy root systems and plant growth.</p>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="accordion" id="accordionPanelsStayOpenExample">
              {/* Sandy Soil */}
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseOne"
                    aria-expanded="true"
                    aria-controls="panelsStayOpen-collapseOne"
                  >
                    Sandy Soil
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-collapseOne"
                  className="accordion-collapse collapse show"
                  data-bs-parent="#accordionPanelsStayOpenExample"
                >
                  <div className="accordion-body">
                    <strong>Sandy Soil</strong> is known for its large, loose particles and excellent drainage, making it
                    ideal for plants that require well-draining soil. However, it can dry out quickly and may lack
                    nutrients, so adding organic matter is recommended to improve its fertility.
                  </div>
                </div>
              </div>

              {/* Clay Soil */}
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseTwo"
                    aria-expanded="false"
                    aria-controls="panelsStayOpen-collapseTwo"
                  >
                    Clay Soil
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-collapseTwo"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionPanelsStayOpenExample"
                >
                  <div className="accordion-body">
                    <strong>Clay Soil</strong> has fine particles that retain water well but can become compacted and drain
                    poorly. It's suitable for plants that enjoy moist soil, but it may require amendments like compost or
                    sand to improve aeration and drainage for plants that need a balance of moisture and airflow.
                  </div>
                </div>
              </div>

              {/* Loamy Soil */}
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseThree"
                    aria-expanded="false"
                    aria-controls="panelsStayOpen-collapseThree"
                  >
                    Loamy Soil
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-collapseThree"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionPanelsStayOpenExample"
                >
                  <div className="accordion-body">
                    <strong>Loamy Soil</strong> is a balanced mixture of sand, silt, and clay, making it highly fertile and
                    ideal for most plants. It holds moisture well while allowing excess water to drain, providing a
                    well-rounded environment that supports healthy root systems and robust growth.
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      <Footer></Footer>

      
    </>
  )
}

export default Home;