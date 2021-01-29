import React from 'react';

//import project images
import proj1 from '../img/proj1.jpg';
import proj1_2 from '../img/proj1_2.jpg';
import proj1_3 from '../img/proj1_3.jpg';
import proj1_4 from '../img/proj1_4.jpg';
import proj1_5 from '../img/proj1_5.jpg';
import proj1_6 from '../img/proj1_6.jpg';

import proj2 from '../img/proj2.jpg';
import proj2_2 from '../img/proj2_2.jpg';
import proj2_3 from '../img/proj2_3.jpg';
import proj2_4 from '../img/proj2_4.jpg';
import proj2_5 from '../img/proj2_5.jpg';
import proj2_6 from '../img/proj2_6.jpg';

class Portfolio extends React.Component {
  render() {
    return (
      <section id="work" className="portfolio-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="title-box text-center">
                <h3 className="title-a">Portfolio</h3>
                <p className="subtitle-a">
                  Here are the projects that I implemented for my clients
                </p>
                <div className="line-mf"></div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="work-box">
                <div>
                  <a
                    href={proj1}
                    className="work-img"
                    data-lightbox="gallery-vmarine"
                  >
                    <img src={proj1} alt="" className="img-fluid" />
                  </a>
                  <div className="work-content">
                    <div className="row">
                      <div
                        className="col-sm-10"
                        onClick={e => {
                          e.stopPropagation();
                          window.open(
                            'https://www.bluemango-studios.com',
                            '_blank'
                          );
                        }}
                      >
                        <div className="w-title-line">
                          <h2 className="w-title">Blue Mango Studios</h2>
                          <span className="w-subtitle"> Preview </span>
                        </div>
                        <div className="w-more">
                          <span className="w-ctegory">
                            NextJs Redux SSR SEO HTML5 CSS3
                          </span>
                        </div>
                      </div>
                      <div className="col-sm-2">
                        <div className="w-like">
                          <span className="ion-ios-plus-outline"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <a
                  href={proj1_2}
                  data-lightbox="gallery-vmarine"
                  style={{ display: 'none' }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={proj1_3}
                  data-lightbox="gallery-vmarine"
                  style={{ display: 'none' }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={proj1_4}
                  data-lightbox="gallery-vmarine"
                  style={{ display: 'none' }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={proj1_5}
                  data-lightbox="gallery-vmarine"
                  style={{ display: 'none' }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={proj1_6}
                  data-lightbox="gallery-vmarine"
                  style={{ display: 'none' }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">
                <div>
                  <a
                    href={proj2}
                    data-lightbox="gallery-aguadeluz"
                    className="work-img"
                  >
                    <img src={proj2} alt="" className="img-fluid" />
                  </a>
                  <div className="work-content">
                    <div className="row">
                      <div
                        className="col-sm-10"
                        onClick={e => {
                          e.stopPropagation();
                          window.open('https://www.minasamy.com', '_blank');
                        }}
                      >
                        <div className="w-title-line">
                          <h2 className="w-title">Mina Samy</h2>
                          <span className="w-subtitle"> Preview </span>
                        </div>
                        <div className="w-more">
                          <span className="w-ctegory">
                            NextJs SSR HTML5 CSS3
                          </span>{' '}
                        </div>
                      </div>
                      <div className="col-sm-2">
                        <div className="w-like">
                          <span className="ion-ios-plus-outline"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <a
                  href={proj2_2}
                  data-lightbox="gallery-aguadeluz"
                  style={{ display: 'none' }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={proj2_3}
                  data-lightbox="gallery-aguadeluz"
                  style={{ display: 'none' }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={proj2_4}
                  data-lightbox="gallery-aguadeluz"
                  style={{ display: 'none' }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={proj2_5}
                  data-lightbox="gallery-aguadeluz"
                  style={{ display: 'none' }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={proj2_6}
                  data-lightbox="gallery-aguadeluz"
                  style={{ display: 'none' }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;
