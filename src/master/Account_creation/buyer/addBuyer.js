export function addBuyer() {
  let buyerList = JSON.parse(localStorage.getItem("buyerList")) || [];
  let lastBuyerCode = parseInt(localStorage.getItem("lastBuyerCode")) || 0;
  let editingIndex = null;
  let deleteIndex = null;

  // Select DOM Elements
  const addButton = document.getElementById("addButton");
  const backButton = document.getElementById("backButton");
  const addBuyerForm = document.getElementById("addBuyerForm");
  const buyerListSection = document.getElementById("buyer-list");
  const buyerTableBody = document.getElementById("buyerTableBody");
  const buyerForm = document.getElementById("buyerForm");

  // Load Buyer Table
  const loadBuyerTable = () => {
    buyerTableBody.innerHTML = "";
    buyerList.forEach((buyer, index) => {
      const row = document.createElement("tr");
      row.innerHTML = `
          <td class="border px-4 py-2">${buyer.buyerCode}</td>
          <td class="border px-4 py-2">${buyer.contactPerson}</td>
          <td class="border px-4 py-2">${buyer.buyerCompany}</td>
          <td class="border px-4 py-2">${buyer.buyerEmail}</td>
          <td class="border px-4 py-2">${buyer.mobileNo}</td>
          <td class="border px-4 py-2">
            <button class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-300" onclick="editBuyer(${index})">
              <i class="bx bx-edit-alt mr-1"></i> 
            </button>
            <button class="bg-red-500 text-white hover:bg-red-300 px-4 py-2 rounded mt-2" onclick="openDeleteModal(${index})">
              <i class="bx bx-trash mr-1"></i>
            </button>
          </td>
        `;
      buyerTableBody.appendChild(row);
    });
  };

  // Toggle Form Visibility
  const toggleForm = (showForm) => {
    if (showForm) {
      buyerListSection.classList.add("hidden");
      addBuyerForm.classList.remove("hidden");
    } else {
      buyerListSection.classList.remove("hidden");
      addBuyerForm.classList.add("hidden");
    }
  };

  // Reset Form
  const resetForm = () => {
    buyerForm.reset();
    document.getElementById("buyerCode").value = generateBuyerCode();
  };

  // Edit Buyer
  const editBuyer = (index) => {
    const buyer = buyerList[index];
    editingIndex = index;
    toggleForm(true);
    document.getElementById("form-title").textContent = "Edit Buyer Account";
    document.getElementById("contactPerson").value = buyer.contactPerson;
    document.getElementById("buyerCompany").value = buyer.buyerCompany;
    document.getElementById("buyerCode").value = buyer.buyerCode;
    document.getElementById("buyerEmail").value = buyer.buyerEmail;
    document.getElementById("mobileNo").value = buyer.mobileNo;
    document.getElementById("buyerAddress").value = buyer.buyerAddress;
    document.getElementById("stateCode").value = buyer.stateCode;
    document.getElementById("packFormat").value = buyer.packFormat;
    document.getElementById("marka").value = buyer.marka;
    document.getElementById("swiftCode").value = buyer.swiftCode;
    document.getElementById("termsConditions").value = buyer.termsConditions;
    document.getElementById("buyerBankDetails").value = buyer.buyerBankDetails;
  };
  window.editBuyer = editBuyer;

  // Generate Unique Buyer Code (starting from BUY001)
  const generateBuyerCode = () => {
    lastBuyerCode++;
    localStorage.setItem("lastBuyerCode", lastBuyerCode);
    return `BUY${(buyerList.length + 1).toString().padStart(3, "0")}`;
  };

  // Save Buyer
  buyerForm.onsubmit = (e) => {
    e.preventDefault();
    const buyer = {
      buyerCode:
        editingIndex === null
          ? generateBuyerCode()
          : document.getElementById("buyerCode").value,
      contactPerson: document.getElementById("contactPerson").value,
      buyerCompany: document.getElementById("buyerCompany").value,
      buyerEmail: document.getElementById("buyerEmail").value,
      mobileNo: document.getElementById("mobileNo").value,
      buyerAddress: document.getElementById("buyerAddress").value,
      stateCode: document.getElementById("stateCode").value,
      packFormat: document.getElementById("packFormat").value,
      marka: document.getElementById("marka").value,
      swiftCode: document.getElementById("swiftCode").value,
      termsConditions: document.getElementById("termsConditions").value,
      buyerBankDetails: document.getElementById("buyerBankDetails").value,
    };

    if (editingIndex === null) {
      buyerList.push(buyer);
    } else {
      buyerList[editingIndex] = buyer;
    }

    localStorage.setItem("buyerList", JSON.stringify(buyerList));
    loadBuyerTable();
    toggleForm(false);
    editingIndex = null;
  };

  // Open Delete Modal
  const openDeleteModal = (index) => {
    deleteIndex = index;
    document.getElementById("deleteModal").classList.remove("hidden");
  };
  window.openDeleteModal = openDeleteModal;

  // Cancel Delete
  document.getElementById("cancelDelete").onclick = () => {
    document.getElementById("deleteModal").classList.add("hidden");
    deleteIndex = null;
  };

  // Confirm Delete
  document.getElementById("confirmDelete").onclick = () => {
    buyerList.splice(deleteIndex, 1); // Remove the buyer
    reassignBuyerCodes(); // Reassign codes after deletion
    localStorage.setItem("buyerList", JSON.stringify(buyerList)); // Save updated list
    loadBuyerTable(); // Refresh the table
    document.getElementById("deleteModal").classList.add("hidden");
    deleteIndex = null;
  };

  // Back to Buyer List
  backButton.onclick = () => {
    toggleForm(false);
  };

  // Add Button
  addButton.onclick = () => {
    resetForm();
    toggleForm(true);
  };

  // Close Delete Modal when clicking outside
  document.getElementById("deleteModal").addEventListener("click", (event) => {
    if (event.target === document.getElementById("deleteModal")) {
      document.getElementById("deleteModal").classList.add("hidden");
    }
  });
  // Function to Reassign Buyer Codes
  const reassignBuyerCodes = () => {
    // Reassign buyer codes in sequential order
    buyerList.forEach((buyer, index) => {
      buyer.buyerCode = `BUY${(index + 1).toString().padStart(3, "0")}`;
    });

    // Update the lastBuyerCode in localStorage
    lastBuyerCode = buyerList.length
      ? parseInt(buyerList[buyerList.length - 1].buyerCode.slice(3))
      : 0;
    localStorage.setItem("lastBuyerCode", lastBuyerCode);
  };

  // Initialize
  loadBuyerTable();
}
