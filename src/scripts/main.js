populateCategoryDropDown();

handleGetJunkClick = () => {
    API.getJunk()
    .then(result => {
        console.log("junk", result);
        buildJunkDom(result);
    });
};

handleGetCategoryClick = () => {
    API.getCategories()
        .then(result => {
            console.log("category", result);
            buildCategoryDom(result);
        });
};

handleGetCategoryDetailClick = () => {
    API.getCategoryWithJunk()
        .then(result => {
            console.log("category list", result);
            buildCategoryDetailDom(result);
        });
};

document.querySelector("#btn-saveCategory").addEventListener("click", event => {
    const category = document.querySelector(".junk__category").value;
    if (category !== "") {

        // Once you have collected all the values, build your data structure
        const categoryObj = {
            name: category
        };

    API.saveCategory(categoryObj)
    .then(parsedResult => {
        console.log("what is the result", parsedResult);
        populateCategoryDropDown();
    });

    }else {
      alert("please add content");
    }
}
);

//save new junk
document.querySelector("#btn-saveJunk").addEventListener("click", event => {
    const junkName = document.querySelector(".junk__name").value;
    const getCategory = document.querySelector(".selectDropDown").value;
    console.log (getCategory);
    if (junkName !== "") {
      // Once you have collected all the values, build your data structure
      const nameObj = {
        name: junkName,
        category: getCategory
      };

      API.saveJunk(nameObj, getCategory).then(parsedResult => {
        console.log("what is the result", parsedResult);
      });
    } else {
      alert("please add content");
    }}
);


document.querySelector("#btn-getJunk").addEventListener("click", handleGetJunkClick);
document.querySelector("#btn-getCategories").addEventListener("click", handleGetCategoryClick);
document.querySelector("#btn-getCategoryDetails").addEventListener("click", handleGetCategoryDetailClick);

const mainContainer = document.querySelector("#container");
const selectionContainer = document.querySelector(".selectContainer");
let selectCategoryInput = document.querySelector(".selectDropDown");





