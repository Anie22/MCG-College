import './App.css';
import Navbar from './Navbar/Navbar';
// import Footer from './footer/footer'
import UniGal from './images/home/Hero section2.png'

function App() {
  return (
    <div className="App">
      <div>
        <Navbar />
        <section className='section1'>
          <div className='hero-section'>
            <div className='inner-hero'>
              <div className='row items-center m-0 justify-content-center sub-hero'>
                <div className='col-lg-4 hero-text-holder d-flex flex-column gap-2 py-4'>
                  <div className='title text-light'>
                    <h3>Apply to multiple <br/> Universities with ease</h3>
                  </div>
                  <div className='paragraph text-light'>
                    <p>No more stress! Streamline your application process and increase your chances of acceptance with our One-process-multiple application platform</p>
                  </div>
                  <div className='button'>
                    <button className='text-light'>Apply Now</button>
                  </div>
                </div>
                <div className='col-lg-6'>
                  <img src={UniGal} alt='university girl' className='uni'></img>
                </div>
              </div>
              <div className='inner-hero-border'>
                <div className='sub-border'></div>
              </div>
            </div>
          </div>
        </section>
        <section className='section2'>
          <div className='inner-section'>
            <div className='inner-hero-border'>
              <div className='sub-border'></div>
            </div>
            <div className='container py-5 d-flex flex-column'>
              <div className='title text-center'>
                <div className='inner-title'>
                  <h2>Complete your application in 6 simple steps</h2>
                </div>
                <div className='paragraph'>
                  <p>Mrs. College Guide is one of the leading platforms that makes the applying of students into Universities easy and convenient.  We have streamlined your application process into six(6) simple quick steps.</p>
                </div>
              </div>
              <div className='card-section'>
                <div className='inner-card-section py-5 px-2 row gap-5'>
                  <div className='row top-cards gap-4'>
                    <div className='card1 rounded-4 col'>
                      <div className='inner-card1 p-3 row gap-3 rounded-4'>
                        <div className='card1-logo'></div>
                        <div className='card1-heading'>
                          <h4>Sign in / Create an account</h4>
                        </div>
                        <div className='card1-paragraph'>
                          <p>Get started at anytime by signing into or creating an account and setting up your student profile</p>
                        </div>
                        <div className='card1-link'>
                          <a href='#/'><p>Create an account</p></a>
                        </div>
                      </div>
                    </div>
                    <div className='card2 rounded-4 col'>
                      <div className='inner-card2 p-3 row gap-3 rounded-4'>
                        <div className='card2-logo'></div>
                        <div className='card2-heading'>
                          <h4>Build your University list</h4>
                        </div>
                        <div className='card2-paragraph'>
                          <p>It's easy and straight forward. Search for the universities of your choice and add them to your school list</p>
                        </div>
                        <div className='card2-link'>
                          <a href='#/'><p>Start building your list</p></a>
                        </div>
                      </div>
                    </div>
                    <div className='card3 rounded-4 col'>
                      <div className='inner-card3 p-3 row gap-3 rounded-4'>
                        <div className='card3-logo'></div>
                        <div className='card3-heading'>
                          <h4>Online Billing, Invoicing & Contracts</h4>
                        </div>
                        <div className='card3-paragraph'>
                          <p>Simple and secure control of your Organization's financial and legal transactions. Send customized invoices and contracts.</p>
                        </div>
                        <div className='card3-link'>
                          <a href='#/'><p>Create an account</p></a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='row bottom-cards gap-4'>
                    <div className='card4 rounded-4 col'>
                      <div className='inner-card4 p-3 row gap-3 rounded-4'>
                        <div className='card4-logo'></div>
                        <div className='card4-heading'>
                          <h4>Online Billing, Invoicing & Contracts</h4>
                        </div>
                        <div className='card4-paragraph'>
                          <p>Simple and secure control of your Organization's financial and legal transactions. Send customized invoices and contracts.</p>
                        </div>
                        <div className='card4-link'>
                          <a href='#/'><p>Create an account</p></a>
                        </div>
                      </div>
                    </div>
                    <div className='card5 rounded-4 col'>
                      <div className='inner-card5 p-3 row gap-3 rounded-4'>
                        <div className='card5-logo'></div>
                        <div className='card5-heading'>
                          <h4>Online Billing, Invoicing & Contracts</h4>
                        </div>
                        <div className='card5-paragraph'>
                          <p>Simple and secure control of your Organization's financial and legal transactions. Send customized invoices and contracts.</p>
                        </div>
                        <div className='card5-link'>
                          <a href='#/'><p>Create an account</p></a>
                        </div>
                      </div>
                    </div>
                    <div className='card6 rounded-4 col'>
                      <div className='inner-card6 p-3 row gap-3 rounded-4'>
                        <div className='card6-logo'></div>
                        <div className='card6-heading'>
                          <h4>Online Billing, Invoicing & Contracts</h4>
                        </div>
                        <div className='card6-paragraph'>
                          <p>Simple and secure control of your Organization's financial and legal transactions. Send customized invoices and contracts.</p>
                        </div>
                        <div className='card6-link'>
                          <a href='#/'><p>Create an account</p></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='section3'>
          <div className='tour-section py-4'>
            <div className='circle-div d-flex items-center justify-content-between'>
              <div className='first-circle'></div>
              <div className='second-circle'></div>
            </div>
            <div className='text-div d-flex gap-4'>
              <div className='video-section'>
                <div className='deco'>
                  <div className='deco-1'></div>
                  <div className=''>
                    <div className='deco-2'></div>
                    <div className='deco-3'></div>
                  </div>
                </div>
                <div>
                  {/* <img src={} alt=""></img> */}
                </div>
              </div>
              <div className='text-section bg-dark w-50 h-50'>
                <div></div>
                <div></div>
              </div>
            </div>
          </div>
        </section>
        {/* <Footer /> */}
      </div>
    </div>
  );
}

export default App;
