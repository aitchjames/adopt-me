import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

const App = () => {
    return React.createElement("div", {}, [
        React.createElement("h1", {}, "Adopt Me"),
        React.createElement(Pet, {
            name: "Moon",
            animal: "Dog",
            breed: "Jack Russel"
        }),
        React.createElement(Pet, {
            name: "Peeper",
            animal: "Cat",
            breed: "Cats have breeds?"
        }),
        React.createElement(Pet, {
            name: "Salt",
            animal: "Lizard",
            breed: "Gecko"
        })
    ]);
};

render(React.createElement(App), document.getElementById("root"));
