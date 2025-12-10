/* ========================================
   PLACEHOLDER RECIPE DATA
   In the future, this will be replaced with API calls
   ======================================== */

const recipes = [
    {
        id: 1,
        title: "Classic Pancakes",
        category: "breakfast",
        emoji: "🥞",
        prepTime: "15 min",
        difficulty: "Easy",
        difficultyEmoji: "👶",
        ingredients: [
            { emoji: "🥚", name: "Eggs" },
            { emoji: "🥛", name: "Milk" },
            { emoji: "🌾", name: "Flour" },
            { emoji: "🧈", name: "Butter" },
            { emoji: "🍯", name: "Honey" }
        ]
    },
    {
        id: 2,
        title: "Fresh Garden Salad",
        category: "salads",
        emoji: "🥗",
        prepTime: "10 min",
        difficulty: "Easy",
        difficultyEmoji: "👶",
        ingredients: [
            { emoji: "🥬", name: "Lettuce" },
            { emoji: "🍅", name: "Tomato" },
            { emoji: "🥒", name: "Cucumber" },
            { emoji: "🫒", name: "Olives" },
            { emoji: "🧀", name: "Cheese" },
            { emoji: "🥕", name: "Carrot" }
        ]
    },
    {
        id: 3,
        title: "Margherita Pizza",
        category: "pizza",
        emoji: "🍕",
        prepTime: "30 min",
        difficulty: "Medium",
        difficultyEmoji: "👨‍🍳",
        ingredients: [
            { emoji: "🌾", name: "Dough" },
            { emoji: "🍅", name: "Tomato Sauce" },
            { emoji: "🧀", name: "Mozzarella" },
            { emoji: "🌿", name: "Basil" },
            { emoji: "🫒", name: "Olive Oil" }
        ]
    },
    {
        id: 4,
        title: "Chocolate Brownies",
        category: "desserts",
        emoji: "🍰",
        prepTime: "45 min",
        difficulty: "Medium",
        difficultyEmoji: "👨‍🍳",
        ingredients: [
            { emoji: "🍫", name: "Chocolate" },
            { emoji: "🥚", name: "Eggs" },
            { emoji: "🌾", name: "Flour" },
            { emoji: "🧈", name: "Butter" },
            { emoji: "🍬", name: "Sugar" }
        ]
    },
    {
        id: 5,
        title: "Grilled Steak",
        category: "meat",
        emoji: "🥩",
        prepTime: "25 min",
        difficulty: "Hard",
        difficultyEmoji: "👨‍🍳‍🔥",
        ingredients: [
            { emoji: "🥩", name: "Beef Steak" },
            { emoji: "🧂", name: "Salt" },
            { emoji: "🌶️", name: "Pepper" },
            { emoji: "🧄", name: "Garlic" },
            { emoji: "🧈", name: "Butter" },
            { emoji: "🌿", name: "Rosemary" }
        ]
    },
    {
        id: 6,
        title: "Avocado Toast",
        category: "breakfast",
        emoji: "🥑",
        prepTime: "5 min",
        difficulty: "Easy",
        difficultyEmoji: "👶",
        ingredients: [
            { emoji: "🥑", name: "Avocado" },
            { emoji: "🍞", name: "Bread" },
            { emoji: "🧂", name: "Salt" },
            { emoji: "🌶️", name: "Red Pepper" },
            { emoji: "🍋", name: "Lemon" }
        ]
    },
    {
        id: 7,
        title: "Caesar Salad",
        category: "salads",
        emoji: "🥗",
        prepTime: "15 min",
        difficulty: "Easy",
        difficultyEmoji: "👶",
        ingredients: [
            { emoji: "🥬", name: "Romaine" },
            { emoji: "🧀", name: "Parmesan" },
            { emoji: "🍞", name: "Croutons" },
            { emoji: "🥚", name: "Egg" },
            { emoji: "🫒", name: "Olive Oil" },
            { emoji: "🧄", name: "Garlic" }
        ]
    },
    {
        id: 8,
        title: "Pepperoni Pizza",
        category: "pizza",
        emoji: "🍕",
        prepTime: "35 min",
        difficulty: "Medium",
        difficultyEmoji: "👨‍🍳",
        ingredients: [
            { emoji: "🌾", name: "Dough" },
            { emoji: "🍅", name: "Tomato Sauce" },
            { emoji: "🧀", name: "Cheese" },
            { emoji: "🥓", name: "Pepperoni" },
            { emoji: "🫒", name: "Olive Oil" }
        ]
    },
    {
        id: 9,
        title: "Strawberry Cheesecake",
        category: "desserts",
        emoji: "🍓",
        prepTime: "60 min",
        difficulty: "Hard",
        difficultyEmoji: "👨‍🍳‍🔥",
        ingredients: [
            { emoji: "🍓", name: "Strawberries" },
            { emoji: "🧀", name: "Cream Cheese" },
            { emoji: "🍪", name: "Graham Crackers" },
            { emoji: "🥚", name: "Eggs" },
            { emoji: "🍬", name: "Sugar" },
            { emoji: "🧈", name: "Butter" }
        ]
    },
    {
        id: 10,
        title: "BBQ Chicken",
        category: "meat",
        emoji: "🍗",
        prepTime: "40 min",
        difficulty: "Medium",
        difficultyEmoji: "👨‍🍳",
        ingredients: [
            { emoji: "🍗", name: "Chicken" },
            { emoji: "🍯", name: "BBQ Sauce" },
            { emoji: "🧄", name: "Garlic" },
            { emoji: "🧅", name: "Onion" },
            { emoji: "🌶️", name: "Paprika" }
        ]
    }
    ,
    {
        id: 11,
        title: "French Toast",
        category: "breakfast",
        emoji: "🍞",
        prepTime: "15 min",
        difficulty: "Easy",
        difficultyEmoji: "👶",
        ingredients: [
            { emoji: "🍞", name: "Bread" },
            { emoji: "🥚", name: "Eggs" },
            { emoji: "🥛", name: "Milk" },
            { emoji: "🍯", name: "Maple Syrup" }
        ]
    },
    {
        id: 12,
        title: "Smoothie Bowl",
        category: "breakfast",
        emoji: "🥣",
        prepTime: "10 min",
        difficulty: "Easy",
        difficultyEmoji: "👶",
        ingredients: [
            { emoji: "🍌", name: "Banana" },
            { emoji: "🍓", name: "Berries" },
            { emoji: "🥥", name: "Coconut" },
            { emoji: "🥛", name: "Milk or Yogurt" }
        ]
    },
    {
        id: 13,
        title: "Cheese Omelette",
        category: "breakfast",
        emoji: "🍳",
        prepTime: "8 min",
        difficulty: "Easy",
        difficultyEmoji: "👶",
        ingredients: [
            { emoji: "🥚", name: "Eggs" },
            { emoji: "🧀", name: "Cheese" },
            { emoji: "🧂", name: "Salt" },
            { emoji: "🧈", name: "Butter" }
        ]
    },
    {
        id: 14,
        title: "Bagel with Lox",
        category: "breakfast",
        emoji: "🥯",
        prepTime: "5 min",
        difficulty: "Easy",
        difficultyEmoji: "👶",
        ingredients: [
            { emoji: "🥯", name: "Bagel" },
            { emoji: "🐟", name: "Smoked Salmon" },
            { emoji: "🧅", name: "Onion" },
            { emoji: "🧀", name: "Cream Cheese" }
        ]
    },
    {
        id: 15,
        title: "Chia Pudding",
        category: "breakfast",
        emoji: "🍮",
        prepTime: "5 min + chill",
        difficulty: "Easy",
        difficultyEmoji: "👶",
        ingredients: [
            { emoji: "🌱", name: "Chia Seeds" },
            { emoji: "🥛", name: "Milk" },
            { emoji: "🍯", name: "Honey" },
            { emoji: "🍓", name: "Fruit" }
        ]
    },
    {
        id: 16,
        title: "Greek Salad",
        category: "salads",
        emoji: "🇬🇷",
        prepTime: "10 min",
        difficulty: "Easy",
        difficultyEmoji: "👶",
        ingredients: [
            { emoji: "🥬", name: "Lettuce" },
            { emoji: "🍅", name: "Tomato" },
            { emoji: "🧀", name: "Feta" },
            { emoji: "🫒", name: "Olives" }
        ]
    },
    {
        id: 17,
        title: "Waldorf Salad",
        category: "salads",
        emoji: "🥗",
        prepTime: "15 min",
        difficulty: "Easy",
        difficultyEmoji: "👶",
        ingredients: [
            { emoji: "🍎", name: "Apple" },
            { emoji: "🌰", name: "Walnuts" },
            { emoji: "🥬", name: "Celery" },
            { emoji: "🍯", name: "Dressing" }
        ]
    },
    {
        id: 18,
        title: "Quinoa Salad",
        category: "salads",
        emoji: "🥣",
        prepTime: "20 min",
        difficulty: "Medium",
        difficultyEmoji: "👨‍🍳",
        ingredients: [
            { emoji: "🌾", name: "Quinoa" },
            { emoji: "🥒", name: "Cucumber" },
            { emoji: "🍅", name: "Tomato" },
            { emoji: "🍋", name: "Lemon" }
        ]
    },
    {
        id: 19,
        title: "Caprese Salad",
        category: "salads",
        emoji: "🍅",
        prepTime: "10 min",
        difficulty: "Easy",
        difficultyEmoji: "👶",
        ingredients: [
            { emoji: "🍅", name: "Tomato" },
            { emoji: "🧀", name: "Mozzarella" },
            { emoji: "🌿", name: "Basil" },
            { emoji: "🫒", name: "Olive Oil" }
        ]
    },
    {
        id: 20,
        title: "Hawaiian Pizza",
        category: "pizza",
        emoji: "🍍",
        prepTime: "30 min",
        difficulty: "Medium",
        difficultyEmoji: "👨‍🍳",
        ingredients: [
            { emoji: "🌾", name: "Dough" },
            { emoji: "🍅", name: "Tomato Sauce" },
            { emoji: "🧀", name: "Cheese" },
            { emoji: "🍍", name: "Pineapple" },
            { emoji: "🥓", name: "Ham" }
        ]
    },
    {
        id: 21,
        title: "Four Cheese Pizza",
        category: "pizza",
        emoji: "🧀",
        prepTime: "30 min",
        difficulty: "Medium",
        difficultyEmoji: "👨‍🍳",
        ingredients: [
            { emoji: "🌾", name: "Dough" },
            { emoji: "🧀", name: "Mozzarella" },
            { emoji: "🧀", name: "Parmesan" },
            { emoji: "🧀", name: "Gorgonzola" },
            { emoji: "🧀", name: "Ricotta" }
        ]
    },
    {
        id: 22,
        title: "Veggie Pizza",
        category: "pizza",
        emoji: "🥦",
        prepTime: "30 min",
        difficulty: "Medium",
        difficultyEmoji: "👨‍🍳",
        ingredients: [
            { emoji: "🌾", name: "Dough" },
            { emoji: "🍅", name: "Tomato Sauce" },
            { emoji: "🧀", name: "Cheese" },
            { emoji: "🥦", name: "Broccoli" },
            { emoji: "🌶️", name: "Peppers" }
        ]
    },
    {
        id: 23,
        title: "BBQ Chicken Pizza",
        category: "pizza",
        emoji: "🍗",
        prepTime: "35 min",
        difficulty: "Medium",
        difficultyEmoji: "👨‍🍳",
        ingredients: [
            { emoji: "🌾", name: "Dough" },
            { emoji: "🍗", name: "Chicken" },
            { emoji: "🍯", name: "BBQ Sauce" },
            { emoji: "🧅", name: "Onion" }
        ]
    },
    {
        id: 24,
        title: "Apple Pie",
        category: "desserts",
        emoji: "🥧",
        prepTime: "70 min",
        difficulty: "Medium",
        difficultyEmoji: "👨‍🍳",
        ingredients: [
            { emoji: "🍎", name: "Apples" },
            { emoji: "🌾", name: "Flour" },
            { emoji: "🧈", name: "Butter" },
            { emoji: "🍬", name: "Sugar" }
        ]
    },
    {
        id: 25,
        title: "Lemon Tart",
        category: "desserts",
        emoji: "🍋",
        prepTime: "50 min",
        difficulty: "Medium",
        difficultyEmoji: "👨‍🍳",
        ingredients: [
            { emoji: "🍋", name: "Lemon" },
            { emoji: "🌾", name: "Flour" },
            { emoji: "🧈", name: "Butter" },
            { emoji: "🍬", name: "Sugar" }
        ]
    },
    {
        id: 26,
        title: "Tiramisu",
        category: "desserts",
        emoji: "☕",
        prepTime: "45 min + chill",
        difficulty: "Medium",
        difficultyEmoji: "👨‍🍳",
        ingredients: [
            { emoji: "☕", name: "Coffee" },
            { emoji: "🧀", name: "Mascarpone" },
            { emoji: "🍪", name: "Ladyfingers" },
            { emoji: "🍬", name: "Sugar" }
        ]
    },
    {
        id: 27,
        title: "Ice Cream Sundae",
        category: "desserts",
        emoji: "🍨",
        prepTime: "5 min",
        difficulty: "Easy",
        difficultyEmoji: "👶",
        ingredients: [
            { emoji: "🍦", name: "Ice Cream" },
            { emoji: "🍫", name: "Chocolate Sauce" },
            { emoji: "🍒", name: "Cherry" },
            { emoji: "🍪", name: "Cookie" }
        ]
    },
    {
        id: 28,
        title: "Lamb Chops",
        category: "meat",
        emoji: "🍖",
        prepTime: "30 min",
        difficulty: "Hard",
        difficultyEmoji: "👨‍🍳‍🔥",
        ingredients: [
            { emoji: "🍖", name: "Lamb Chops" },
            { emoji: "🧂", name: "Salt" },
            { emoji: "🌿", name: "Rosemary" },
            { emoji: "🧈", name: "Butter" }
        ]
    },
    {
        id: 29,
        title: "Pulled Pork",
        category: "meat",
        emoji: "🥪",
        prepTime: "6 hrs",
        difficulty: "Hard",
        difficultyEmoji: "👨‍🍳‍🔥",
        ingredients: [
            { emoji: "🐖", name: "Pork Shoulder" },
            { emoji: "🍯", name: "BBQ Sauce" },
            { emoji: "🧂", name: "Spices" },
            { emoji: "🥬", name: "Coleslaw" }
        ]
    },
    {
        id: 30,
        title: "Italian Meatballs",
        category: "meat",
        emoji: "🍝",
        prepTime: "45 min",
        difficulty: "Medium",
        difficultyEmoji: "👨‍🍳",
        ingredients: [
            { emoji: "🥩", name: "Ground Beef" },
            { emoji: "🌾", name: "Breadcrumbs" },
            { emoji: "🧅", name: "Onion" },
            { emoji: "🍅", name: "Tomato Sauce" }
        ]
    }
];

