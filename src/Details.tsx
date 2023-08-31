import React, { useState } from "react";
import { Form, useLoaderData } from "react-router-dom";
import { fetchData } from "./lib/marvel";
import "./App.css";
import { Hero } from "./lib/types";

type ParamsInput = {
  id: string;
};

type LoaderInput = {
  params: ParamsInput;
};

type LoaderOutput = {
  hero: Hero;
};

export async function loader({ params }: any): Promise<LoaderOutput> {
  const hero = await fetchData(params.id);
  return { hero };
}

function Details() {
  const loadedData = useLoaderData();
  const asLoaded = loadedData as LoaderOutput;
  return <div>{asLoaded.hero.name}</div>;
}

export default Details;
