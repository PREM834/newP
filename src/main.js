"use strict";
import renderDashboard from "./dashboard/dashboard.js";
import { initCharts } from "./dashboard/chart.js";
import userContent from "./master/user/user.js";
import { userAuthen } from "./master/user authentication/userAuthen.js";
import buyerList from "./master/Account_creation/buyer/buyerList.js";
import { addBuyer } from "./master/Account_creation/buyer/addBuyer.js";
import merchandiserList from "./master/Account_creation/merchandiser/merchandiserList.js";
import { addMerchandiser } from "./master/Account_creation/merchandiser/addMerchandise.js";
import shippingList from "./master/Account_creation/shipping company/shippingList.js";
import { addShipping } from "./master/Account_creation/shipping company/addShipping.js";
import transporterList from "./master/Account_creation/transporter/transporterList.js";
import { addTransporter } from "./master/Account_creation/transporter/addTransporter.js";
import rawMaterialList from "./master/Account_creation/Raw material supplier/rawMaterialList.js";
import { addRawMaterial } from "./master/Account_creation/Raw material supplier/addRawMaterial.js";
import designerList from "./master/Account_creation/designer/designerList.js";
import { addDesigner } from "./master/Account_creation/designer/addDesigner.js";
import dyerList from "./master/Account_creation/dyer/dyerList.js";
import { addDyer } from "./master/Account_creation/dyer/addDyer.js";
import otherAccountList from "./master/Account_creation/other account/otherAccountList.js";
import { addOtherAccount } from "./master/Account_creation/other account/addOtherAccount.js";
import spinnerList from "./master/Account_creation/spinner/spinnerList.js";
import { addSpinner } from "./master/Account_creation/spinner/addSpinner.js";
import finisherList from "./master/Account_creation/finisher account/finisherList.js";
import { addFinisher } from "./master/Account_creation/finisher account/addFinisher.js";

