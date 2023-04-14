import React from "react";

import poke from "../../imgs/img projects/homepoke.png";
import ecommerce from "../../imgs/img projects/ecommerce.png";

const Projects = () => {
  return (
    <>
      <div class="container">
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
    </>
  );
};

export default Projects;
