import React from 'react';
import { Carousel } from 'react-bootstrap';

class Testimonials extends React.Component {
  render() {
    return (
      <section id="work" className="portfolio-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="title-box text-center">
                <h3 className="title-a">Testimonials</h3>
                <p className="subtitle-a">
                  Here are the testimonials of my clients
                </p>
                <div className="line-mf"></div>
              </div>
            </div>
          </div>
          <div className="row center">
            <div className="testimonials">
              <Carousel>
                <Carousel.Item>
                  <div className="testimonial-box">
                    <div className="quotations">“</div>
                    <div className="testimonial">
                      I recently hired Hatem twice to implement 2 different
                      websites for my clients. He’s shown great skills and
                      mastery of his tools, and an impressive commitment to
                      perfection and meeting deadlines.
                    </div>
                    <div className="client-name">Ali Farouk</div>
                    <div className="client-profession">
                      {'Software Engineer & Musician'}
                    </div>
                  </div>
                </Carousel.Item>
                <Carousel.Item>
                  <div className="testimonial-box">
                    <div className="quotations">“</div>
                    <div className="testimonial">
                      I hired Hatem to develop my website. He delivered what we
                      requested with great accuracy and in a timely manner He
                      was very receptive to my comments and fixed any issues I
                      had as soon as possible with a professional and friendly
                      attitude. Highly recommended for your projects.
                    </div>
                    <div className="client-name">Mina Samy</div>
                    <div className="client-profession">{'Musician'}</div>
                  </div>
                </Carousel.Item>
              </Carousel>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default Testimonials;