document.addEventListener("DOMContentLoaded", () => {
  const mainContent = document.getElementById("mainContent");

  // Function to navigate and update URL
  function navigate(url) {
    // Ensure the URL is clean and only contains relevant segments
    const baseUrl = window.location.origin;
    const path = new URL(url, baseUrl).pathname;  // Ensure it's relative and clean

    // Update the URL (pushState will update without reloading the page)
    history.pushState(null, null, path);

    // Clear the main content
    mainContent.innerHTML = `<div class="spinner">Loading...</div>`;

    // Simulate content rendering
    setTimeout(() => {
      mainContent.innerHTML = `<h1>Content for ${path}</h1>`;
    }, 500);
  }

  // Handle menu clicks
  document.body.addEventListener("click", (event) => {
    const target = event.target.closest("[data-url]");
    if (target) {
      event.preventDefault();

      // Get the current and parent URLs
      const parentUrl = target.getAttribute("data-parent-url") || "";
      let url = `${parentUrl}/${target.getAttribute("data-url")}`.replace(/\/\//g, "/"); // Clean up double slashes

      // If the parent URL is empty or undefined, just use the target URL
      if (!parentUrl) {
        url = target.getAttribute("data-url");
      }

      // Clean the URL by ensuring it doesn't contain any repeated segments
      navigate(url);

      // Toggle visibility of dropdown if it has siblings
      const targetDropdown = document.getElementById(target.getAttribute("data-target"));
      if (targetDropdown) {
        targetDropdown.classList.toggle("hidden");
      }
    }
  });

  // Handle browser back/forward navigation
  window.addEventListener("popstate", () => {
    const currentPath = location.pathname;
    mainContent.innerHTML = `<div class="spinner">Loading...</div>`;
    setTimeout(() => {
      mainContent.innerHTML = `<h1>Content for ${currentPath}</h1>`;
    }, 500);
  });
});



document.addEventListener("DOMContentLoaded", () => {
  // Utility to close all dropdowns except the current
  function closeAllDropdowns(exceptId) {
    document.querySelectorAll(".nav-list ul").forEach((dropdown) => {
      if (dropdown.id !== exceptId) dropdown.classList.add("hidden");
    });
  }

  // Handle dropdown toggles
  document.addEventListener("click", (event) => {
    const target = event.target.closest("[data-toggle='dropdown']");
    if (!target) return;

    event.preventDefault();
    const dropdownId = target.getAttribute("data-target");
    const dropdown = document.getElementById(dropdownId);

    if (dropdown) {
      const isHidden = dropdown.classList.toggle("hidden");
      if (!isHidden) {
        // Close other dropdowns
        closeAllDropdowns(dropdownId);
      }
    }
  });

  // Close dropdowns when clicking outside
  document.addEventListener("click", (event) => {
    if (!event.target.closest(".nav-list")) {
      closeAllDropdowns();
    }
  });
});

// Function to close siblings
function closeSiblings(siblingIds) {
  siblingIds.forEach((id) => {
    const sibling = document.getElementById(id);
    if (sibling) sibling.classList.add("hidden");
  });
}

// Dropdown Toggle Handler
document.addEventListener("click", (event) => {
  const target = event.target;

  // Check for dropdown toggle button
  if (target.matches("[data-toggle='dropdown']")) {
    event.preventDefault();

    const dropdownId = target.getAttribute("data-target");
    const siblingIds = target.getAttribute("data-siblings")?.split(",") || [];
    const dropdown = document.getElementById(dropdownId);

    if (dropdown) {
      // Toggle current dropdown
      const isHidden = dropdown.classList.toggle("hidden");

      // Close sibling dropdowns if toggling to visible
      if (!isHidden) {
        closeSiblings(siblingIds);
      }

      // Ensure nested dropdowns are visible when parent is expanded
      dropdown.querySelectorAll(".nested-dropdown").forEach((child) => {
        child.classList.remove("hidden");
      });
    }
  }
});

// Close all dropdowns when clicking outside
document.addEventListener("click", (e) => {
  const insideDropdown = e.target.closest("[data-toggle='dropdown']");
  const openDropdown = document.querySelectorAll(".nav-list ul:not(.hidden)");

  // If clicking outside all dropdowns
  if (!insideDropdown && openDropdown.length > 0) {
    openDropdown.forEach((dropdown) => dropdown.classList.add("hidden"));
  }
});

// Toggle Dropdown Function for sibling and sub-sibling handling
function toggleDropdown(dropdownId, ...siblings) {
  const dropdown = document.getElementById(dropdownId);
  if (!dropdown) return;

  const isHidden = dropdown.classList.toggle("hidden");

  // Update sibling dropdowns
  siblings.forEach((siblingId) => {
    const siblingDropdown = document.getElementById(siblingId);
    if (siblingDropdown) siblingDropdown.classList.add("hidden");
  });

  // Hide nested dropdowns if parent is closed
  if (isHidden) {
    dropdown.querySelectorAll(".nested-dropdown").forEach((child) => {
      child.classList.add("hidden");
    });
  } else {
    dropdown.querySelectorAll(".nested-dropdown").forEach((child) => {
      child.classList.remove("hidden");
    });
  }
}

// Close All Dropdowns Globally
function closeAllDropdowns() {
  document.querySelectorAll(".nav-list ul").forEach((dropdown) => {
    dropdown.classList.add("hidden");
    dropdown.querySelectorAll(".nested-dropdown").forEach((child) => {
      child.classList.add("hidden");
    });
  });
}

// Adjust Sidebar for Mobile
function adjustSidebarForMobile() {
  const sidebar = document.getElementById("sidebar");
  const mainContent = document.getElementById("main-content");
  const navBar = document.querySelector(".navBar");

  if (window.innerWidth <= 768) {
    sidebar.classList.add("hidden");
    sidebar.classList.remove("w-20", "w-64");
    mainContent.style.marginLeft = "0";
    navBar.classList.remove("ml-20");
  } else {
    sidebar.classList.remove("hidden");
    sidebar.classList.add("w-20");
    sidebar.classList.remove("w-64");
    mainContent.style.marginLeft = "4rem";
    navBar.style.marginLeft = "4rem";
  }
}

// Expand Sidebar
function expandSidebar() {
  const sidebar = document.getElementById("sidebar");
  const mainContent = document.getElementById("main-content");
  const logo = document.getElementById("logo");
  const closeBtn = document.getElementById("closeBtn");
  const hamburger = document.getElementById("hamburger");
  const navBar = document.querySelector(".navBar");

  sidebar.classList.remove("hidden");
  sidebar.classList.add("expand-animation");
  if (window.innerWidth <= 768) {
    sidebar.classList.add("w-64");
    mainContent.style.marginLeft = "0";
    navBar.style.marginLeft = "0";
  } else {
    sidebar.classList.add("w-64");
    sidebar.classList.remove("w-20");
    mainContent.style.marginLeft = "16rem";
    navBar.style.marginLeft = "16rem";
  }

  logo.classList.remove("opacity-0");
  closeBtn.classList.remove("hidden");
  hamburger.classList.add("hidden");
}

// Collapse Sidebar
function collapseSidebar() {
  const sidebar = document.getElementById("sidebar");
  const mainContent = document.getElementById("main-content");
  const logo = document.getElementById("logo");
  const closeBtn = document.getElementById("closeBtn");
  const hamburger = document.getElementById("hamburger");
  const navBar = document.querySelector(".navBar");

  sidebar.classList.remove("expand-animation");

  setTimeout(() => {
    if (window.innerWidth <= 768) {
      sidebar.classList.add("hidden");
      mainContent.style.marginLeft = "0";
      navBar.style.marginLeft = "0";
    } else {
      sidebar.classList.add("w-20");
      sidebar.classList.remove("w-64", "hidden");
      mainContent.style.marginLeft = "4rem";
      navBar.style.marginLeft = "4rem";
    }
  }, 300);

  logo.classList.add("opacity-0");
  closeBtn.classList.add("hidden");
  hamburger.classList.remove("hidden");
  closeAllDropdowns();
}

// Destroy All Chart Instances
function destroyCharts() {
  if (Chart.helpers && Chart.helpers.instances) {
    Chart.helpers.each(Chart.instances, (chart) => {
      chart.destroy();
    });
  }
}

// Initialize Dashboard and Event Listeners
document.addEventListener("DOMContentLoaded", () => {
  const sidebar = document.getElementById("sidebar");
  const hamburger = document.getElementById("hamburger");
  const closeBtn = document.getElementById("closeBtn");
  const navLinks = document.querySelectorAll(".nav-list a");
  const mainContent = document.getElementById("main-content");
  const dashboard = document.getElementById("Dashboard");
  const user = document.getElementById("User");
  const userAuthentication = document.getElementById("userAuthentication");
  const buyer = document.getElementById("buyer");
  const merchandiser = document.getElementById("merchandiser");
  const shippingCompany = document.getElementById("shippingCompany");
  const transporter = document.getElementById("transporter");
  const rawMaterialSupplier = document.getElementById("rawMaterialSupplier");
  const designer = document.getElementById("designer");
  const dyer = document.getElementById("dyer");
  const otherAccount = document.getElementById("otherAccount");
  const spinner = document.getElementById("spinner");
  const finisherAccount = document.getElementById("finisherAccount");
  const contractorAccount = document.getElementById("contractorAccount");

  // Handle dropdown toggles
  document.addEventListener("click", (event) => {
    const target = event.target;

    if (target.matches("[data-toggle='dropdown']")) {
      event.preventDefault();
      const dropdownId = target.getAttribute("data-target");
      const siblingIds = target.getAttribute("data-siblings")?.split(",") || [];
      toggleDropdown(dropdownId, ...siblingIds);
    }
  });

  // Expand Sidebar
  hamburger.addEventListener("click", expandSidebar);

  // Collapse Sidebar
  closeBtn.addEventListener("click", collapseSidebar);

  // Expand sidebar on nav link click
  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      if (sidebar.classList.contains("w-20")) {
        e.preventDefault();
        expandSidebar();
      }
    });
  });

  // Collapse sidebar when clicking outside it
  document.addEventListener("click", (e) => {
    const isClickInsideSidebar = sidebar.contains(e.target);
    const isClickOnHamburger = hamburger.contains(e.target);

    if (
      !isClickInsideSidebar &&
      !isClickOnHamburger &&
      !sidebar.classList.contains("hidden")
    ) {
      collapseSidebar();
    }
  });

  // Adjust sidebar for window resizing
  window.addEventListener("resize", adjustSidebarForMobile);

  // Initial adjustment
  adjustSidebarForMobile();

  // Initially render dashboard content
  mainContent.innerHTML = renderDashboard();
  initCharts();

  // Render dashboard content when "Dashboard" is clicked
  dashboard.addEventListener("click", (event) => {
    event.preventDefault();
    mainContent.innerHTML = `<div class="spinner">Loading...</div>`;
    requestAnimationFrame(() => {
      destroyCharts();
      mainContent.innerHTML = renderDashboard();
      initCharts();
    });
  });

  // Render user content when user is clicked
  user.addEventListener("click", () => {
    mainContent.innerHTML = ``;
    mainContent.innerHTML = userContent();
    userAuthen();
  });
  // Render userAuthentication content when user is clicked
  userAuthentication.addEventListener("click", () => {
    // Clear the main content
    mainContent.innerHTML = "";

    // Inject the user authentication form into the main content
    mainContent.innerHTML = ` 
      <!-- Add User Form -->
      <div id="addUserForm" class="p-4 mb-5 bg-white rounded shadow overflow-auto">
        <h2 class="text-xl font-bold mb-4">Add User</h2>
        <form id="userForm" class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label for="role" class="block font-medium">Role</label>
            <select id="role" class="w-full border rounded px-2 py-1">
              <option>Select Role</option>
              <option>Administrator</option>
              <option>Production</option>
              <option>Raw Material</option>
              <option>Packing</option>
              <option>Contractor</option>
            </select>
          </div>
          <div>
            <label for="branch" class="block font-medium">Office Branch</label>
            <select id="branch" class="w-full border rounded px-2 py-1">
              <option>Nothing selected</option>
              <option>Branch 1</option>
              <option>Branch 2</option>
            </select>
          </div>
          <div>
            <label for="name" class="block font-medium">Name</label>
            <input
              type="text"
              id="name"
              class="w-full border rounded px-2 py-1"
              placeholder="Name"
            />
          </div>
          <div>
            <label for="mobile" class="block font-medium">Mobile</label>
            <input
              type="text"
              id="mobile"
              class="w-full border rounded px-2 py-1"
              placeholder="Mobile"
            />
          </div>
          <div>
            <label for="email" class="block font-medium">Email</label>
            <input
              type="email"
              id="email"
              class="w-full border rounded px-2 py-1"
              placeholder="Email"
            />
          </div>
          <div>
            <label for="username" class="block font-medium">Username</label>
            <input
              type="text"
              id="username"
              class="w-full border rounded px-2 py-1"
              placeholder="Username"
            />
          </div>
          <div>
            <label for="password" class="block font-medium">Password</label>
            <input
              type="password"
              id="password"
              class="w-full border rounded px-2 py-1"
              placeholder="Password"
            />
          </div>
          <div>
            <label for="status" class="block font-medium">Status</label>
            <select id="status" class="w-full border rounded px-2 py-1">
              <option>Select Status</option>
              <option>Active</option>
              <option>Inactive</option>
            </select>
          </div>
          <div class="col-span-1 sm:col-span-2">
            <button
              type="submit"
              class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-300"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    `;

    // Attach behavior to the newly added form
    const userForm = document.getElementById("userForm");

    userForm.onsubmit = (event) => {
      event.preventDefault();

      const newUser = {
        role: document.getElementById("role").value,
        unit: document.getElementById("branch").value,
        name: document.getElementById("name").value,
        mobile: document.getElementById("mobile").value,
        email: document.getElementById("email").value,
        username: document.getElementById("username").value,
        status: document.getElementById("status").value,
      };

      console.log("New User Details:", newUser);
      alert("User successfully added!");

      userAuthen();
    };
  });
  // Render buyer content when user is clicked
  buyer.addEventListener("click", (event) => {
    mainContent.innerHTML = ``;
    mainContent.innerHTML = buyerList();
    addBuyer();
  });
  // Render merchandiser content when user is clicked
  merchandiser.addEventListener("click", () => {
    mainContent.innerHTML = ``;
    mainContent.innerHTML = merchandiserList();
    addMerchandiser();
  });
  // Render ShippingCompany content when user is clicked
  shippingCompany.addEventListener("click", () => {
    mainContent.innerHTML = ``;
    mainContent.innerHTML = shippingList();
    addShipping();
  });
  // Render ShippingCompany content when user is clicked
  transporter.addEventListener("click", () => {
    mainContent.innerHTML = ``;
    mainContent.innerHTML = transporterList();
    addTransporter();
  });
  // Render Raw Material content when user is clicked
  rawMaterialSupplier.addEventListener("click", () => {
    mainContent.innerHTML = ``;
    mainContent.innerHTML = rawMaterialList();
    addRawMaterial();
  });
  // Render Designer content when user is clicked
  designer.addEventListener("click", () => {
    mainContent.innerHTML = ``;
    mainContent.innerHTML = designerList();
    addDesigner();
  });
  // Render Dyer content when user is clicked
  dyer.addEventListener("click", () => {
    mainContent.innerHTML = ``;
    mainContent.innerHTML = dyerList();
    addDyer();
  });
  // Render Other Account content when user is clicked
  otherAccount.addEventListener("click", () => {
    mainContent.innerHTML = ``;
    mainContent.innerHTML = otherAccountList();
    addOtherAccount();
  });
  // Render Spinner content when user is clicked
  spinner.addEventListener("click", () => {
    mainContent.innerHTML = ``;
    mainContent.innerHTML = spinnerList();
    addSpinner();
  });
  // Render Finisher Account content when user is clicked
  finisherAccount.addEventListener("click", () => {
    mainContent.innerHTML = ``;
    mainContent.innerHTML = finisherList();
    addFinisher();
  });
  // Render Contractor Account content when user is clicked
  contractorAccount.addEventListener("click", () => {
    mainContent.innerHTML = ``;
    mainContent.innerHTML = asdf;
  });


});
