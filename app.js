let myLeads = [];
const inputEl = document.querySelector("#input-el");
const inputBtn = document.querySelector("#input-btn");
const ulEL = document.querySelector("#ul-el");

inputBtn.addEventListener("click", function () {
  myLeads.push(inputEl.value);
  console.log(myLeads);
  inputEl.value = "";
  renderLeads();
});

function renderLeads() {
  let listItems = "";
  for (let i = 0; i < myLeads.length; i++) {
    listItems += `<li>
                     <a href = "${myLeads[i]}" target = "_blank">
                        ${myLeads[i]}
                     </a>
                  </li>`;
  }
  ulEL.innerHTML = listItems;
}
