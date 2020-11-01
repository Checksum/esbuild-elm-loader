import { Elm as Hello } from "./src/Hello.elm";
import { Elm as Clock } from "./src/Clock.elm";

const hello = Hello.Hello.init({
  node: document.getElementById("hello"),
});

const clock = Clock.Clock.init({
  node: document.getElementById("clock"),
});
