import React from 'react';

import Layout from '../components/Layout';
import PageFooter from '../components/PageFooter';
import Sidebar from "../components/Sidebar"

import Scroll from '../components/Scroll';

const sections = [
  { id: 'top', name: 'Intro', icon: 'fa-home' },
  { id: 'about', name: 'About Me', icon: 'fa-user' },
  {id: 'skills', name:'Education' ,icon:'fa-graduation-cap'},
  { id: 'portfolio', name: 'Projects', icon: 'fa-th' },
  { id: 'contact', name: 'Contact', icon: 'fa-envelope' },
];

const IndexPage = () => (
  <Layout>
    <Sidebar sections={sections} />

    <div id="main">
      <section id="top" className="one dark cover">
        <div className="container">
          <header>
            <h2 className="alt">
              Hi! I'm <strong>Kevin</strong>
              <br />
              Web developer
            </h2>
            <p>I have made few things check it out.</p>
          </header>

          <footer>
            <Scroll type="id" element={'portfolio'}>
              <a href="#portfolio" className="button">
                Show me
              </a>
            </Scroll>
          </footer>
        </div>
      </section>

      
      <section id="about" className="three">
        <div className="container">
          <header>
            <h2>About Me</h2>
          </header>

          <a href="/#" className="image featured">
            <img  className ='image'src='https://res.cloudinary.com/kevin14/image/upload/v1571962422/iangmjh94gygnyf3jbtk.jpg' alt="" />
          </a>

          <p>
            Hi my name is Kevin Hernandez and I am a web developer. I would say that web development has become something that I enjoy doing
          something about having a bug in you code finding it and fixing it is very satisfying. Coding is very fun but it's not the only 
          things I enjoy doing. I was introduced to cars at a very early age by my dad and The Fast and The Furious. My dad is a mechanic 
          so he is always talking about cars and you already know that he made me help him work on cars. Working on cars is a lot like
          coding you try things until you find the solution and if try to implement something new it might end up breaking everything!
          I also like playing video games , genres ranging from RPG’s, MOBAs,  FPS and many more. I have like looking for a better/ more
          efficient way of doing things. In a moba they are always changing the “meta” and you have always adapt to that “meta” which 
          includes looking for a better way to do things to keep up with some of the better players. So yea thats a little insight into
          who Kevin Hernandez is.
          </p>
        </div>
      </section>
      <section id = 'skills'>
        <div className = 'container'>
          <header>

            <div className = 'skill-icons'>
              <span class="fab fa-html5"></span>
              <span class="fab fa-css3-alt"></span>
              <span class="fab fa-react"></span>
              <span class="fab fa-node-js"></span>
            </div>
          </header>
          <div class = "resume">
						<div class = 'education'>
							<h2 class = 'res'>EDUCATION</h2>
							<h5>DevMountain | August 2019 - November 2019</h5>	
							<p>
								This was a 3 month intensive web development bootcamp. Here students learn how to develop a full stack application in a very fast paced environment. 
								Student start out learing th basics of javaScript and HTML after about 4 weeks we start on React. At this point student are expected to create a 
								3/4 stack application. By the 7th week students start on their full stack application and are expected to finish in two weeks. This application was built 
								on React / Redux, styled using HTML CSS/SCSS and the backend is built on Node.js and all data is stored in a SQL datbase.
							</p>
						</div>
					</div>
        </div>
      </section>

      <section id="portfolio" className="two">
        <div className="container">
          <header>
            <h2>Projects</h2>
          </header>
          

          <p>
           
          </p>

          <div className="row">
            <div className="col-4 col-12-mobile">
              <article className="item">
                <a href="/#" className="image fit">
                  <img src='https://res.cloudinary.com/kevin14/image/upload/v1571148814/s14hmoh1oogqolq6iecn.png'alt="" />
                </a>
                <header>
                  <h3>worp.space Profile Page</h3>
                </header>
              </article>
              <article className="item">
                <a href="http://worp.space/#/" target = "_blank" className="image fit">
                  <img src='https://res.cloudinary.com/kevin14/image/upload/v1571149507/mgooimewonmen57gm9yk.png' alt="" />
                </a>
                <header>
                  <h3>worp.space DashBoard</h3>
                </header>
              </article>
            </div>
            <div className="col-4 col-12-mobile">
              <article className="item">
                <a href="http://worp.space/#/login" target="_blank" className="image fit">
                  <img src="https://res.cloudinary.com/kevin14/image/upload/v1572366685/qj6tkkcnvvldpbjttyhf.png" alt="" />
                </a>
                <header>
                  <h3>Login Page for Worp.space</h3>
                </header>
              </article>
              <article className="item">
                <a href="https://trakd.net/#/" target = "_blank"className="image fit">
                  <img src="https://res.cloudinary.com/kevin14/image/upload/v1572367346/fwnrjbyyghltjqrl6wpx.png" alt="" />
                </a>
                <header>
                  <h3>Trakd.net dashboard</h3>
                </header>
              </article>
            </div>
            <div className="col-4 col-12-mobile">
              <article className="item">
                <a href="https://trakd.net/#/" target ="_blank" className="image fit">
                  <img src="https://res.cloudinary.com/kevin14/image/upload/v1572367248/fdulxwg6alubfdgvajxu.png" alt="" />
                </a>
                <header>
                  <h3>Trakd.net login page</h3>
                </header>
              </article>
            </div>
          </div>
        </div>
      </section>


      <section id="contact" className="four">
        <div className="container">
          <header>
            <h2>Contact</h2>
          </header>


          <form method="post" action="#">
            <div className="row">
              <div className="col-6 col-12-mobile">
                <input type="text" name="name" placeholder="Name" />
              </div>
              <div className="col-6 col-12-mobile">
                <input type="text" name="email" placeholder="Email" />
              </div>
              <div className="col-12">
                <textarea name="message" placeholder="Message" />
              </div>
              <div className="col-12">
                <input type="submit" value="Send Message" />
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>

    <PageFooter />
  </Layout>
);

export default IndexPage;