/* ========================================
   STATE MANAGEMENT
   ======================================== */

let currentFilter = 'all';
let currentDifficulty = 'all';
let searchQuery = '';
// Load favorites from localStorage (persist across sessions)
let favorites = new Set((JSON.parse(localStorage.getItem('favorites') || '[]') || []).map(id => Number(id)));

/* ========================================
   DOM ELEMENTS
   ======================================== */

const searchBar = document.getElementById('searchBar');
const recipeGrid = document.getElementById('recipeGrid');
const noResults = document.getElementById('noResults');
const categoryButtons = document.querySelectorAll('.category-btn[data-category]');
const difficultyButtons = document.querySelectorAll('.difficulty-btn');
const modal = document.getElementById('recipeModal');
const modalBody = document.getElementById('modalBody');
const closeBtn = document.querySelector('.close-btn');
const themeToggle = document.getElementById('themeToggle');

/* ========================================
   RENDER FUNCTIONS
   ======================================== */

/**
 * Renders all recipe cards based on current filters
 */
function renderRecipes() {
    // Filter recipes based on category and search query
    const filteredRecipes = recipes.filter(recipe => {
        const matchesCategory = currentFilter === 'all' || recipe.category === currentFilter;
        const matchesSearch = recipe.title.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesDifficulty = currentDifficulty === 'all' || recipe.difficulty.toLowerCase() === currentDifficulty;
        return matchesCategory && matchesSearch && matchesDifficulty;
    });

    // Clear the grid
    recipeGrid.innerHTML = '';

    // Show/hide no results message
    if (filteredRecipes.length === 0) {
        noResults.style.display = 'block';
        return;
    } else {
        noResults.style.display = 'none';
    }

    // Render each recipe card
    filteredRecipes.forEach(recipe => {
        const card = createRecipeCard(recipe);
        recipeGrid.appendChild(card);
    });
}

