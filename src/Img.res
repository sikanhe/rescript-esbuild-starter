type state = Loading(Js.Promise.t<string>) | Success
module Map = Belt.MutableMap.String
let cache = Map.make()

@new external makeImage: unit => {..} = "window.Image"

let throwPromise: Js.Promise.t<'a> => unit = %raw(`
  function(promise) {
    throw promise
  }
`)

let read = src => {
  switch Map.get(cache, src) {
  | Some(Success) => ()
  | Some(Loading(p)) => throwPromise(p)
  | None =>
    let p = Js.Promise.make((~resolve, ~reject) => {
      let image = makeImage()
      image["src"] = src
      image["onload"] = (. ()) => {
        cache->Map.set(src, Success)
        resolve(. src)
      }
      image["onerror"] = reject
    })

    cache->Map.set(src, Loading(p))
    throwPromise(p)
  }
}

@react.component
let make = (~src) => {
  read(src)
  <img src />
}
