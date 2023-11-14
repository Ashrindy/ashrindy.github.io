var json = "";

fetch(
  "https://raw.githubusercontent.com/Ashrindy/jsons/main/test.json?token=GHSAT0AAAAAACCZAGYXRNT4HXMMIHOOTKAQZDFGI5Q"
)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    appendData(data);
  })
  .catch(function (err) {
    console.log("error: " + err);
  });

function appendData(data) {
  console.log(data.patchnotes[0].name);
}
