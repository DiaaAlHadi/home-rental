
import Carouseproperty from "./Carouselproperty";
import Maincarousel from "./Maincarousel";

import Search from "./Search";
export default function Home() {
  return (
    <>
      <div className="position-relative">
        <Maincarousel />
        <Search />
      </div>
      <div style={{ height: "45vh" }}></div>
      <div className="col-5 mx-auto text-center">
        <h2 className="fw-bold text-decoration-underline underline">
          Explore home in IRAQ
        </h2>
        <p className="mb-5">
          Take a deep dive and browse homes for sale, original neighbourhood
          photos, resident reviews and local insights to find what is right for
          you.
        </p>
      </div>
      <Carouseproperty />
      <div style={{ height: "30vh" }}></div>

    </>
  );
}