/**
 * Creates a recipe card element
 * @param {Object} recipe - Recipe data object
 * @returns {HTMLElement} Recipe card element
 */
function createRecipeCard(recipe) {
    const card = document.createElement('div');
    card.className = 'recipe-card';
    card.dataset.recipeId = recipe.id;

    // Show only first 4 ingredients in preview
    const previewIngredients = recipe.ingredients.slice(0, 4);
    const hasMore = recipe.ingredients.length > 4;

    card.innerHTML = `
        <div class="recipe-image">${recipe.emoji}</div>
        <div class="recipe-content">
            <div class="recipe-header">
                <h3 class="recipe-title">${recipe.title}</h3>
                <button class="favorite-btn ${favorites.has(recipe.id) ? 'favorited' : ''}" 
                        data-recipe-id="${recipe.id}">
                    ❤️
                </button>
            </div>
            <div class="recipe-meta">
                <span class="meta-item">⏱️ ${recipe.prepTime}</span>
                <span class="meta-item">${recipe.difficultyEmoji} ${recipe.difficulty}</span>
            </div>
            <div class="ingredient-preview">
                ${previewIngredients.map(ing => 
                    `<span class="ingredient-emoji" title="${ing.name}">${ing.emoji}</span>`
                ).join('')}
                ${hasMore ? `<span class="ingredient-emoji">+${recipe.ingredients.length - 4}</span>` : ''}
            </div>
            <button class="view-more" data-recipe-id="${recipe.id}">
                View Recipe
            </button>
        </div>
    `;

    // Add event listeners
    const favoriteBtn = card.querySelector('.favorite-btn');
    favoriteBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleFavorite(recipe.id);
    });

    const viewMoreBtn = card.querySelector('.view-more');
    viewMoreBtn.addEventListener('click', () => {
        openRecipeModal(recipe);
    });

    card.addEventListener('click', (e) => {
        if (!e.target.classList.contains('favorite-btn')) {
            openRecipeModal(recipe);
        }
    });

    return card;
}

