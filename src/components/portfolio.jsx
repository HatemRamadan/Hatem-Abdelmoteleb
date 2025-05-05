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

import proj3 from '../img/proj3.png';
import proj3_2 from '../img/proj3_2.png';
import proj3_3 from '../img/proj3_3.png';

import proj4 from '../img/proj4.png';
import proj4_2 from '../img/proj4_2.png';

import proj5 from '../img/proj5.png';
import proj5_2 from '../img/proj5_2.png';
import proj5_3 from '../img/proj5_3.png';
import proj5_4 from '../img/proj5_4.png';
import proj5_5 from '../img/proj5_5.png';
import proj5_6 from '../img/proj5_6.png';
import proj5_7 from '../img/proj5_7.png';

const PROJECTS = [
  {
    title: 'Blue Mango Studios',
    link: 'https://www.bluemango-studios.com',
    imgs: [proj1, proj1_2, proj1_3, proj1_4, proj1_5, proj1_6],
    stack: 'NextJs Redux SSR SEO HTML5 CSS3'
  },
  {
    title: 'Mina Samy',
    link: 'https://www.minasamy.com',
    imgs: [proj2, proj2_2, proj2_3, proj2_4, proj2_5, proj2_6],
    stack: 'NextJs SSR HTML5 CSS3'
  },
  {
    title: 'Marketplace',
    link: 'https://linkreader.column.us/display/classifieds',
    imgs: [proj3, proj3_2, proj3_3],
    stack: 'NextJs SSR Node.js Firebase GCP HTML5 TailwindCSS'
  },
  {
    title: 'Obituaries',
    link: 'https://linkreader.column.us/display/obituaries',
    imgs: [proj4, proj4_2],
    stack: 'NextJs SSR Node.js Firebase GCP HTML5 TailwindCSS'
  },
  {
    title: 'NoNerds',
    link: 'https://nonerds-web.vercel.app',
    imgs: [proj5, proj5_2, proj5_3, proj5_4, proj5_5, proj5_6, proj5_7],
    stack: 'ReactJs NodeJs Typescript HTML5 TailwindCSS'
  }
]
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
            {PROJECTS.map(project => (
              <>
                <div className="col-md-4">
                  <div className="work-box">
                    <div>
                      <a
                        href={project.imgs[0]}
                        className="work-img"
                        data-lightbox="gallery-vmarine"
                      >
                        <img src={project.imgs[0]} alt="" className="img-fluid" />
                      </a>
                      <div className="work-content">
                        <div className="row">
                          <div
                            className="col-sm-10"
                            onClick={e => {
                              e.stopPropagation();
                              window.open(
                                project.link,
                                '_blank'
                              );
                            }}
                          >
                            <div className="w-title-line">
                              <h2 className="w-title">{project.title}</h2>
                              <span className="w-subtitle"> Preview </span>
                            </div>
                            <div className="w-more">
                              <span className="w-ctegory">
                                {project.stack}
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
                    {
                      project.imgs.slice(1).map(img =>
                        <a
                          href={img}
                          data-lightbox="gallery-vmarine"
                          style={{ display: 'none' }}
                        >
                          jsx-a11y/anchor-has-content warning
                        </a>)
                    }
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;
