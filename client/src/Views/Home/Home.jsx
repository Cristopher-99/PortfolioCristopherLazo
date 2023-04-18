import React from "react";
import foto from "../../imgs/img perfil/foto.jpg";
import cv from "../../imgs/CV/CV_Cristopher_Lazo.pdf";
const Home = () => {
  return (
    <div class="container">
      <div class="card mt-2">
        <div class="row g-0">
          <div class="col-5 col-sm-4">
            <img
              src={foto}
              class="img-fluid w-100 h-90 rounded  border border-primary"
              alt="card-horizontal-image"
            />
          </div>
          <div class="col-7 col-sm-8">
            <div class="card-body">
              <h5 class="card-title h2">Cristopher Alexander Lazo</h5>
              <p class="card-text">Hola Bienvenidos a mi portfolio !!</p>
              <p class="card-text"></p>

              <div class="Descarga">
                <button class="btn btn-success ">
                  <a
                    class="text-white h5"
                    href={cv}
                    target="_blank"
                    rel="noopener noreferrer"
                    download="CV_Cristopher_Lazo.pdf"
                    style={{ textDecoration: "none" }}
                  >
                    Descargar mi CV <i class="bi bi-file-earmark-pdf h3"></i>
                  </a>
                </button>
              </div>

              <p class="card-text">
                <small class="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
        </div>
        <div class="d-flex align-items-start">
          <div
            class="nav flex-column nav-pills me-3 w-90"
            id="v-pills-tab"
            role="tablist"
            aria-orientation="vertical"
          >
            <a
              class="nav-link active"
              id="v-pills-home-tab"
              data-bs-toggle="pill"
              href="#v-pills-home"
              role="tab"
              aria-controls="v-pills-home"
              aria-selected="true"
            >
              Lenguajes de Programacion
            </a>
            <a
              class="nav-link"
              id="v-pills-profile-tab"
              data-bs-toggle="pill"
              href="#v-pills-profile"
              role="tab"
              aria-controls="v-pills-profile"
              aria-selected="false"
            >
              Tecnologias
            </a>
            <a
              class="nav-link"
              id="v-pills-messages-tab"
              data-bs-toggle="pill"
              href="#v-pills-messages"
              role="tab"
              aria-controls="v-pills-messages"
              aria-selected="false"
            >
              Educacion
            </a>
            <a
              class="nav-link"
              id="v-pills-settings-tab"
              data-bs-toggle="pill"
              href="#v-pills-settings"
              role="tab"
              aria-controls="v-pills-settings"
              aria-selected="false"
            >
              Experiencia
            </a>
          </div>
          <div class="tab-content" id="v-pills-tabContent">
            <div
              class="tab-pane fade show active"
              id="v-pills-home"
              role="tabpanel"
              aria-labelledby="v-pills-home-tab"
            >
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis
              aperiam accusantium facere minus totam, id cumque sequi ea harum
              necessitatibus animi inventore, sunt iste dicta libero consectetur
              ab eligendi repudiandae.
            </div>
            <div
              class="tab-pane fade"
              id="v-pills-profile"
              role="tabpanel"
              aria-labelledby="v-pills-profile-tab"
            >
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id
              ducimus veniam optio porro impedit amet odio aliquam officia non
              nobis quisquam soluta repudiandae, earum nulla.
            </div>
            <div
              class="tab-pane fade"
              id="v-pills-messages"
              role="tabpanel"
              aria-labelledby="v-pills-messages-tab"
            >
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Repellat, dolores blanditiis labore praesentium sunt aperiam
              adipisci voluptatem minus tempore voluptatibus, aspernatur illum
              temporibus! Rem, quidem? Reiciendis ex explicabo perferendis
              nobis.
            </div>
            <div
              class="tab-pane fade"
              id="v-pills-settings"
              role="tabpanel"
              aria-labelledby="v-pills-settings-tab"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
              consectetur voluptates inventore adipisci quaerat asperiores ab
              blanditiis excepturi sunt, assumenda est ad voluptatum, iste
              provident?
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