/**
 * Opens the recipe modal with full details
 * @param {Object} recipe - Recipe data object
 */
// Capitalizes each word in a category (e.g., "breakfast" -> "Breakfast")
function capitalizeWords(str) {
    if (!str) return '';
    return String(str)
        .split(' ')
        .map(s => s.charAt(0).toUpperCase() + s.slice(1))
        .join(' ');
}

function openRecipeModal(recipe) {
    modalBody.innerHTML = `
        <div class="modal-recipe-image">${recipe.emoji}</div>
        <h2 class="modal-recipe-title">${recipe.title}</h2>
        <div class="modal-recipe-meta">
            <span class="meta-item">⏱️ ${recipe.prepTime}</span>
            <span class="meta-item">${recipe.difficultyEmoji} ${recipe.difficulty}</span>
            <span class="meta-item">📁 ${capitalizeWords(recipe.category)}</span>
        </div>
        <div class="ingredients-section">
            <h3>🥘 Ingredients</h3>
            <div class="ingredients-list">
                ${recipe.ingredients.map(ing => `
                    <div class="ingredient-card">
                        <span class="emoji">${ing.emoji}</span>
                        <span class="name">${ing.name}</span>
                    </div>
                `).join('')}
            </div>
        </div>
    `;

    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

/**
 * Closes the recipe modal
 */
function closeRecipeModal() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

/* ========================================
   EVENT HANDLERS
   ======================================== */

/**
 * Toggles favorite status for a recipe
 * @param {number} recipeId - Recipe ID
 * 
 * TODO: In the future, persist favorites to localStorage or backend API
 */
function toggleFavorite(recipeId) {
    if (favorites.has(recipeId)) {
        favorites.delete(recipeId);
    } else {
        favorites.add(recipeId);
    }
    // Persist favorites to localStorage
    try {
        localStorage.setItem('favorites', JSON.stringify(Array.from(favorites)));
    } catch (e) {
        console.warn('Could not save favorites to localStorage', e);
    }
    renderRecipes();
}

/**
 * Handles category filter changes
 * @param {string} category - Category name
 */
function filterByCategory(category) {
    currentFilter = category;
    
    // Update active button
    categoryButtons.forEach(btn => {
        if (btn.dataset.category === category) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });

    renderRecipes();
}

/**
 * Filters recipes by difficulty
 * @param {string} difficulty - 'easy' | 'medium' | 'hard' | 'all'
 */
function filterByDifficulty(difficulty) {
    currentDifficulty = difficulty;

    // Update active button styles
    difficultyButtons.forEach(btn => {
        if (btn.dataset.difficulty === difficulty) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });

    renderRecipes();
}

/**
 * Handles search input changes
 * @param {string} query - Search query
 */
function searchRecipes(query) {
    searchQuery = query;
    renderRecipes();
}

/* ========================================
   EVENT LISTENERS
   ======================================== */

// Search bar input with debouncing for better performance
let searchTimeout;
searchBar.addEventListener('input', (e) => {
    clearTimeout(searchTimeout);
    searchTimeout = setTimeout(() => {
        searchRecipes(e.target.value);
    }, 300);
});

// Category button clicks
categoryButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        filterByCategory(btn.dataset.category);
    });
});

