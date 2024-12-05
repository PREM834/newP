export function addFinisher() {
  const spinnerFormContainer = document.getElementById("shippingFormContainer");
  const spinnerListContainer = document.getElementById("spinnerListContainer");
  const spinnerTableBody = document.getElementById("spinnerTableBody");
  const spinnerList = JSON.parse(localStorage.getItem("spinnerList")) || [];
  const backButton = document.getElementById("backButton");
  const addNewBtn = document.getElementById("addNewBtn");
  const formTitle = document.getElementById("form-title");

  let deleteIndex = null; // Track index for deletion/editing

  const toggleForm = (isVisible) => {
    if (isVisible) {
      spinnerFormContainer.classList.remove("hidden");
      spinnerListContainer.classList.add("hidden");
    } else {
      spinnerFormContainer.classList.add("hidden");
      spinnerListContainer.classList.remove("hidden");
      document.getElementById("shippingForm").reset();
    }
  };

  const validateForm = () => {
    let isValid = true;

    // Get all form values
    const accountName = document.getElementById("accountName").value;
    const accountCode = document.getElementById("accountCode").value;
    const granter = document.getElementById("Granter").value;
    const mobileNo = document.getElementById("mobileNo").value;
    const gstinNo = document.getElementById("gstinNo").value;
    const aadharNo = document.getElementById("aadharNo").value;

    // Validate accountName
    const accountNameError = document.getElementById("accountName-error");
    if (!accountName.trim()) {
      isValid = false;
      accountNameError.classList.remove("hidden");
      accountNameError.textContent = "Account name is required";
    } else {
      accountNameError.classList.add("hidden");
    }

    // Validate accountCode
    const accountCodeError = document.getElementById("accountCode-error");
    if (!accountCode.trim()) {
      isValid = false;
      accountCodeError.classList.remove("hidden");
      accountCodeError.textContent = "Account code is required";
    } else {
      accountCodeError.classList.add("hidden");
    }

    // Validate granter
    const granterError = document.getElementById("Granter-error");
    if (!granter.trim()) {
      isValid = false;
      granterError.classList.remove("hidden");
      granterError.textContent = "Granter name is required";
    } else {
      granterError.classList.add("hidden");
    }

    // Validate mobileNo (should be 10 digits)
    const mobileNoError = document.getElementById("mobileNo-error");
    if (!/^\d{10}$/.test(mobileNo)) {
      isValid = false;
      mobileNoError.classList.remove("hidden");
      mobileNoError.textContent = "Mobile number must be 10 digits";
    } else {
      mobileNoError.classList.add("hidden");
    }

    // Validate gstinNo (optional but should follow a valid format)
    const gstinNoError = document.getElementById("gstinNo-error");

    if (
      gstinNo &&
      !/^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[0-9]{1}[A-Z]{1}[0-9]{1}$/.test(
        gstinNo
      )
    ) {
      isValid = false;
      gstinNoError.classList.remove("hidden");
      gstinNoError.textContent = "Invalid GSTIN number format";
    } else {
      gstinNoError.classList.add("hidden");
    }

    // Validate aadharNo (should be 12 digits)
    const aadharNoError = document.getElementById("aadharNo-error");
    if (!/^\d{12}$/.test(aadharNo)) {
      isValid = false;
      aadharNoError.classList.remove("hidden");
      aadharNoError.textContent = "Aadhar number must be 12 digits";
    } else {
      aadharNoError.classList.add("hidden");
    }

    return isValid;
  };

  const loadSpinnerTable = () => {
    spinnerTableBody.innerHTML = "";
    if (spinnerList.length === 0) {
      document.getElementById("noRecordsMessage").classList.remove("hidden");
    } else {
      document.getElementById("noRecordsMessage").classList.add("hidden");
      spinnerList.forEach((spinner, index) => {
        const row = document.createElement("tr");
        row.innerHTML = `
              <td class="border border-gray-300 px-4 py-2">${spinner.accountName}</td>
              <td class="border border-gray-300 px-4 py-2">${spinner.accountCode}</td>
              <td class="border border-gray-300 px-4 py-2">${spinner.mobileNo}</td>
              <td class="border border-gray-300 px-4 py-2">${spinner.aadharNo}</td>
              <td class="border border-gray-300 px-4 py-2">${spinner.granter}</td>
              <td class="border border-gray-300 px-4 py-2 text-center">
                <button class="bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-300" onclick="editSpinner(${index})">
                  <i class="bx bx-edit"></i>
                </button>
                <button class="bg-red-500 text-white py-1 px-3 rounded hover:bg-red-300" onclick="openDeleteModal(${index})">
                  <i class="bx bx-trash"></i>
                </button>
              </td>
            `;
        spinnerTableBody.appendChild(row);
      });
    }
  };

  const openDeleteModal = (index) => {
    deleteIndex = index;
    document.getElementById("deleteModal").classList.remove("hidden");
  };
  window.openDeleteModal = openDeleteModal;

  document.getElementById("cancelDelete").onclick = () => {
    document.getElementById("deleteModal").classList.add("hidden");
    deleteIndex = null;
  };

  document.getElementById("confirmDelete").onclick = () => {
    spinnerList.splice(deleteIndex, 1); // Remove the spinner
    localStorage.setItem("spinnerList", JSON.stringify(spinnerList)); // Save updated list
    loadSpinnerTable(); // Refresh the table
    document.getElementById("deleteModal").classList.add("hidden");
    deleteIndex = null;
  };

  document.getElementById("deleteModal").addEventListener("click", (event) => {
    if (event.target === document.getElementById("deleteModal")) {
      document.getElementById("deleteModal").classList.add("hidden");
    }
  });

  const editSpinner = (index) => {
    const spinner = spinnerList[index];
    document.getElementById("accountName").value = spinner.accountName;
    document.getElementById("accountCode").value = spinner.accountCode;
    document.getElementById("Granter").value = spinner.granter;
    document.getElementById("mobileNo").value = spinner.mobileNo;
    document.getElementById("gstinNo").value = spinner.gstinNo;
    document.getElementById("aadharNo").value = spinner.aadharNo;
    formTitle.textContent = "Edit Spinner";
    deleteIndex = index; // Set the current editing index
    toggleForm(true);
  };
  window.editSpinner = editSpinner;

  document
    .getElementById("shippingForm")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      if (!validateForm()) return;

      const spinnerData = {
        accountName: document.getElementById("accountName").value,
        accountCode: document.getElementById("accountCode").value,
        granter: document.getElementById("Granter").value,
        mobileNo: document.getElementById("mobileNo").value,
        gstinNo: document.getElementById("gstinNo").value,
        aadharNo: document.getElementById("aadharNo").value,
      };

      if (formTitle.textContent === "Edit Spinner") {
        spinnerList[deleteIndex] = spinnerData; // Update existing spinner
      } else {
        spinnerList.push(spinnerData); // Add new spinner
      }

      localStorage.setItem("spinnerList", JSON.stringify(spinnerList));
      loadSpinnerTable();
      toggleForm(false);
    });

  addNewBtn.addEventListener("click", () => {
    formTitle.textContent = "Add Spinner";
    deleteIndex = null; // Clear the index for new entries
    toggleForm(true);
  });

  backButton.addEventListener("click", () => {
    toggleForm(false);
  });

  loadSpinnerTable();
}
