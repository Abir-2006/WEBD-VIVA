// ------------------------------
// Local Storage Helpers
// ------------------------------
function loadRecipes() {
    let data = localStorage.getItem("recipes");

    if (data !== null) {
        return JSON.parse(data);
    } else {
        return [];
    }
}

function saveRecipes(recipes) {
    localStorage.setItem("recipes", JSON.stringify(recipes));
}

// ------------------------------
// Show All Recipes
// ------------------------------
function renderRecipes() {
    let recipes = loadRecipes();
    let row = document.querySelector("#recipesRow");
    let count = document.querySelector("#count");
    let noRecipes = document.querySelector("#noRecipes");

    row.innerHTML = "";
    count.textContent = recipes.length;

    if (recipes.length === 0) {
        noRecipes.style.display = "";
        return;
    }

    noRecipes.style.display = "none";

    // Loop through recipes
    for (let i = 0; i < recipes.length; i++) {
        let r = recipes[i];

        let col = document.createElement("div");
        col.className = "col-md-4 mb-4";

        let card = document.createElement("div");
        card.className = "card h-100 shadow-sm";
        card.style.borderRadius = "20px";

        let body = document.createElement("div");
        body.className = "card-body p-4";

        // Top RoletBadge + Delete Button)
        let top = document.createElement("div");
        top.className = "d-flex justify-content-between mb-3";

        let badge = document.createElement("span");
        badge.className = "badge px-3 py-2";
        badge.style.borderRadius = "15px";

        if (r.type === "veg") {
            badge.style.background = "#d4edda";
            badge.style.color = "#155724";
            badge.textContent = "🥬 Veg";
        }
        else {
            badge.style.background = "#f8d7da";
            badge.style.color = "#721c24";
            badge.textContent = "🍗 Non-Veg";
        }

        let delBtn = document.createElement("button");
        delBtn.className = "btn btn-sm btn-danger";
        delBtn.style.borderRadius = "10px";
        delBtn.innerHTML = '<i class="fas fa-trash"></i>';
        delBtn.addEventListener("click", function () {
            deleteRecipe(r.id);
        });

        top.appendChild(badge);
        top.appendChild(delBtn);

        // Title
        let title = document.createElement("h4");
        title.className = "fw-bold mb-2";
        title.textContent = r.name;

        // Info (Region, Time, Servings, Difficulty)
        let meta = document.createElement("div");
        meta.className = "text-muted small mb-3";
        meta.innerHTML = `
            <div><i class="fas fa-map-marker-alt text-danger me-2"></i>${r.region || "India"}</div>
            <div><i class="fas fa-clock text-primary me-2"></i>${r.time || "N/A"}</div>
            <div><i class="fas fa-user text-success me-2"></i>${r.servings || "-"} servings</div>
            <div><i class="fas fa-signal text-warning me-2"></i>${r.difficulty}</div>
        `;

        // Date
        let date = document.createElement("small");
        date.className = "text-muted";
        date.textContent = `Added: ${r.createdAt}`;

        // Build Card
        body.insertBefore(top, body.firstChild);
        body.appendChild(title);
        body.appendChild(meta);

        // Description
        if (r.description) {
            let desc = document.createElement("p");
            desc.className = "text-muted small";
            desc.textContent = r.description;
            body.appendChild(desc);
        }

        body.appendChild(date);

        card.appendChild(body);
        col.appendChild(card);
        row.appendChild(col);
    }
}

// ------------------------------
// Delete Recipe
// ------------------------------
function deleteRecipe(id) {
    let userChoice = confirm("Delete this recipe?");
    if (userChoice === false) {
        return;
    }

    let recipes = loadRecipes();
    let updated = [];

    for (let i = 0; i < recipes.length; i++) {
        if (recipes[i].id !== id) {
            updated.push(recipes[i]);
        }
    }

    saveRecipes(updated);
    renderRecipes();
}


// ------------------------------
// Add Recipe
// ------------------------------
function handleAdd() {
    let name = document.querySelector("#name").value.trim();
    if (name === "") {
        alert("Recipe name is required");
        return;
    }

    let recipe = {
        id: Date.now(),
        name: name,
        region: document.querySelector("#region").value,
        time: document.querySelector("#time").value,
        servings: document.querySelector("#servings").value,
        type: document.querySelector("#type").value,
        difficulty: document.querySelector("#difficulty").value,
        description: document.querySelector("#description").value,
        createdAt: new Date().toLocaleDateString()
    };

    let recipes = loadRecipes();
    recipes.push(recipe);
    saveRecipes(recipes);

    showSuccess();
    clearForm();
    renderRecipes();
}

// ------------------------------
// Success Message + Clear Form
// ------------------------------
function showSuccess() {
    let box = document.querySelector("#successAlert");
    box.style.display = "";
    function hideMessage() {
        box.style.display = "none";
    }
    setTimeout(hideMessage, 3000);
}

function clearForm() {
    document.querySelector("#name").value = "";
    document.querySelector("#region").value = "";
    document.querySelector("#time").value = "";
    document.querySelector("#servings").value = "";
    document.querySelector("#type").value = "veg";
    document.querySelector("#difficulty").value = "Easy";
    document.querySelector("#description").value = "";
}

// ------------------------------
// Initialize
// ------------------------------
document.addEventListener("DOMContentLoaded", function () {
    renderRecipes();

    let btn = document.querySelector("#addBtn");
    btn.addEventListener("click", handleAdd);
});