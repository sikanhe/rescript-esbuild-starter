%%raw("import './App.css'")

module App = {
  @react.component
  let make = () => {
    <div>
      <img src="https://rescript-lang.org/static/rescript_logo_black.svg" />
      <div className="esbuild">
        <img src="https://esbuild.github.io/favicon.svg" />
        <div style={ReactDOM.Style.make(~fontFamily="sans-serif", ())}>
          {React.string("esbuild")}
        </div>
      </div>
    </div>
  }
}

switch ReactDOM.querySelector("#root") {
| Some(root) => ReactDOM.render(<App />, root)
| None => ()
}
