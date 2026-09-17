import { Outlet } from "react-router";
import MoviesNavbar from "../components/MoviesNavbar";
import { useState } from "react";

export default function MoviesLayout() {
  const [search, setSearch] = useState("");
  return (
    <>
      <MoviesNavbar search={search} setSearch={setSearch} />
      <Outlet context={{ search }} />
    </>
  );
}
