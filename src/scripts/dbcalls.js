console.log("What's in the junk drawer?");

const API = {
  getCategories: function() {
    return fetch("http://localhost:8088/category").then(response =>
      response.json()
    );
  },
  getJunk: function() {
    return fetch("http://localhost:8088/junk").then(response =>
      response.json()
    );
  },
  getJunkWithCategory: function() {
    return fetch("http://localhost:8088/category/1?_embed=junk").then(
      response => response.json()
    );
  },
  getCategoryWithJunk: function() {
    return fetch("http://localhost:8088/category/1?_embed=junk").then(
      response => response.json()
    );
  },
  saveCategory: function(obj) {
    return fetch("http://localhost:8088/category", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(obj)
    }).then(response => response.json());
  },
  saveJunk: function(obj) {
    return fetch("http://localhost:8088/junk", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(obj)
    }).then(response => response.json());
  }
};

const populateCategoryDropDown = () => {
  API.getCategories().then(result => {
    selectCategoryInput.innerHTML = "";
    result.forEach(category => {
      selectCategoryInput.innerHTML += dropDownOptionsHTML(category);
    });
  });
};