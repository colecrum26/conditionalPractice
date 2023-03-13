let path = window.prompt("pick something");

function makeChoice(path) {
  switch (path) {
    case "good":
      console.log("you have made a good choice");
      window.alert("you have made a good choice");
      break;
    case "bad":
      let rePrompt = window.confirm("are you sure?");
      // if (rePrompt) window.alert("BAD, WRONG!!")
      if (rePrompt === true) {
        window.alert("BAD, WRONG!");
        console.log("BAD, WRONG!");
        makeChoice(path);
      } else {
        path = window.prompt("try again");
        makeChoice(path);
      }
      break;
    case "horror":
      console.log("scaryyyy!!");
      window.alert("do you really want a life of horror?");
      window.confirm("are you sure?");
    default:
      console.log("thank you for choosing");
      window.alert("thank you for choosing");
      break;
  }
}
makeChoice(path);
