const toDoInput = document.querySelector("#toDoInput");
const toDoButton = document.querySelector("#toDoButton");
const toDoList = document.querySelector("#toDoList");
let getting_datas = [];

toDoButton.addEventListener("click", function () {
  let value = toDoInput.value;
  toDoInput.value = "";
  getting_datas.push(value);

  const datas = getting_datas
    .map(function (item, index) {
      return `<li class="list-group-item text-dark">
    ${index + 1} ${item} <input type="checkbox" class="ms-5" >
  </li>`;
    })
    .join();
  toDoList.innerHTML = datas;
});
