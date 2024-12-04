export function addSpinner(){
    let deleteIndex = null;
      let editingIndex = null;
      let spinnerList = JSON.parse(localStorage.getItem("spinnerList")) || [];

      const openModal = document.getElementById("openModal");
      const closeModal = document.getElementById("closeModal");
      const spinnerFormContainer = document.getElementById(
        "shippingFormContainer"
      );
      const spinnerListContainer = document.getElementById(
        "spinnerListContainer"
      );
      const dynamicHeading = document.getElementById("form-title");
      const spinnerTableBody = document.getElementById("spinnerTableBody");
      const backButton = document.getElementById("backButton");
      const deleteModal = document.getElementById("deleteModal");
      const cancelDelete = document.getElementById("cancelDelete");
      const confirmDelete = document.getElementById("confirmDelete");

      openModal.addEventListener("click", () => {
        spinnerFormContainer.classList.remove("hidden");
        spinnerListContainer.classList.add("hidden");
        dynamicHeading.innerText = "Add New Spinner";
      });

      closeModal.addEventListener("click", () => {
        spinnerFormContainer.classList.add("hidden");
        spinnerListContainer.classList.remove("hidden");
      });

      backButton.addEventListener("click", () => {
        spinnerFormContainer.classList.add("hidden");
        spinnerListContainer.classList.remove("hidden");
      });

      // Edit spinner
      const editSpinner = (index) => {
        const spinner = spinnerList[index];
        editingIndex = index;
        toggleForm(true);
        dynamicHeading.innerText = "Edit Spinner";

        document.getElementById("acName").value = spinner.acName;
        document.getElementById("acCode").value = spinner.acCode;
        document.getElementById("email").value = spinner.email;
        document.getElementById("mobileNo").value = spinner.mobileNo;
        document.getElementById("adharNo").value = spinner.adharNo;
      };
      window.editSpinner = editSpinner;

      // Delete spinner
      const openDeleteModal = (index) => {
        deleteIndex = index;
        deleteModal.classList.remove("hidden");
      };
      window.openDeleteModal = openDeleteModal;

      cancelDelete.addEventListener("click", () => {
        deleteModal.classList.add("hidden");
      });

      confirmDelete.addEventListener("click", () => {
        if (deleteIndex !== null) {
          spinnerList.splice(deleteIndex, 1);
          localStorage.setItem("spinnerList", JSON.stringify(spinnerList));
          loadSpinnerTable();
          deleteModal.classList.add("hidden");
        }
      });

      document
        .getElementById("deleteModal")
        .addEventListener("click", (event) => {
          if (event.target === document.getElementById("deleteModal")) {
            document.getElementById("deleteModal").classList.add("hidden");
          }
        });
      // Handle form submission (add or edit spinner)
      document
        .getElementById("shippingForm")
        .addEventListener("submit", function (event) {
          event.preventDefault();

          const acName = document.getElementById("acName").value;
          const acCode = document.getElementById("acCode").value;
          const email = document.getElementById("email").value;
          const mobileNo = document.getElementById("mobileNo").value;
          const adharNo = document.getElementById("adharNo").value;

          const spinner = { acName, acCode, email, mobileNo, adharNo };

          if (editingIndex === null) {
            spinnerList.push(spinner); // Add new spinner
          } else {
            spinnerList[editingIndex] = spinner; // Edit existing spinner
          }

          localStorage.setItem("spinnerList", JSON.stringify(spinnerList));
          loadSpinnerTable();
          toggleForm(false);
          editingIndex = null;
        });

      // Load spinner table
      const loadSpinnerTable = () => {
        spinnerTableBody.innerHTML = "";
        spinnerList.forEach((spinner, index) => {
          const row = document.createElement("tr");
          row.innerHTML = `
                <td class="border border-gray-300 px-4 py-2">${spinner.acName}</td>
                <td class="border border-gray-300 px-4 py-2">${spinner.acCode}</td>
                <td class="border border-gray-300 px-4 py-2">${spinner.email}</td>
                <td class="border border-gray-300 px-4 py-2">${spinner.mobileNo}</td>
                <td class="border border-gray-300 px-4 py-2">${spinner.adharNo}</td>
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
      };

      // Toggle form visibility
      const toggleForm = (isVisible) => {
        if (isVisible) {
          spinnerFormContainer.classList.remove("hidden");
          spinnerListContainer.classList.add("hidden");
        } else {
          spinnerFormContainer.classList.add("hidden");
          spinnerListContainer.classList.remove("hidden");
        }
      };

      loadSpinnerTable(); // Initially load the table
}