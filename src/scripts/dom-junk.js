const junkDom = (obj) => {
    return `<div>
                ${obj.name}
                ${obj.categoryId}
            </div>`;
};


function buildJunkDom(dataArray) {
    mainContainer.innerHTML = "";
    dataArray.forEach((obj) => {
        mainContainer.innerHTML += junkDom(obj);
    });
};

const buildJunkDetailDom = (data) => {
    mainContainer.innerHTML = "";
    data.forEach(element => {
        mainContainer.innerHTML += junkDetailDom(element);
    });
};

let dropDownOptionsHTML = (obj) => {
  return `<option value="${obj.id}">${obj.name}</option>`;
};