export function userAuthen() {
  const addButton = document.getElementById("addButton");
  const addUserForm = document.getElementById("addUserForm");
  const userTableSection = document.getElementById("userTableSection");
  const userTable = document.getElementById("userTable");
  const userForm = document.getElementById("userForm");

  // Sample User Data
  let users = [
    {
      sn: 1,
      role: "Administrator",
      name: "John Doe",
      username: "johndoe",
      unit: "HQ",
      mobile: "1234567890",
      email: "john@example.com",
    },
    {
      sn: 2,
      role: "Production",
      name: "Jane Smith",
      username: "janesmith",
      unit: "Branch 1",
      mobile: "0987654321",
      email: "jane@example.com",
    },
  ];

 

  addButton.addEventListener("click", () => {
    clearForm();
    userForm.onsubmit = handleAddUser;
    addUserForm.classList.remove("hidden");
    userTableSection.classList.add("hidden");
  });

  // Load User Table
  const loadTable = () => {
    userTable.innerHTML = "";

    users.forEach((user, index) => {
      user.sn = index + 1;
    });

    users.forEach((user, index) => {
      const row = document.createElement("tr");
      row.innerHTML = `
      <td class="px-4 py-2 border">${user.sn}</td>
      <td class="px-4 py-2 border">${user.role}</td>
      <td class="px-4 py-2 border">${user.name}</td>
      <td class="px-4 py-2 border">${user.username}</td>
      <td class="px-4 py-2 border">${user.unit}</td>
      <td class="px-4 py-2 border">${user.mobile}</td>
      <td class="px-4 py-2 border">${user.email}</td>
      <td class="px-4 py-2 border">
        <button class="edit-btn bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600 flex items-center">
          <i class="bx bx-edit-alt mr-1"></i>
        </button>
        <button class="delete-btn bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600 flex items-center">
          <i class="bx bx-trash mr-1"></i>
        </button>
      </td>
    `;
      userTable.appendChild(row);
      row
        .querySelector(".edit-btn")
        .addEventListener("click", () => editUser(index));
      row
        .querySelector(".delete-btn")
        .addEventListener("click", () => deleteUser(index));
    });
  };

  // Clear Form
  const clearForm = () => {
    userForm.reset();
  };

  // Add User
  const handleAddUser = (event) => {
    event.preventDefault();

    const newUser = {
      role: document.getElementById("role").value,
      unit: document.getElementById("branch").value,
      name: document.getElementById("name").value,
      mobile: document.getElementById("mobile").value,
      email: document.getElementById("email").value,
      username: document.getElementById("username").value,
    };

    users.push(newUser);

    loadTable();
    clearForm();
    addUserForm.classList.add("hidden");
    userTableSection.classList.remove("hidden");
  };

  // Edit User
  const editUser = (index) => {
    const user = users[index];
    document.getElementById("role").value = user.role;
    document.getElementById("branch").value = user.unit;
    document.getElementById("name").value = user.name;
    document.getElementById("mobile").value = user.mobile;
    document.getElementById("email").value = user.email;
    document.getElementById("username").value = user.username;
    document.getElementById("password").value = "";
    document.getElementById("status").value = user.status || "Select Status";

    // Show the form
    addUserForm.classList.remove("hidden");
    userTableSection.classList.add("hidden");

    // Update the Save button behavior
    userForm.onsubmit = (event) => {
      event.preventDefault();
      users[index] = {
        ...user,
        role: document.getElementById("role").value,
        unit: document.getElementById("branch").value,
        name: document.getElementById("name").value,
        mobile: document.getElementById("mobile").value,
        email: document.getElementById("email").value,
        username: document.getElementById("username").value,
      };
      loadTable();
      clearForm();
      addUserForm.classList.add("hidden");
      userTableSection.classList.remove("hidden");
    };
  };

  // Delete User
  const deleteUser = (index) => {
    const confirmed = confirm("Are you sure you want to delete this user?");
    if (confirmed) {
      users.splice(index, 1);
      loadTable();
    }
  };

  loadTable();

  // PDF

  document.addEventListener("DOMContentLoaded", function () {
    const exportPdfBtn = document.getElementById("exportPdfBtn");
    const exportModal = document.getElementById("exportModal");
    const confirmExportBtn = document.getElementById("confirmExportBtn");
    const cancelExportBtn = document.getElementById("cancelExportBtn");

    const toggleModal = (show) => {
      if (exportModal) {
        exportModal.classList.toggle("hidden", !show);
      }
    };

    if (exportPdfBtn) {
      exportPdfBtn.addEventListener("click", () => toggleModal(true));
    }

    if (cancelExportBtn) {
      cancelExportBtn.addEventListener("click", () => toggleModal(false));
    }

    if (confirmExportBtn) {
      confirmExportBtn.addEventListener("click", () => {
        try {
          const { jsPDF } = window.jspdf;
          const doc = new jsPDF();

          const table = document.querySelector("#userTableSection table");

          if (!table) {
            alert("Table not found. Please ensure the table exists.");
            toggleModal(false);
            return;
          }

          doc.autoTable({
            html: table,
            startY: 20,
            theme: "grid",
            headStyles: {
              fillColor: [211, 211, 211],
              textColor: [0, 0, 0],
              fontSize: 12,
              halign: "center",
            },
            bodyStyles: {
              fontSize: 10,
              halign: "left",
            },
            margin: { top: 25 },
            styles: {
              overflow: "linebreak",
              cellPadding: 3,
            },
          });

          doc.save("user_table.pdf");

          toggleModal(false);
        } catch (error) {
          console.error("Error exporting PDF:", error);
          alert("An error occurred while exporting the PDF.");
          toggleModal(false);
        }
      });
    }

    if (exportModal) {
      exportModal.addEventListener("click", function (event) {
        if (event.target === exportModal) {
          toggleModal(false);
        }
      });
    }
  });

  //  EXCEL

  document.addEventListener("DOMContentLoaded", function () {
    const exportExcelBtn = document.getElementById("exportExcelBtn");
    const exportExcelModal = document.getElementById("exportExcelModal");
    const confirmExportExcelBtn = document.getElementById(
      "confirmExportExcelBtn"
    );
    const cancelExportExcelBtn = document.getElementById(
      "cancelExportExcelBtn"
    );

    // Helper function to toggle the modal visibility
    const toggleExcelModal = (show) => {
      if (exportExcelModal) {
        exportExcelModal.classList.toggle("hidden", !show);
      }
    };

    // Open the export confirmation modal when the export Excel button is clicked
    if (exportExcelBtn) {
      exportExcelBtn.addEventListener("click", () => toggleExcelModal(true));
    }

    // Close the modal if "No" button is clicked
    if (cancelExportExcelBtn) {
      cancelExportExcelBtn.addEventListener("click", () =>
        toggleExcelModal(false)
      );
    }

    // Proceed with export when "Yes" button is clicked
    if (confirmExportExcelBtn) {
      confirmExportExcelBtn.addEventListener("click", () => {
        try {
          // Grab the table element
          const table = document.querySelector("#userTableSection table");

          if (!table) {
            alert("Table not found. Please ensure the table exists.");
            toggleExcelModal(false);
            return;
          }

          // Convert the HTML table to a worksheet
          const ws = XLSX.utils.table_to_sheet(table);

          // Create a new workbook and append the worksheet
          const wb = XLSX.utils.book_new();
          XLSX.utils.book_append_sheet(wb, ws, "Users");

          // Export the Excel file
          XLSX.writeFile(wb, "user_table.xlsx");

          // Hide the modal after export
          toggleExcelModal(false);
        } catch (error) {
          console.error("Error exporting Excel:", error);
          alert("An error occurred while exporting the Excel file.");
          toggleExcelModal(false);
        }
      });
    }

    // Close the modal if the user clicks outside the modal content (on the backdrop)
    if (exportExcelModal) {
      exportExcelModal.addEventListener("click", function (event) {
        if (event.target === exportExcelModal) {
          toggleExcelModal(false); // Hide the modal if clicked outside
        }
      });
    }
  });
}
