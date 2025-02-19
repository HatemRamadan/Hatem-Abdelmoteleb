import React from 'react';
import myImage from '../img/myImage.png';

class About extends React.Component {
  constructor() {
    super();
    this.state = {
      skills: [
        {
          id: 'Node_skill',
          content: 'Node.js',
          porcentage: '80%',
          value: '80'
        },
        {
          id: 'React_skill',
          content: 'React',
          porcentage: '80%',
          value: '80'
        },
        {
          id: 'JavaScript_skill',
          content: 'JavaScript',
          porcentage: '80%',
          value: '80'
        },
        {
          id: 'TypeScript_skill',
          content: 'TypeScript',
          porcentage: '80%',
          value: '80'
        },
        {
          id: 'Redux_skill',
          content: 'Redux',
          porcentage: '80%',
          value: '80'
        },
        {
          id: 'OOP_skill',
          content: 'OOP',
          porcentage: '80%',
          value: '80'
        },
        {
          id: 'Firebase_skill',
          content: 'Firebase',
          porcentage: '90%',
          value: '90'
        },
        {
          id: 'MongoDB_skill',
          content: 'MongoDB',
          porcentage: '60%',
          value: '60'
        },
        {
          id: 'PostgreSQL_skill',
          content: 'PostgreSQL',
          porcentage: '60%',
          value: '60'
        },
        {
          id: 'GCP_skill',
          content: 'GCP',
          porcentage: '50%',
          value: '50'
        },
        {
          id: 'Selenium_skill',
          content: 'Selenium',
          porcentage: '60%',
          value: '60'
        },
        {
          id: 'Jest_skill',
          content: 'Jest',
          porcentage: '80%',
          value: '80'
        },
        { id: 'HTML5_skill', content: 'HTML5', porcentage: '80%', value: '80' },
        { id: 'CSS3_skill', content: 'CSS3', porcentage: '70%', value: '70' }
      ],
      about_me: [
        {
          id: 'first-p-about',
          content:
          'Results-driven Senior Software Engineer with 5+ years of experience in full-stack development, specializing in Node.js, React.js, Next.js, and GCP.'
        },
        {
          id: 'second-p-about',
          content:
            'Adept at building scalable web applications, optimizing infrastructure, and integrating complex APIs. Passionate about developing robust, user-friendly solutions while ensuring performance, security, and maintainability. Strong problem-solver with experience working remotely in cross-functional, multinational teams.'
        },
        {
          id: 'third-p-about',
          content:
            'I am diligent, conciencious and extremely dedicated to every task that I am given. It is of the utmost importance to me that my clients are satisfied by what I deliver.'
        }
      ]
    };
  }

  render() {
    return (
      <section id="about" className="about-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="box-shadow-full">
                <div className="row">
                  <div className="col-md-6">
                    <div className="row">
                      <div
                        className="col-sm-6 col-md-5"
                        style={{ margin: '0 auto' }}
                      >
                        <div
                          className="about-img"
                          style={{ textAlign: 'center' }}
                        >
                          <img
                            className="img-fluid rounded b-shadow-a"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                    <div className="skill-mf">
                      {/* <p className="title-s">Skill</p> */}
                      {this.state.skills.map(skill => {
                        return (
                          <React.Fragment key={skill.id}>
                            <span>{skill.content}</span>{' '}
                            <span className="pull-right">
                              {skill.porcentage}
                            </span>
                            <div className="progress">
                              <div
                                className="progress-bar"
                                role="progressbar"
                                style={{ width: skill.porcentage }}
                                aria-valuenow={skill.value}
                                aria-valuemin="0"
                                aria-valuemax="100"
                              ></div>
                            </div>
                          </React.Fragment>
                        );
                      })}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="about-me pt-4 pt-md-0">
                      <div className="title-box-2">
                        <h5 className="title-left">About Me</h5>
                      </div>
                      {this.state.about_me.map(content => {
                        return (
                          <p className="lead" key={content.id}>
                            {content.content}
                          </p>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
