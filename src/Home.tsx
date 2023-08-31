import React, { useState } from "react";
import "./App.css";
import TextField from "@mui/material/TextField";
import Debounce from "./lib/debounce";
import { fetchData } from "./lib/marvel";
import styled from "styled-components";
import { Hero } from "./lib/types";

const handleChangeOnSearch = async (
  event: React.ChangeEvent<HTMLInputElement>,
  setSearch: Function
) => {
  const val = event.target.value;
  const data = await fetchData(val);
  setSearch(data);
};

const CardsGrid = styled.div`
  display: flex;
`;

const Card = styled.a`
  flex: 1;
  .name {
    color: black;
  }
`;

function Home() {
  const [search, setSearch]: [Hero[], Function] = useState([]);
  console.log(search);
  return (
    <div className="App">
      <header className="App-header">
        <TextField
          id="outlined-basic"
          label="Search"
          variant="outlined"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            Debounce(handleChangeOnSearch, 2000)(e, setSearch);
          }}
        />
      </header>
      <div>
        {search &&
          search.map((s: Hero): any => {
            return (
              <Card className="card" href={`/details/${s.id}`}>
                <div className="name">{s.name}</div>
              </Card>
            );
          })}
      </div>
    </div>
  );
}

export default Home;
