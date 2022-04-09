// const textinput = document.getElementById('list')
// const hasil_ti = document.getElementById('hasil_ti')
// textinput.addEventListener('change', (e) => {
//     e.preventDefault()
//     hasil_ti.innerHTML = e.target.value
//     filterCar(e.target.value)
// }
// )

const available = () => {
  let getDriver = document.getElementById("driver").value;

  return getDriver;
};
const date = () => {
  let getDate = document.getElementById("datelist").value;
  return getDate;
};
const time = () => {
  let getTime = document.getElementById("timelist").value;
  return getTime;
};

const capacity = () => {
  let getCapacity = document.getElementById("seat").value;

  return getCapacity;
};

const button = document.getElementById("tombolButton");
button.addEventListener("click", (e) => {
  e.preventDefault();
  filterCar(available(), date(), time(), capacity());
});
