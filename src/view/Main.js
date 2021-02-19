import React, { useEffect } from "react";
import About from "./About";
import Blog from "./Blog";
import Landing from "./Landing";
import Project from "./Project";
import Stack from "./Stack";

// components





function Main() {




  return (
    <div>
      <section>
        <Landing />
      </section>

      <section>
        <About />
      </section>

      <section>
        <Stack />
      </section>

      <section>
        <Blog />
      </section>

      <section>
        <Project />
      </section>

    </div>
  )

}

export default Main;