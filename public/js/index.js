const config = { elements: [] };

const renderJSON = () => {
  document.getElementById("json").textContent = JSON.stringify(
    config,
    undefined,
    2
  );
};

renderJSON();

const addElement = () => {
  const title = document.getElementById("imageBlockTitle").value;
  const subtitle = document.getElementById("imageBlockSubtitle").value;
  const image = document.getElementById("imageBlockImage").value;
  const link = document.getElementById("imageBlockLink").value;

  console.log(title);
  config.elements.push({ type: "imageBlock", title, subtitle, image, link });
  renderJSON();

  document.getElementById("imageBlockTitle").value = "";
  document.getElementById("imageBlockSubtitle").value = "";
  document.getElementById("imageBlockImage").value = "";
  document.getElementById("imageBlockLink").value = "";
};

function onChangeType() {
  var x = document.getElementById("type").value;
  console.log("on change type", x);
}

function onSubmitForm(e) {
  e.preventDefault();

  return false;
}

function generate() {
  fetch(`${window.origin}/generate`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(config),
  })
    .then((res) => {
      console.log("res", res);
    })
    .catch(() => {
      const errElement = document.getElementById("err");
      errElement.innerHTML = "Error";
      errElement.setAttribute("class", "error");
    });
}
