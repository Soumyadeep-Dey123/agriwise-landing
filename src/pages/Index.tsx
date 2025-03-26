
const Index = () => {
  return (
    <div className="min-h-screen bg-light">
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
        <div className="container">
          <a className="navbar-brand" href="#"><span className="brand-text">AgriSmart</span></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <div className="hamburger-icon">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link active" href="#hero">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#features">Features</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#testimonials">Testimonials</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">Contact</a>
              </li>
              <li className="nav-item">
                <a className="login-btn" href="#" data-bs-toggle="modal" data-bs-target="#loginModal">Login</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="py-8">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 reveal-text">
              <div className="badge mb-3">Agricultural Technology</div>
              <h1 className="display-3 fw-bold mb-4">Empowering Farmers with Smart Technology</h1>
              <p className="lead mb-4">Leverage data-driven insights to maximize your agricultural output and improve sustainability with our AI-powered tools.</p>
              <div className="d-flex gap-3">
                <a href="#features" className="btn btn-primary">Explore Features</a>
                <a href="#about" className="btn btn-outline-secondary">Learn More</a>
              </div>
            </div>
            <div className="col-lg-6 text-center reveal-text-delay">
              <div className="hero-image-container">
                <img src="https://placehold.co/600x400/4CAF50/FFFFFF/png?text=AgriSmart&font=montserrat" alt="AgriSmart Platform" className="hero-image img-fluid rounded-4" />
              </div>
            </div>
          </div>
        </div>
        <div className="hero-shape">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#f8f9fa" fillOpacity="1" d="M0,224L60,208C120,192,240,160,360,165.3C480,171,600,213,720,213.3C840,213,960,171,1080,149.3C1200,128,1320,128,1380,128L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-8 bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <div className="badge mb-3">Features</div>
            <h2 className="display-5 fw-bold">What We Offer</h2>
            <p className="lead">Our suite of smart agricultural tools to revolutionize your farming practices</p>
          </div>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="feature-card">
                <div className="feature-icon">
                  <i className="fas fa-seedling"></i>
                </div>
                <h3>Crop Prediction</h3>
                <p>Get recommendations on which crops to plant based on soil parameters and environmental conditions.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="feature-card">
                <div className="feature-icon">
                  <i className="fas fa-vial"></i>
                </div>
                <h3>Fertilizer Prediction</h3>
                <p>Receive personalized fertilizer recommendations based on soil nutrient levels and crop requirements.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="feature-card">
                <div className="feature-icon">
                  <i className="fas fa-bug"></i>
                </div>
                <h3>Disease Detection</h3>
                <p>Identify plant diseases early by uploading images for rapid AI-powered diagnosis and treatment recommendations.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="feature-card">
                <div className="feature-icon">
                  <i className="fas fa-chart-line"></i>
                </div>
                <h3>Price Forecasting</h3>
                <p>Stay ahead with market price predictions and trends to maximize your profits during harvest season.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="feature-card">
                <div className="feature-icon">
                  <i className="fas fa-robot"></i>
                </div>
                <h3>AI Chatbot</h3>
                <p>Get instant answers to your farming questions with our knowledgeable agricultural assistant.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="feature-card">
                <div className="feature-icon">
                  <i className="fas fa-mobile-alt"></i>
                </div>
                <h3>Mobile Accessibility</h3>
                <p>Access all our tools from anywhere with our mobile-friendly platform designed for farmers on the go.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Crop Prediction Section */}
      <section id="crop-prediction" className="py-8">
        <div className="container">
          <div className="row align-items-center mb-5">
            <div className="col-lg-6">
              <div className="badge mb-3">AI-Powered</div>
              <h2 className="display-5 fw-bold">Crop Prediction</h2>
              <p className="lead">Get scientific recommendations on which crops to plant based on your soil parameters and environmental conditions.</p>
            </div>
            <div className="col-lg-6 text-end">
              <div className="btn-group">
                <button id="crop-prev-btn" className="btn btn-outline-secondary"><i className="fas fa-chevron-left"></i></button>
                <button id="crop-next-btn" className="btn btn-outline-secondary"><i className="fas fa-chevron-right"></i></button>
              </div>
            </div>
          </div>
          
          <div id="crop-carousel" className="carousel-container overflow-hidden">
            <div class="carousel-slides d-flex transition-all">
              {/* Slide 1 */}
              <div class="carousel-slide flex-shrink-0 w-100">
                <div className="row g-4">
                  <div className="col-md-6">
                    <div className="card h-100 shadow-sm border-0">
                      <div className="card-body p-4">
                        <form id="crop-prediction-form">
                          <div className="mb-3">
                            <label htmlFor="nitrogen" className="form-label">Nitrogen (N) Content</label>
                            <input type="number" className="form-control" id="nitrogen" placeholder="e.g., 40" required />
                          </div>
                          <div className="mb-3">
                            <label htmlFor="phosphorus" className="form-label">Phosphorus (P) Content</label>
                            <input type="number" className="form-control" id="phosphorus" placeholder="e.g., 30" required />
                          </div>
                          <div className="mb-3">
                            <label htmlFor="potassium" className="form-label">Potassium (K) Content</label>
                            <input type="number" className="form-control" id="potassium" placeholder="e.g., 35" required />
                          </div>
                          <div className="mb-3">
                            <label htmlFor="temperature" className="form-label">Temperature (°C)</label>
                            <input type="number" step="0.1" className="form-control" id="temperature" placeholder="e.g., 25.5" required />
                          </div>
                          <div className="mb-3">
                            <label htmlFor="humidity" className="form-label">Humidity (%)</label>
                            <input type="number" step="0.1" className="form-control" id="humidity" placeholder="e.g., 65.2" required />
                          </div>
                          <div className="mb-3">
                            <label htmlFor="ph" className="form-label">pH Level</label>
                            <input type="number" step="0.1" className="form-control" id="ph" placeholder="e.g., 6.5" required />
                          </div>
                          <div className="mb-3">
                            <label htmlFor="rainfall" className="form-label">Rainfall (mm)</label>
                            <input type="number" step="0.1" className="form-control" id="rainfall" placeholder="e.g., 140.5" required />
                          </div>
                          <button type="submit" className="btn btn-primary w-100">Predict Crops</button>
                        </form>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="card h-100 shadow-sm border-0">
                      <div className="card-body p-4">
                        <h4 className="card-title mb-4">How It Works</h4>
                        <div className="d-flex align-items-start mb-4">
                          <div className="icon-square bg-primary bg-opacity-10 text-primary me-3">
                            <i className="fas fa-flask"></i>
                          </div>
                          <div>
                            <h5>Enter Soil Parameters</h5>
                            <p className="text-muted">Input your soil's NPK values, pH level, and environmental conditions like temperature and rainfall.</p>
                          </div>
                        </div>
                        <div className="d-flex align-items-start mb-4">
                          <div className="icon-square bg-primary bg-opacity-10 text-primary me-3">
                            <i className="fas fa-brain"></i>
                          </div>
                          <div>
                            <h5>AI Analysis</h5>
                            <p className="text-muted">Our AI model analyzes your data against thousands of successful crop patterns.</p>
                          </div>
                        </div>
                        <div className="d-flex align-items-start">
                          <div className="icon-square bg-primary bg-opacity-10 text-primary me-3">
                            <i className="fas fa-check-circle"></i>
                          </div>
                          <div>
                            <h5>Get Recommendations</h5>
                            <p className="text-muted">Receive science-backed recommendations for the most suitable crops for your land.</p>
                          </div>
                        </div>
                        <div id="crop-result" className="mt-4 border rounded p-3 bg-light d-none">
                          <h5 className="mb-3">Recommended Crops:</h5>
                          <ul id="crop-recommendations" className="list-group">
                            {/* Results will be populated here */}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Slide 2 */}
              <div class="carousel-slide flex-shrink-0 w-100">
                <div className="row g-4">
                  <div className="col-md-6">
                    <div className="card h-100 shadow-sm border-0">
                      <div className="card-body p-4">
                        <h4 className="card-title mb-4">Benefits of Predictive Crop Planning</h4>
                        <div className="d-flex align-items-start mb-4">
                          <div className="icon-square bg-primary bg-opacity-10 text-primary me-3">
                            <i className="fas fa-chart-pie"></i>
                          </div>
                          <div>
                            <h5>Increased Yield</h5>
                            <p className="text-muted">Planting crops suited to your soil conditions can increase yields by up to 30%.</p>
                          </div>
                        </div>
                        <div className="d-flex align-items-start mb-4">
                          <div className="icon-square bg-primary bg-opacity-10 text-primary me-3">
                            <i className="fas fa-seedling"></i>
                          </div>
                          <div>
                            <h5>Reduced Crop Failure</h5>
                            <p className="text-muted">Minimize the risk of crop failure by selecting crops that will thrive in your specific conditions.</p>
                          </div>
                        </div>
                        <div className="d-flex align-items-start mb-4">
                          <div className="icon-square bg-primary bg-opacity-10 text-primary me-3">
                            <i className="fas fa-hand-holding-usd"></i>
                          </div>
                          <div>
                            <h5>Cost Efficiency</h5>
                            <p className="text-muted">Save on fertilizers and pesticides by growing crops naturally suited to your land.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="card h-100 shadow-sm border-0">
                      <div className="card-body p-4">
                        <h4 className="card-title mb-4">Success Stories</h4>
                        <div className="mb-4 pb-3 border-bottom">
                          <p className="fst-italic">"Using AgriSmart's crop prediction tool, I switched from growing wheat to mustard on my northern field. My yield increased by 45% in the first season alone!"</p>
                          <div className="d-flex align-items-center">
                            <img src="https://placehold.co/50x50/4CAF50/FFFFFF/png?text=RS&font=montserrat" className="rounded-circle me-2" alt="Farmer" />
                            <div>
                              <h6 className="mb-0">Rajesh Singh</h6>
                              <small className="text-muted">Farmer, Punjab</small>
                            </div>
                          </div>
                        </div>
                        <div>
                          <p className="fst-italic">"The crop prediction system recommended I try growing pulses on my less fertile land instead of leaving it fallow. Now I have two productive harvests where I previously had just one."</p>
                          <div className="d-flex align-items-center">
                            <img src="https://placehold.co/50x50/4CAF50/FFFFFF/png?text=AP&font=montserrat" className="rounded-circle me-2" alt="Farmer" />
                            <div>
                              <h6 className="mb-0">Anita Patel</h6>
                              <small className="text-muted">Farmer, Gujarat</small>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-4">
            <div id="crop-indicators" class="carousel-indicators-custom">
              <button type="button" class="active" data-slide="0"></button>
              <button type="button" data-slide="1"></button>
            </div>
          </div>
        </div>
      </section>

      {/* Fertilizer Prediction Section */}
      <section id="fertilizer-prediction" className="py-8 bg-light">
        <div className="container">
          <div className="row align-items-center mb-5">
            <div className="col-lg-6">
              <div className="badge mb-3">Smart Agriculture</div>
              <h2 className="display-5 fw-bold">Fertilizer Recommendation</h2>
              <p className="lead">Get personalized fertilizer recommendations based on your soil nutrient levels and crop requirements.</p>
            </div>
            <div className="col-lg-6 text-end">
              <div className="btn-group">
                <button id="fertilizer-prev-btn" className="btn btn-outline-secondary"><i className="fas fa-chevron-left"></i></button>
                <button id="fertilizer-next-btn" className="btn btn-outline-secondary"><i className="fas fa-chevron-right"></i></button>
              </div>
            </div>
          </div>
          
          <div id="fertilizer-carousel" className="carousel-container overflow-hidden">
            <div class="carousel-slides d-flex transition-all">
              {/* Slide 1 */}
              <div class="carousel-slide flex-shrink-0 w-100">
                <div className="row g-4">
                  <div className="col-md-6">
                    <div className="card h-100 shadow-sm border-0">
                      <div className="card-body p-4">
                        <form id="fertilizer-prediction-form">
                          <div className="mb-3">
                            <label htmlFor="crop-type" className="form-label">Crop Type</label>
                            <select className="form-select" id="crop-type" required>
                              <option value="" selected disabled>Select your crop</option>
                              <option value="Rice">Rice</option>
                              <option value="Wheat">Wheat</option>
                              <option value="Maize">Maize</option>
                              <option value="Cotton">Cotton</option>
                              <option value="Sugarcane">Sugarcane</option>
                              <option value="Pulses">Pulses</option>
                              <option value="Vegetables">Vegetables</option>
                            </select>
                          </div>
                          <div className="mb-3">
                            <label htmlFor="soil-type" className="form-label">Soil Type</label>
                            <select className="form-select" id="soil-type" required>
                              <option value="" selected disabled>Select soil type</option>
                              <option value="Clay">Clay</option>
                              <option value="Sandy">Sandy</option>
                              <option value="Loamy">Loamy</option>
                              <option value="Black">Black</option>
                              <option value="Red">Red</option>
                              <option value="Alluvial">Alluvial</option>
                            </select>
                          </div>
                          <div className="mb-3">
                            <label htmlFor="nitrogen-level" className="form-label">Nitrogen Level (mg/kg)</label>
                            <input type="number" className="form-control" id="nitrogen-level" placeholder="e.g., 40" required />
                          </div>
                          <div className="mb-3">
                            <label htmlFor="phosphorus-level" className="form-label">Phosphorus Level (mg/kg)</label>
                            <input type="number" className="form-control" id="phosphorus-level" placeholder="e.g., 30" required />
                          </div>
                          <div className="mb-3">
                            <label htmlFor="potassium-level" className="form-label">Potassium Level (mg/kg)</label>
                            <input type="number" className="form-control" id="potassium-level" placeholder="e.g., 35" required />
                          </div>
                          <div className="mb-3">
                            <label htmlFor="ph-level" className="form-label">pH Level</label>
                            <input type="number" step="0.1" className="form-control" id="ph-level" placeholder="e.g., 6.5" required />
                          </div>
                          <button type="submit" className="btn btn-primary w-100">Recommend Fertilizer</button>
                        </form>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="card h-100 shadow-sm border-0">
                      <div className="card-body p-4">
                        <h4 className="card-title mb-4">Balanced Nutrition Matters</h4>
                        <div className="d-flex align-items-start mb-4">
                          <div className="icon-square bg-primary bg-opacity-10 text-primary me-3">
                            <i className="fas fa-balance-scale"></i>
                          </div>
                          <div>
                            <h5>Precision Agriculture</h5>
                            <p className="text-muted">Apply exactly what your soil needs, nothing more and nothing less.</p>
                          </div>
                        </div>
                        <div className="d-flex align-items-start mb-4">
                          <div className="icon-square bg-primary bg-opacity-10 text-primary me-3">
                            <i className="fas fa-leaf"></i>
                          </div>
                          <div>
                            <h5>Environmental Impact</h5>
                            <p className="text-muted">Reduce runoff and environmental damage by using the right fertilizer in the right amounts.</p>
                          </div>
                        </div>
                        <div id="fertilizer-result" className="mt-4 border rounded p-3 bg-light d-none">
                          <h5 className="mb-3">Fertilizer Recommendation:</h5>
                          <p id="fertilizer-recommendation" className="mb-0"></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Slide 2 */}
              <div class="carousel-slide flex-shrink-0 w-100">
                <div className="row g-4">
                  <div className="col-md-6">
                    <div className="card h-100 shadow-sm border-0">
                      <div className="card-body p-4">
                        <h4 className="card-title mb-4">Understanding NPK</h4>
                        <div className="d-flex align-items-start mb-4">
                          <div className="icon-square bg-success bg-opacity-10 text-success me-3">
                            <i className="fas fa-flask"></i>
                          </div>
                          <div>
                            <h5>Nitrogen (N)</h5>
                            <p className="text-muted">Promotes leaf growth and forms proteins and chlorophyll. Essential for vegetative growth.</p>
                          </div>
                        </div>
                        <div className="d-flex align-items-start mb-4">
                          <div className="icon-square bg-primary bg-opacity-10 text-primary me-3">
                            <i className="fas fa-seedling"></i>
                          </div>
                          <div>
                            <h5>Phosphorus (P)</h5>
                            <p className="text-muted">Stimulates root growth, helps plants set buds and flowers, and improves vitality.</p>
                          </div>
                        </div>
                        <div className="d-flex align-items-start">
                          <div className="icon-square bg-warning bg-opacity-10 text-warning me-3">
                            <i className="fas fa-apple-alt"></i>
                          </div>
                          <div>
                            <h5>Potassium (K)</h5>
                            <p className="text-muted">Increases disease resistance, enhances flavor, and helps formation of fruits and vegetables.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="card h-100 shadow-sm border-0">
                      <div className="card-body p-4">
                        <h4 className="card-title mb-4">Common Fertilization Mistakes</h4>
                        <div className="d-flex align-items-start mb-4">
                          <div className="icon-square bg-danger bg-opacity-10 text-danger me-3">
                            <i className="fas fa-exclamation-triangle"></i>
                          </div>
                          <div>
                            <h5>Over-fertilization</h5>
                            <p className="text-muted">Applying too much fertilizer can burn plants, contaminate groundwater, and waste money.</p>
                          </div>
                        </div>
                        <div className="d-flex align-items-start mb-4">
                          <div className="icon-square bg-danger bg-opacity-10 text-danger me-3">
                            <i className="fas fa-calendar-times"></i>
                          </div>
                          <div>
                            <h5>Wrong Timing</h5>
                            <p className="text-muted">Applying fertilizers at the wrong growth stage can lead to poor uptake and reduced effectiveness.</p>
                          </div>
                        </div>
                        <div className="d-flex align-items-start">
                          <div className="icon-square bg-danger bg-opacity-10 text-danger me-3">
                            <i className="fas fa-random"></i>
                          </div>
                          <div>
                            <h5>Imbalanced Nutrients</h5>
                            <p className="text-muted">Using a fertilizer with the wrong NPK ratio for your crop can lead to poor growth and development.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-4">
            <div id="fertilizer-indicators" class="carousel-indicators-custom">
              <button type="button" class="active" data-slide="0"></button>
              <button type="button" data-slide="1"></button>
            </div>
          </div>
        </div>
      </section>

      {/* Disease Detection Section */}
      <section id="disease-detection" className="py-8">
        <div className="container">
          <div className="row align-items-center mb-5">
            <div className="col-lg-6">
              <div className="badge mb-3">AI-Powered</div>
              <h2 className="display-5 fw-bold">Plant Disease Detection</h2>
              <p className="lead">Identify plant diseases instantly by uploading images and get treatment recommendations.</p>
            </div>
          </div>
          <div className="row g-4">
            <div className="col-md-6">
              <div className="card h-100 shadow-sm border-0">
                <div className="card-body p-4">
                  <div className="disease-upload-icon mb-4">
                    <i className="fas fa-camera"></i>
                  </div>
                  <h4 className="text-center mb-4">Upload Plant Image</h4>
                  <form id="disease-prediction-form">
                    <div className="mb-4">
                      <label htmlFor="plant-type" className="form-label">Plant Type</label>
                      <select className="form-select" id="plant-type" required>
                        <option value="" selected disabled>Select plant type</option>
                        <option value="Tomato">Tomato</option>
                        <option value="Potato">Potato</option>
                        <option value="Corn">Corn</option>
                        <option value="Apple">Apple</option>
                        <option value="Grape">Grape</option>
                        <option value="Rice">Rice</option>
                        <option value="Wheat">Wheat</option>
                        <option value="Cotton">Cotton</option>
                      </select>
                    </div>
                    <div className="upload-area mb-4">
                      <input type="file" id="disease-image" className="file-input" accept="image/*" />
                      <div className="upload-area-inner">
                        <div className="upload-area-icon">
                          <i className="fas fa-cloud-upload-alt"></i>
                        </div>
                        <h5 className="mb-2">Drag & Drop Image Here</h5>
                        <p className="upload-area-text">or click to browse files</p>
                      </div>
                      <div id="image-preview-container" className="d-none">
                        <div className="upload-area-preview">
                          <img id="image-preview" src="#" alt="Preview" />
                          <button type="button" id="remove-image" className="btn btn-danger btn-sm remove-image">
                            <i className="fas fa-times"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                    <button type="submit" className="btn btn-primary w-100">Detect Disease</button>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card h-100 shadow-sm border-0">
                <div className="card-body p-4">
                  <h4 className="card-title mb-4">How It Works</h4>
                  <div className="d-flex align-items-start mb-4">
                    <div className="icon-square bg-primary bg-opacity-10 text-primary me-3">
                      <i className="fas fa-camera"></i>
                    </div>
                    <div>
                      <h5>Capture & Upload</h5>
                      <p className="text-muted">Take a clear photo of the affected plant part and upload it to our system.</p>
                    </div>
                  </div>
                  <div className="d-flex align-items-start mb-4">
                    <div className="icon-square bg-primary bg-opacity-10 text-primary me-3">
                      <i className="fas fa-brain"></i>
                    </div>
                    <div>
                      <h5>AI Analysis</h5>
                      <p className="text-muted">Our advanced computer vision algorithms analyze the image to identify disease patterns.</p>
                    </div>
                  </div>
                  <div className="d-flex align-items-start mb-4">
                    <div className="icon-square bg-primary bg-opacity-10 text-primary me-3">
                      <i className="fas fa-clipboard-list"></i>
                    </div>
                    <div>
                      <h5>Get Diagnosis</h5>
                      <p className="text-muted">Receive an instant diagnosis of the plant disease along with treatment recommendations.</p>
                    </div>
                  </div>
                  <div id="disease-result" className="mt-4 border rounded p-3 bg-light d-none">
                    <h5 className="mb-3">Disease Detected:</h5>
                    <div className="mb-2">
                      <strong>Name: </strong><span id="disease-name"></span>
                    </div>
                    <div className="mb-2">
                      <strong>Description: </strong><span id="disease-description"></span>
                    </div>
                    <div>
                      <strong>Treatment: </strong><span id="disease-treatment"></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Custom script for the page */}
      <script dangerouslySetInnerHTML={{__html: `
        document.addEventListener('DOMContentLoaded', function() {
          // Carousel functionality for Crop Prediction
          const cropCarouselContainer = document.getElementById('crop-carousel');
          const cropSlides = cropCarouselContainer.querySelector('.carousel-slides');
          const cropPrevBtn = document.getElementById('crop-prev-btn');
          const cropNextBtn = document.getElementById('crop-next-btn');
          const cropIndicators = document.querySelectorAll('#crop-indicators button');
          let cropCurrentSlide = 0;
          
          function slideCrop(index) {
            cropCurrentSlide = index;
            cropSlides.style.transform = \`translateX(-\${index * 100}%)\`;
            
            // Update indicators
            cropIndicators.forEach((indicator, i) => {
              if (i === index) {
                indicator.classList.add('active');
              } else {
                indicator.classList.remove('active');
              }
            });
          }
          
          cropPrevBtn.addEventListener('click', () => {
            cropCurrentSlide = cropCurrentSlide === 0 ? 1 : 0;
            slideCrop(cropCurrentSlide);
          });
          
          cropNextBtn.addEventListener('click', () => {
            cropCurrentSlide = cropCurrentSlide === 0 ? 1 : 0;
            slideCrop(cropCurrentSlide);
          });
          
          cropIndicators.forEach((indicator, index) => {
            indicator.addEventListener('click', () => {
              slideCrop(index);
            });
          });
          
          // Carousel functionality for Fertilizer Prediction
          const fertilizerCarouselContainer = document.getElementById('fertilizer-carousel');
          const fertilizerSlides = fertilizerCarouselContainer.querySelector('.carousel-slides');
          const fertilizerPrevBtn = document.getElementById('fertilizer-prev-btn');
          const fertilizerNextBtn = document.getElementById('fertilizer-next-btn');
          const fertilizerIndicators = document.querySelectorAll('#fertilizer-indicators button');
          let fertilizerCurrentSlide = 0;
          
          function slideFertilizer(index) {
            fertilizerCurrentSlide = index;
            fertilizerSlides.style.transform = \`translateX(-\${index * 100}%)\`;
            
            // Update indicators
            fertilizerIndicators.forEach((indicator, i) => {
              if (i === index) {
                indicator.classList.add('active');
              } else {
                indicator.classList.remove('active');
              }
            });
          }
          
          fertilizerPrevBtn.addEventListener('click', () => {
            fertilizerCurrentSlide = fertilizerCurrentSlide === 0 ? 1 : 0;
            slideFertilizer(fertilizerCurrentSlide);
          });
          
          fertilizerNextBtn.addEventListener('click', () => {
            fertilizerCurrentSlide = fertilizerCurrentSlide === 0 ? 1 : 0;
            slideFertilizer(fertilizerCurrentSlide);
          });
          
          fertilizerIndicators.forEach((indicator, index) => {
            indicator.addEventListener('click', () => {
              slideFertilizer(index);
            });
          });

          // Navbar scroll behavior
          const navbar = document.getElementById('mainNav');

          window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
              navbar.classList.add('navbar-shrink');
            } else {
              navbar.classList.remove('navbar-shrink');
            }
          });

          // Back to top button
          const backToTopButton = document.getElementById('backToTop');

          if (backToTopButton) {
            window.addEventListener('scroll', function() {
              if (window.scrollY > 300) {
                backToTopButton.classList.add('active');
              } else {
                backToTopButton.classList.remove('active');
              }
            });

            backToTopButton.addEventListener('click', function(e) {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            });
          }

          // Smooth scrolling for anchor links
          document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
              if (this.getAttribute('href') !== '#' && !this.getAttribute('href').includes('collapse') && !this.getAttribute('data-bs-toggle')) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                  window.scrollTo({
                    top: target.offsetTop - 80,
                    behavior: 'smooth'
                  });
                }
              }
            });
          });

          // Image upload preview
          const fileInput = document.getElementById('disease-image');
          const previewContainer = document.getElementById('image-preview-container');
          const preview = document.getElementById('image-preview');
          const removeButton = document.getElementById('remove-image');

          if (fileInput) {
            fileInput.addEventListener('change', function() {
              const file = this.files[0];
              if (file) {
                const reader = new FileReader();
                reader.addEventListener('load', function() {
                  preview.setAttribute('src', this.result);
                  previewContainer.classList.remove('d-none');
                });
                reader.readAsDataURL(file);
              }
            });

            removeButton.addEventListener('click', function() {
              preview.setAttribute('src', '#');
              previewContainer.classList.add('d-none');
              fileInput.value = '';
            });
          }

          // Form submissions with simulated responses
          
          // Crop Prediction Form
          const cropForm = document.getElementById('crop-prediction-form');
          if (cropForm) {
            cropForm.addEventListener('submit', function(e) {
              e.preventDefault();
              
              // Simulate loading
              const submitBtn = this.querySelector('button[type="submit"]');
              const originalText = submitBtn.innerHTML;
              submitBtn.innerHTML = '<span class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span> Processing...';
              submitBtn.disabled = true;
              
              // Simulate API call with delay
              setTimeout(function() {
                const resultDiv = document.getElementById('crop-result');
                const recommendationsList = document.getElementById('crop-recommendations');
                
                // Clear previous results
                recommendationsList.innerHTML = '';
                
                // Sample crops based on inputs (in a real app, this would come from an API)
                const sampleCrops = [
                  'Rice',
                  'Wheat',
                  'Maize',
                  'Cotton',
                  'Sugarcane'
                ];
                
                // Select random 3 crops for demo
                const selectedCrops = sampleCrops.sort(() => 0.5 - Math.random()).slice(0, 3);
                
                // Add recommendations to list
                selectedCrops.forEach(crop => {
                  const li = document.createElement('li');
                  li.textContent = crop;
                  li.className = 'list-group-item';
                  recommendationsList.appendChild(li);
                });
                
                // Show results
                resultDiv.classList.remove('d-none');
                
                // Reset button
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
                
                // Scroll to results
                resultDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
              }, 1500);
            });
          }

          // Fertilizer Prediction Form
          const fertilizerForm = document.getElementById('fertilizer-prediction-form');
          if (fertilizerForm) {
            fertilizerForm.addEventListener('submit', function(e) {
              e.preventDefault();
              
              // Simulate loading
              const submitBtn = this.querySelector('button[type="submit"]');
              const originalText = submitBtn.innerHTML;
              submitBtn.innerHTML = '<span class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span> Processing...';
              submitBtn.disabled = true;
              
              // Simulate API call with delay
              setTimeout(function() {
                const resultDiv = document.getElementById('fertilizer-result');
                const recommendation = document.getElementById('fertilizer-recommendation');
                
                // Get crop type for personalized message
                const cropType = document.getElementById('crop-type').value;
                
                // Sample fertilizer recommendations (in a real app, this would come from an API)
                const recommendations = [
                  \`Based on your soil analysis, we recommend using NPK 14-7-14 fertilizer for optimal \${cropType} growth. Apply 250 kg/ha in split doses.\`,
                  \`Your soil shows nitrogen deficiency. We recommend using Urea (46-0-0) at 100 kg/ha to maximize \${cropType} yield.\`,
                  \`For your \${cropType} crop, we recommend a balanced approach with NPK 20-10-10 fertilizer applied at 200 kg/ha, followed by micronutrient spray.\`
                ];
                
                // Select random recommendation for demo
                const selectedRecommendation = recommendations[Math.floor(Math.random() * recommendations.length)];
                recommendation.textContent = selectedRecommendation;
                
                // Show results
                resultDiv.classList.remove('d-none');
                
                // Reset button
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
                
                // Scroll to results
                resultDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
              }, 1500);
            });
          }

          // Disease Prediction Form
          const diseaseForm = document.getElementById('disease-prediction-form');
          if (diseaseForm) {
            diseaseForm.addEventListener('submit', function(e) {
              e.preventDefault();
              
              // Check if image is uploaded
              const fileInput = document.getElementById('disease-image');
              if (!fileInput.files.length) {
                alert('Please upload an image first');
                return;
              }
              
              // Simulate loading
              const submitBtn = this.querySelector('button[type="submit"]');
              const originalText = submitBtn.innerHTML;
              submitBtn.innerHTML = '<span class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span> Analyzing...';
              submitBtn.disabled = true;
              
              // Simulate API call with delay
              setTimeout(function() {
                const resultDiv = document.getElementById('disease-result');
                const diseaseName = document.getElementById('disease-name');
                const diseaseDescription = document.getElementById('disease-description');
                const diseaseTreatment = document.getElementById('disease-treatment');
                
                // Get plant type for personalized message
                const plantType = document.getElementById('plant-type').value;
                
                // Sample diseases and treatments (in a real app, this would come from an AI model)
                const diseases = [
                  {
                    name: 'Late Blight',
                    description: \`Late blight is a destructive disease of \${plantType} caused by the fungus Phytophthora infestans. It spreads quickly in cool, wet conditions.\`,
                    treatment: 'Apply fungicides containing chlorothalonil or mancozeb. Remove and destroy infected plant parts. Improve air circulation around plants.'
                  },
                  {
                    name: 'Powdery Mildew',
                    description: \`Powdery mildew is a fungal disease that appears as white powdery spots on the leaves of \${plantType}. It thrives in warm, dry climates with cool nights.\`,
                    treatment: 'Apply sulfur-based fungicide or neem oil. Increase spacing between plants to improve air circulation. Water at the base of plants, not on foliage.'
                  },
                  {
                    name: 'Bacterial Spot',
                    description: \`Bacterial spot causes small, dark, water-soaked spots on \${plantType} leaves, stems, and fruit. It thrives in warm, humid conditions.\`,
                    treatment: 'Apply copper-based bactericides early in the season. Rotate crops and avoid overhead irrigation. Remove and destroy infected plant debris.'
                  }
                ];
                
                // Select random disease for demo
                const selectedDisease = diseases[Math.floor(Math.random() * diseases.length)];
                diseaseName.textContent = selectedDisease.name;
                diseaseDescription.textContent = selectedDisease.description;
                diseaseTreatment.textContent = selectedDisease.treatment;
                
                // Show results
                resultDiv.classList.remove('d-none');
                
                // Reset button
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
                
                // Scroll to results
                resultDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
              }, 2000);
            });
          }
        });
      `}}></script>

      {/* Custom CSS for carousel functionality */}
      <style dangerouslySetInnerHTML={{__html: `
        .carousel-container {
          position: relative;
          overflow: hidden;
          width: 100%;
        }
        
        .carousel-slides {
          display: flex;
          transition: transform 0.5s ease;
        }
        
        .carousel-slide {
          min-width: 100%;
          flex-shrink: 0;
        }
        
        .carousel-indicators-custom {
          display: flex;
          justify-content: center;
          gap: 8px;
          margin-top: 15px;
        }
        
        .carousel-indicators-custom button {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background-color: #ddd;
          border: none;
          padding: 0;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }
        
        .carousel-indicators-custom button.active {
          background-color: #4CAF50;
        }
      `}}></style>
    </div>
  );
};

export default Index;
