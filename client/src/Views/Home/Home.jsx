import React from "react";

const Home = () => {
  return (
    <section
      id="hero"
      class="d-flex flex-column justify-content-center align-items-center"
    >
      <div class="hero-container" data-aos="fade-in">
        <h2>Hola, Me Llamo Cristopher Alexander Lazo </h2>
        <p>
          I'm{" "}
          <span
            class="typed"
            data-typed-items="Designer, Developer, Freelancer, Photographer"
          ></span>
        </p>
      </div>
    </section>
  );
};

export default Home;
