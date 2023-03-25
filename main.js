// console.log("This is a basic page ")

// const ele = document.createElement("h1");
// ele.innerHTML = "Hello How are you";

// const root = document.getElementById("root");

// root.appendChild(ele);

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "inner1" }, [
    React.createElement("h1", {}, "This is a h1"),
    React.createElement("h2", {}, "This is h2"),
  ]),
  React.createElement("div", { id: "inner2" }, [
    React.createElement("h1", {}, "This is a h11"),
    React.createElement("h2", {}, "This is h22"),
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
