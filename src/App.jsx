function App() {
  let res = "";
  let string = "asdfasf";
  string.split("").forEach(el => {
    console.log(el);
  });
  return (
    <div className="App">
      <h1
        className="asdf"
        id="asdf"
        style={{ color: "red" }}
      >
        Hello world!
      </h1>
    </div>
  );
}

export default App;
