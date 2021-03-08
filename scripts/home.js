const inputs = document.getElementsByTagName("input");

if (localStorage.getItem("timer")) {
  for (let index = 0; index < inputs.length; index++) {
    inputs[index].value = Number(
      localStorage.getItem("timer").split(",")[index]
    );
  }
}

document.addEventListener("click", ({ target }) => {
  if (target.id === "up_trabalho") {
    inputs[0].value = Number(inputs[0].value) + 1;
  } else if (target.id === "down_trabalho") {
    inputs[0].value = Number(inputs[0].value) - 1;
  } else if (target.id === "down_pause") {
    inputs[1].value = Number(inputs[1].value) - 1;
  } else if (target.id === "up_pause") {
    inputs[1].value = Number(inputs[1].value) + 1;
  } else if (target.id === "up_session") {
    inputs[2].value = Number(inputs[2].value) + 1;
  } else if (target.id === "down_session") {
    inputs[2].value = Number(inputs[2].value) - 1;
  }
  localStorage.setItem("timer", [
    inputs[0].value,
    inputs[1].value,
    inputs[2].value
  ]);
});
