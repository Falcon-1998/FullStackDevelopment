// ---------- Config & state ----------
const STORAGE_KEY = "myLeads";
let leads = [];

// ---------- DOM elements ----------
const ulEl = document.getElementById("ul-el");
const nameInput = document.getElementById("name-input");
const inputBtn = document.getElementById("greet-button");
const clearBtn = document.getElementById("clear-button");
const tabBtn = document.getElementById("tab-button");
// ---------- Init ----------
loadLeads();
renderAllLeads(leads);

// ---------- Event listeners ----------
inputBtn.addEventListener("click", handleAddLead);
clearBtn.addEventListener("click", handleClearLeads);
tabBtn.addEventListener("click" , getTabLead);

// ---------- Get current tab URL ----------
function getTabLead() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        let lead = tabs[0].url;
        handleAddLeadUtil(lead);
    });
}
// ---------- Storage helpers ----------
function loadLeads() {
  const stored = localStorage.getItem(STORAGE_KEY);
  leads = stored ? JSON.parse(stored) : [];
}

function saveLeads() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(leads));
}

// ---------- Event handlers ----------
function handleAddLead() {
  const value = nameInput.value.trim();
  handleAddLeadUtil(value);
}

function handleAddLeadUtil(value) {
  if (!value) {
    return;
  }

  leads.push(value);
  saveLeads();
  appendLead(value); // Only render the new item
  nameInput.value = "";
}

function handleClearLeads() {
  leads = [];
  localStorage.removeItem(STORAGE_KEY);
  ulEl.innerHTML = "";
}

// ---------- Rendering ----------
function renderAllLeads(leads) {
  ulEl.innerHTML = "";
  for (const lead of leads) {
    appendLead(lead);
  }
}

function appendLead(lead) {
  const li = document.createElement("li");
  const a = document.createElement("a");
  a.href = lead;
  a.target = "_blank";
  a.textContent = lead;
  li.appendChild(a);
  ulEl.appendChild(li);
}