// Difficulty button clicks
difficultyButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        filterByDifficulty(btn.dataset.difficulty);
    });
});

// Modal close events
closeBtn.addEventListener('click', closeRecipeModal);

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeRecipeModal();
    }
});

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.style.display === 'block') {
        closeRecipeModal();
    }
});

/* ========================================
   INITIALIZATION
   ======================================== */

// Initial render on page load
document.addEventListener('DOMContentLoaded', () => {
    // Apply theme preference before rendering so UI paints correctly
    initTheme();
    renderRecipes();
});

/* ========================================
   THEME (dark/light) HANDLING
   ======================================== */

function applyTheme(theme) {
    if (theme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
        if (themeToggle) {
            themeToggle.textContent = '☀️ Light';
            themeToggle.setAttribute('aria-pressed', 'true');
        }
    } else {
        document.documentElement.removeAttribute('data-theme');
        if (themeToggle) {
            themeToggle.textContent = '🌙 Dark';
            themeToggle.setAttribute('aria-pressed', 'false');
        }
    }
}

function initTheme() {
    try {
        const saved = localStorage.getItem('theme'); // 'dark' | 'light' | null
        if (saved === 'dark' || saved === 'light') {
            applyTheme(saved === 'dark' ? 'dark' : 'light');
            return;
        }
    } catch (e) {
        // ignore localStorage errors
    }

    // No saved preference; respect system preference
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        applyTheme('dark');
    } else {
        applyTheme('light');
    }

    // Listen for system changes and adapt only if user hasn't explicitly saved a preference
    if (window.matchMedia) {
        const mq = window.matchMedia('(prefers-color-scheme: dark)');
        mq.addEventListener && mq.addEventListener('change', e => {
            try {
                if (!localStorage.getItem('theme')) {
                    applyTheme(e.matches ? 'dark' : 'light');
                }
            } catch (er) {}
        });
    }

    // Wire toggle button
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
            const newTheme = isDark ? 'light' : 'dark';
            applyTheme(newTheme === 'dark' ? 'dark' : 'light');
            try { localStorage.setItem('theme', newTheme === 'dark' ? 'dark' : 'light'); } catch (e) {}
        });
    }
}

