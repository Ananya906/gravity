const searchInput = document.getElementById("search-input");
const searchBtn = document.getElementById("search-btn");
const clearBtn = document.getElementById("clear-btn");
const historyList = document.getElementById("history-list");

const loadHistory = () => {
    const history = JSON.parse(localStorage.getItem("searchHistory")) || [];
    historyList.innerHTML = ""; 
    history.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item;
        historyList.appendChild(li);
    });
};

const saveSearchHistory = (term) => {
    let history = JSON.parse(localStorage.getItem("searchHistory")) || [];
    history.push(term);
    localStorage.setItem("searchHistory", JSON.stringify(history));
};

const clearHistory = () => {
    localStorage.removeItem("searchHistory");
    loadHistory();
};

searchBtn.addEventListener("click", () => {
    const searchTerm = searchInput.value.trim();
    if (searchTerm) {
        saveSearchHistory(searchTerm);
        loadHistory();
        searchInput.value = ""; 
    }
});

clearBtn.addEventListener("click", () => {
    clearHistory();
});

document.addEventListener("DOMContentLoaded", loadHistory);



function createBubbles() {
    const bubbleContainer = document.querySelector('.bubbles-container');
    for (let i = 0; i < 30; i++) {
        const bubble = document.createElement('div');
        bubble.classList.add('bubble');
        bubble.style.left = `${Math.random() * 100}vw`;
        bubble.style.width = `${Math.random() * 20 + 10}px`;
        bubble.style.height = bubble.style.width; 
        bubble.style.animationDuration = `${Math.random() * 3 + 2}s`; 
        bubbleContainer.appendChild(bubble);
    }
}
document.addEventListener("DOMContentLoaded", () => {
    createBubbles();
});
