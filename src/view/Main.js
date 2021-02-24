import React, { useEffect } from "react";
import About from "./About";
import Blog from "./Blog";
import Landing from "./Landing";
import Project from "./Project";
import Stack from "./Stack";
import Stack2 from "./Stack2";

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
        <Stack2 />
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