import '../components/Home.css';
import { Link } from 'react-router-dom'
import Slider from 'react-slick'
import Footer from './footer/footer'
import UniGal from '../images/home/Hero section2.png'
import webVideo from '../images/home/Group 17.png'
import update1 from '../images/home/Rectangle 3.png'
import update2 from '../images/home/Rectangle 32.png'
import update3 from '../images/home/Rectangle 2.png'
import SlideImg from '../images/home/Slide-img.png'
import secImg from '../images/home/Group 106.png'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

export const Home = () => {
  const sliderContents = [
    {text: "Thank you so much for your help. It's exactly what I've been looking for. You won't regret it. It really saves me time and effort. Skilline is exactly what our business has been lacking."},
    {text: "Thank you so much for your help. It's exactly what I've been looking for. You won't regret it. It really saves me time and effort. Skilline is exactly what our business has been lacking."},
    {text: "Thank you so much for your help. It's exactly what I've been looking for. You won't regret it. It really saves me time and effort. Skilline is exactly what our business has been lacking."},
    {text: "Thank you so much for your help. It's exactly what I've been looking for. You won't regret it. It really saves me time and effort. Skilline is exactly what our business has been lacking."},
    {text: "Thank you so much for your help. It's exactly what I've been looking for. You won't regret it. It really saves me time and effort. Skilline is exactly what our business has been lacking."},
    {text: "Thank you so much for your help. It's exactly what I've been looking for. You won't regret it. It really saves me time and effort. Skilline is exactly what our business has been lacking."},
  ];

  const testimonialsSlider = {
    dots: true,
    infinite: true,
    slidesToShow: 2.6,
    slidesToScroll: 1,
    speed: 200,
    autoplay: true,
  }

  return (
    <div className="App">
      <div>
        <section className='section1'>
          <div className='hero-section'>
            <div className='inner-hero'>
              <div className='row items-center m-0 justify-content-center sub-hero'>
                <div className='col-lg-4 hero-text-holder d-flex flex-column gap-2 py-4'>
                  <div className='title'>
                    <h3>Apply to multiple <br/> Universities with ease</h3>
                  </div>
                  <div className='paragraph'>
                    <p>No more stress! Streamline your application process and increase your chances of acceptance with our One-process-multiple application platform</p>
                  </div>
                  <div className='button'>
                    <button className='button-text'>Apply Now</button>
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
                          <Link to='create-account'><p>Create an account</p></Link>
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
            <div className='text-div d-flex '>
              <div className='video-section p-3'>
                <div className='deco d-flex justify-content-between'>
                  <div className='deco-1'></div>
                  <div className='deco-sub d-flex gap-4 flex-column items-flex-end'>
                    <div className='deco-2'></div>
                    <div className='deco-3'></div>
                  </div>
                </div>
                <div className='video-sub'>
                  <img src={webVideo} alt="webVideo"></img>
                  <div className='play-btn'>
                    <button>u</button>
                  </div>
                </div>
              </div>
              <div className='text-section d-flex'>
                <div className='sub-text'>
                  <h2>How about a tour on how to apply?</h2>
                </div>
                <div className='inner-sub'>
                  <p>It’s go time — and we’ll be with you every step of the way. Here’s where you’ll find what you need to take that next step towards a brighter future. Take a quick guide to applying to the Universities of your Choice through six simple steps. It’s that quick and simple</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='section4'>
          <div className='slider-section'>
            <div className='slider-heading'>
              <div>
                <h3>Testimonies from successful applicants</h3>
              </div>
            </div>
            <div className='slider'>
              <Slider {...testimonialsSlider} className='slick-boss'>
                {sliderContents.map((sliderContent) => (
                  <div className='slider-images mx-4'>
                    <div>
                      <svg className='w-100'>
                        <path className='boss' d='M 40 270 l -1 -250 l 465 25 l -37 147'/>
                      </svg>
                      <div className='content'>
                        <div className='text-sec'>
                          <div className='inner-text'>
                            <p>{sliderContent.text}</p>
                          </div>
                        </div>
                        <div className='img-text-sect d-flex'>
                          <img className='img-fluid' src={SlideImg} alt=''></img>
                          <div className='text position-relative d-flex flex-column'>
                            <h3>Joanna Prohaska</h3>
                            <p>Lead Solusion Designer</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </section>
        <section className='section5'>
          <div className='upd-sec'>
            <div className='container py-5 d-flex flex-column gap-5'>
              <div className='text-sec-5 w-100 text-center'>
                <div className='inner-text'>
                  <h2>University News & Updates</h2>
                </div>
              </div>
              <div className='news-sec-holder'>
                <div className='inner-news-sec'>
                  <div className='row gap-4'>
                    <div className='news1 col p-3'>
                      <div className='news1-sec row gap-3'>
                        <div className='img-holder'>
                          <img src={update1} className='img-fluid' alt='img'></img>
                        </div>
                        <div className='sub-head'>
                          <h5>News</h5>
                        </div>
                        <div className='head'>
                          <h3>Class adds $30 million to its balance sheet for a Zoom-friendly edtech solution</h3>
                        </div>
                        <div className='par'>
                          <p>Class, launched less than a year ago by Blackboard co-founder Micheal Chasen, integrates exclusively...</p>
                        </div>
                        <div className='btn'>
                          <a href='jjj'>Read more</a>
                        </div>
                      </div>
                    </div>
                    <div className='news2 col p-3'>
                      <div className='news2-sec row gap-3'>
                        <div className='img-holder'>
                          <img src={update2} className='img-fluid' alt='img'></img>
                        </div>
                        <div className='sub-head'>
                         <h5>Press release</h5>
                        </div>
                        <div className='head'>
                          <h3>Hamilton Engineering University's scholarship programme for Freshers</h3>
                        </div>
                        <div className='par'>
                          <p>Class, launched less than a year ago by Blackboard co-founder Micheal Chasen, integrates exclusively...</p>
                        </div>
                        <div className='btn'>
                          <a href='jjj'>Read more</a>
                        </div>
                      </div>
                    </div>
                    <div className='news3 col p-3'>
                      <div className='news3-sec row gap-3'>
                        <div className='img-holder'>
                         <img src={update3} className='img-fluid' alt='img'></img>
                        </div>
                        <div className='sub-head'>
                          <h5>News</h5>
                        </div>
                        <div className='head'>
                          <h3>Class adds $30 million to its balance sheet for a Zoom-friendly edtech solution</h3>
                        </div>
                        <div className='par'>
                          <p>Class, launched less than a year ago by Blackboard co-founder Micheal Chasen, integrates exclusively...</p>
                        </div>
                        <div className='btn'>
                          <a href='jjj'>Read more</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='news-btn-holder'>
                <div className='inner-btn'>
                  <button>Read more news</button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='section6'>
          <div className='contact-section py-4'>
            <div className='circle-div d-flex items-center justify-content-between'>
              <div className='first-circle'></div>
              <div className='second-circle'></div>
            </div>
            <div className='text-div d-flex '>
              <div className='text-section d-flex'>
                <div className='sub-text'>
                  <h2>Have a question?</h2>
                </div>
                <div className='inner-sub'>
                  <p>We are always ready to help</p>
                </div>
                <div className='txt-button'>
                  <button>Contact our application support team</button>
                </div>
              </div>
              <div className='image-section p-3'>
                <div className='image-sub'>
                  <img src={secImg} alt="webImage"></img>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </div>
  );
}