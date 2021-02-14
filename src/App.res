%%raw("import './App.css'")

module App = {
  @react.component
  let make = () => {
    <React.Suspense fallback={<> </>}>
      <div>
        <Img src="https://rescript-lang.org/static/rescript_logo_black.svg" />
        <div className="esbuild">
          <Img src="https://esbuild.github.io/favicon.svg" /> <div> {React.string("esbuild")} </div>
        </div>
      </div>
    </React.Suspense>
  }
}

switch ReactDOM.querySelector("#root") {
| Some(root) => ReactDOM.render(<App />, root)
| None => ()
}
