function agregarTarea() {
  const input = document.getElementById("tarea");
  const lista = document.getElementById("lista");

  if (input.value.trim() === "") {
    alert("Por favor escribe una tarea");
    return;
  }

  const li = document.createElement("li");
  li.textContent = input.value;

  li.addEventListener("click", () => {
    li.classList.toggle("completada");
  });

  const btnEliminar = document.createElement("button");
  btnEliminar.textContent = "❌";
  btnEliminar.style.marginLeft = "10px";
  btnEliminar.addEventListener("click", () => {
    li.remove();
  });

  li.appendChild(btnEliminar);
  lista.appendChild(li);
  input.value = "";
}




