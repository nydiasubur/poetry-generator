let generatedPoems = document.querySelector("#generated-poems");
let formSubmission = document.querySelector("#form-submission");
let topicElement = document.querySelector("#topic");
formSubmission.addEventListener("submit", generatePoem);

function displayAIPoem(response) {
  console.log("displayPoem function entered");

  new Typewriter("#generated-poems", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
    deleteSpeed: 40,
    delay: 25,
    loop: false,
  });
}
function generatePoem(event) {
  event.preventDefault();
  let topic = topicElement.value;
  let key = "tc84aadoa14ab4fdf5f3430525cff939";
  let prompt = `generate a beautiful poem about ${topic} based on the topic provided`;
  let context = `you're a romantic poem inspired by sapho. follow the topic specified by the user as the prompt and generate a poem based on that in HTML. 
  each comma or full stop is seperated with a <br/>, and each new line is seperated with <br/> <br/>. do NOT include poem title. align left.`;
  let url = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${key}`;

  console.log(`topic: ${topic}`);
  console.log(`url: ${url}`);
  generatedPoems.innerHTML = `<div class="blink">⏳ generating poem about ${topic}...</div>`;

  axios
    .get(url)
    .then(displayAIPoem)
    .catch(function (error) {
      // handle error
      console.log(error);
    });
}