/* ========================================
   FUTURE API INTEGRATION PLACEHOLDER
   ======================================== */

/**
 * Fetch recipes from API (placeholder)
 * 
 * In the future, replace the hardcoded recipes array with API calls
 * 
 * Example implementation:
 * 
 * async function fetchRecipes() {
 *     try {
 *         const response = await fetch('https://api.example.com/recipes');
 *         const data = await response.json();
 *         return data;
 *     } catch (error) {
 *         console.error('Error fetching recipes:', error);
 *         return [];
 *     }
 * }
 */

/**
 * Search recipes via API (placeholder)
 * 
 * async function searchRecipesAPI(query) {
 *     try {
 *         const response = await fetch(`https://api.example.com/recipes/search?q=${query}`);
 *         const data = await response.json();
 *         return data;
 *     } catch (error) {
 *         console.error('Error searching recipes:', error);
 *         return [];
 *     }
 * }
 */

/**
 * Save favorite to backend (placeholder)
 * 
 * async function saveFavorite(recipeId, isFavorite) {
 *     try {
 *         await fetch('https://api.example.com/favorites', {
 *             method: 'POST',
 *             headers: { 'Content-Type': 'application/json' },
 *             body: JSON.stringify({ recipeId, isFavorite })
 *         });
 *     } catch (error) {
 *         console.error('Error saving favorite:', error);
 *     }
 * }
 */
