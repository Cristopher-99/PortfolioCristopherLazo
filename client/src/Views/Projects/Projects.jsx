import React from "react";

import poke from "../../imgs/img projects/homepoke.png";
import ecommerce from "../../imgs/img projects/ecommerce.png";

const Projects = () => {
  return (
    <>
      <div class="container">
        <div
          id="carouselDark"
          class="carousel carousel-dark slide"
          data-bs-ride="carousel"
        >
          <ol class="carousel-indicators">
            <li
              data-bs-target="#carouselDark"
              data-bs-slide-to="0"
              class=""
            ></li>
            <li
              data-bs-target="#carouselDark"
              data-bs-slide-to="1"
              class=""
            ></li>
            <li
              data-bs-target="#carouselDark"
              data-bs-slide-to="2"
              class="active"
              aria-current="true"
            ></li>
          </ol>
          <div class="carousel-inner">
            <div class="carousel-item">
              <img src={poke} class="d-block w-100 h-100" alt="Slide 1" />
              <div class="carousel-caption d-none d-sm-block">
                <h5>First slide label</h5>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </div>
            </div>
            <div class="carousel-item">
              <img src={ecommerce} class="d-block w-100 h-100" alt="Slide 2" />
              <div class="carousel-caption d-none d-sm-block">
                <h5>Second slide label</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
            <div class="carousel-item active">
              <img
                src="assets/images/bs-images/carousel-dark-slide-3.png"
                class="d-block w-100"
                alt="Slide 3"
              />
              <div class="carousel-caption d-none d-sm-block">
                <h5>Third slide label</h5>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </div>
            </div>
          </div>
          <a
            class="carousel-control-prev"
            href="#carouselDark"
            role="button"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </a>
          <a
            class="carousel-control-next"
            href="#carouselDark"
            role="button"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </a>
        </div>

        <div>
          <h1>Hola soy la seccion de proyectos</h1>
          <div class="row row-cols-1 row-cols-sm-2 g-3">
            <div class="col">
              <div class="card">
                <img src={poke} class="card-img-top" alt="card-img-top" />
                <div class="card-body">
                  <h5 class="card-title">Single page Application Pokemon</h5>
                  <p class="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                  <p class="card-text">
                    <small class="text-muted">Last updated 3 mins ago</small>
                  </p>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card">
                <img src={ecommerce} class="card-img-top" alt="card-img-top" />
                <div class="card-body">
                  <h5 class="card-title">SPA Ecommerce</h5>
                  <p class="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                  <p class="card-text">
                    <small class="text-muted">Last updated 3 mins ago</small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
