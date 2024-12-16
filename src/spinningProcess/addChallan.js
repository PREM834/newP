export function addChallan() {
  let deleteIndex = null;

  const openDeleteModal = (index) => {
    deleteIndex = index;
    document.getElementById("deleteModal").classList.remove("hidden");
  };

  const closeDeleteModal = () => {
    document.getElementById("deleteModal").classList.add("hidden");
    deleteIndex = null;
  };

  document.getElementById("cancelDelete").onclick = closeDeleteModal;

  document.getElementById("confirmDelete").onclick = () => {
    spinnerList.splice(deleteIndex, 1);

    // Reassign Challan Numbers
    spinnerList.forEach((spinner, i) => {
      spinner.challanNo = `CH${(i + 1).toString().padStart(3, "0")}`;
    });

    localStorage.setItem("spinnerList", JSON.stringify(spinnerList));
    loadSpinnerTable();
    closeDeleteModal();
  };

  document.getElementById("deleteModal").addEventListener("click", (event) => {
    if (event.target === document.getElementById("deleteModal")) {
      closeDeleteModal();
    }
  });

  let spinnerList = JSON.parse(localStorage.getItem("spinnerList")) || [];

  const loadSpinnerTable = () => {
    $("#mainContent").html(`
      <div class="flex justify-between items-center mb-4">
        <h1 class="text-2xl font-bold">Spinning Process List</h1>
        <button id="addChallanButton" class="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-400 font-bold">+ Add</button>
      </div>
      <div class="overflow-x-auto bg-white p-5 mb-5 rounded-lg shadow">
        <table id="spinningTable" class="min-w-full bg-white border border-gray-300">
          <thead class="text-xs text-black uppercase bg-blue-500 border-collapse border border-gray-500">
            <tr>
              <th class="px-6 py-3 border border-gray-500">Worker Name</th>
              <th class="px-6 py-3 border border-gray-500">Issue Date</th>
              <th class="px-6 py-3 border border-gray-500">Due Date</th>
              <th class="px-6 py-3 border border-gray-500">Challan</th>
              <th class="px-6 py-3 border border-gray-500">Qty</th>
              <th class="px-6 py-3 border border-gray-500">Com. Unit</th>
              <th class="px-6 py-3 border border-gray-500">Action</th>
            </tr>
          </thead>
          <tbody>
            ${spinnerList
              .map(
                (spinner, index) => `
                <tr data-index="${index}">
                  <td class="px-6 py-4 border border-gray-500">${spinner.workerName}</td>
                  <td class="px-6 py-4 border border-gray-400">${spinner.issDate}</td>
                  <td class="px-6 py-4 border border-gray-400">${spinner.dueDate}</td>
                  <td class="px-6 py-4 border border-gray-400">${spinner.challanNo}</td>
                  <td class="px-6 py-4 border border-gray-400">${spinner.qty || "N/A"}</td>
                  <td class="px-6 py-4 border border-gray-400">${spinner.comUnit || "N/A"}</td>
                  <td class="px-6 py-4 border border-gray-400">
                    <button class="bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-300" onclick="editSpinner(${index})"><i class="bx bx-edit-alt mr-1"></i></button>
                    <button class="bg-red-500 text-white py-1 px-3 rounded hover:bg-red-300" onclick="deleteSpinner(${index})"><i class="bx bx-trash mr-1"></i></button>
                  </td>
                </tr>`
              )
              .join("")}
          </tbody>
        </table>
      </div>
    `);

    $("#addChallanButton").click(showAddChallanForm);
  };

  const showAddChallanForm = () => {
    const formHTML = `
      <div class="flex flex-col sm:flex-row justify-between items-center bg-white p-5 mb-5 rounded-lg shadow">
        <h1 class="text-2xl font-bold mb-4">Add Challan</h1>
        <button id="backButton" class="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-400 flex items-center gap-2 mt-4 sm:mt-0">
          <i class="bx bx-arrow-back"></i> Back
        </button>
      </div>
      <form id="challanForm">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div>
            <label for="workerName" class="block text-sm font-medium text-gray-700">Worker Name <span class="text-red-500">*</span></label>
            <input type="text" id="workerName" class="w-full p-2 border border-gray-300 rounded focus:border-sky-500 focus:outline-none" />
          </div>
          <div>
            <label for="issDate" class="block text-sm font-medium text-gray-700">Issue Date <span class="text-red-500">*</span></label>
            <input type="date" id="issDate" class="w-full p-2 border border-gray-300 rounded focus:border-sky-500 focus:outline-none" />
          </div>
          <div>
            <label for="dueDate" class="block text-sm font-medium text-gray-700">Due Date <span class="text-red-500">*</span></label>
            <input type="date" id="dueDate" class="w-full p-2 border border-gray-300 rounded focus:border-sky-500 focus:outline-none" />
          </div>
          <div>
            <label for="challanNo" class="block text-sm font-medium text-gray-700">Challan No.</label>
            <input type="text" id="challanNo" class="w-full p-2 border border-gray-300 rounded focus:border-sky-500 focus:outline-none" readonly />
          </div>
          <div>
            <label for="vehicleNo" class="block text-sm font-medium text-gray-700">Vehicle No.</label>
            <input type="text" id="vehicleNo" class="w-full p-2 border border-gray-300 rounded focus:border-sky-500 focus:outline-none" />
          </div>
          <div>
            <label for="transportMode" class="block text-sm font-medium text-gray-700">Transport Mode</label>
            <select id="transportMode" class="w-full p-2 border border-gray-300 rounded focus:border-sky-500 focus:outline-none">
              <option value="">-- Select Transport Mode --</option>
              <option value="By Trolley">By Trolley</option>
              <option value="By Lorry">By Lorry</option>
              <option value="By Truck">By Truck</option>
              <option value="By Hand">By Hand</option>
              <option value="By Courier">By Courier</option>
            </select>
          </div>
        </div>
        <div class="mt-6">
          <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded mr-4">Save</button>
          <button type="button" id="cancelButton" class="bg-gray-500 hover:bg-gray-700 text-white py-2 px-4 rounded">Cancel</button>
        </div>
      </form>
    `;

    $("#mainContent").html(formHTML);

    $("#backButton").click(loadSpinnerTable);
    $("#cancelButton").click(loadSpinnerTable);

    // Generate Challan Number for New Entry
    const generateChallanNo = () => {
      const nextNumber = spinnerList.length + 1;
      return `CH${nextNumber.toString().padStart(3, "0")}`;
    };

    // Fill Challan No. when Adding New
    $("#challanNo").val(generateChallanNo());

    $("#challanForm").submit((event) => {
      event.preventDefault();

      const newSpinner = {
        workerName: $("#workerName").val(),
        issDate: $("#issDate").val(),
        dueDate: $("#dueDate").val(),
        challanNo: generateChallanNo(),
        vehicleNo: $("#vehicleNo").val(),
        transportMode: $("#transportMode").val(),
      };

      spinnerList.push(newSpinner);
      localStorage.setItem("spinnerList", JSON.stringify(spinnerList));
      loadSpinnerTable();
    });
  };

  const editSpinner = (index) => {
    const spinner = spinnerList[index];
    const formHTML = `
      <div class="flex flex-col sm:flex-row justify-between items-center bg-white p-5 mb-5 rounded-lg shadow">
        <h1 class="text-2xl font-bold mb-4">Edit Challan</h1>
        <button id="backButton" class="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-400 flex items-center gap-2 mt-4 sm:mt-0">
          <i class="bx bx-arrow-back"></i> Back
        </button>
      </div>
      <form id="challanForm">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div>
            <label for="workerName" class="block text-sm font-medium text-gray-700">Worker Name <span class="text-red-500">*</span></label>
            <input type="text" id="workerName" class="border border-gray-300 rounded-md w-full" value="${spinner.workerName}" />
          </div>
          <div>
            <label for="issDate" class="block text-sm font-medium text-gray-700">Iss. Date <span class="text-red-500">*</span></label>
            <input type="date" id="issDate" class="border border-gray-300 rounded-md w-full" value="${spinner.issDate}" />
          </div>
          <div>
            <label for="dueDate" class="block text-sm font-medium text-gray-700">Due Date <span class="text-red-500">*</span></label>
            <input type="date" id="dueDate" class="border border-gray-300 rounded-md w-full" value="${spinner.dueDate}" />
          </div>
          <div>
            <label for="challanNo" class="block text-sm font-medium text-gray-700">Challan No.</label>
            <input type="text" id="challanNo" class="border border-gray-300 rounded-md w-full" value="${spinner.challanNo}" readonly />
          </div>
          <div>
            <label for="vehicleNo" class="block text-sm font-medium text-gray-700">Vehicle No.</label>
            <input type="text" id="vehicleNo" class="border border-gray-300 rounded-md w-full" value="${spinner.vehicleNo}" />
          </div>
          <div>
            <label for="transportMode" class="block text-sm font-medium text-gray-700">Transport Mode</label>
            <select id="transportMode" class="border border-gray-300 rounded-md w-full">
              <option value="By Trolley" ${spinner.transportMode === "By Trolley" ? "selected" : ""}>By Trolley</option>
              <option value="By Lorry" ${spinner.transportMode === "By Lorry" ? "selected" : ""}>By Lorry</option>
              <option value="By Truck" ${spinner.transportMode === "By Truck" ? "selected" : ""}>By Truck</option>
              <option value="By Hand" ${spinner.transportMode === "By Hand" ? "selected" : ""}>By Hand</option>
              <option value="By Courier" ${spinner.transportMode === "By Courier" ? "selected" : ""}>By Courier</option>
            </select>
          </div>
        </div>
        <div class="mt-6">
          <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded mr-4">Save</button>
          <button type="button" id="cancelButton" class="bg-gray-500 hover:bg-gray-700 text-white py-2 px-4 rounded">Cancel</button>
        </div>
      </form>
    `;

    $("#mainContent").html(formHTML);
    $("#backButton").click(loadSpinnerTable);
    $("#cancelButton").click(loadSpinnerTable);

    $("#challanForm").submit((event) => {
      event.preventDefault();

      const updatedSpinner = {
        workerName: $("#workerName").val(),
        issDate: $("#issDate").val(),
        dueDate: $("#dueDate").val(),
        challanNo: spinner.challanNo, // Retain the same Challan Number
        vehicleNo: $("#vehicleNo").val(),
        transportMode: $("#transportMode").val(),
      };

      spinnerList[index] = updatedSpinner;
      localStorage.setItem("spinnerList", JSON.stringify(spinnerList));

      loadSpinnerTable();
    });
  };

  const deleteSpinner = (index) => {
    openDeleteModal(index);
  };

  window.editSpinner = editSpinner;
  window.deleteSpinner = deleteSpinner;

  loadSpinnerTable();
}
