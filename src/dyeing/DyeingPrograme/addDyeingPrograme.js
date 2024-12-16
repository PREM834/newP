export function addDyeingPrograme(){
    let programList = JSON.parse(localStorage.getItem("programList")) || [];
      let deleteIndex = null;

      // Load Table
      const loadProgramTable = () => {
        const tableHTML = `
          <div class="flex justify-between items-center mb-4">
            <h1 class="text-2xl font-bold">Dyeing Program List</h1>
            <div>
              <button id="addProgramButton" class="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-400 font-bold">+ Add</button>
            </div>
          </div>
          <div class="overflow-x-auto">
            <table id="programTable" class="min-w-full bg-white border border-gray-300">
              <thead class="text-xs text-black uppercase bg-blue-500">
                <tr>
                  <th class="px-6 py-3 border">Program No</th>
                  <th class="px-6 py-3 border">Program Date</th>
                  <th class="px-6 py-3 border">Due Date</th>
                  <th class="px-6 py-3 border">Dyer</th>
                  <th class="px-6 py-3 border">PO No</th>
                  <th class="px-6 py-3 border">Issued By</th>
                  <th class="px-6 py-3 border">QC By</th>
                  <th class="px-6 py-3 border">Actions</th>
                </tr>
              </thead>
              <tbody>
                ${
                  programList.length > 0
                    ? programList
                        .map(
                          (program, index) => `
                            <tr>
                              <td class="px-6 py-4 border">${program.programNo}</td>
                              <td class="px-6 py-4 border">${program.date}</td>
                              <td class="px-6 py-4 border">${program.dueDate}</td>
                              <td class="px-6 py-4 border">${program.dyer}</td>
                              <td class="px-6 py-4 border">${program.poNo}</td>
                              <td class="px-6 py-4 border">${program.issuedBy}</td>
                              <td class="px-6 py-4 border">${program.qcBy}</td>
                              <td class="px-6 py-4 border">
                                <button class="bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-300" onclick="editProgram(${index})"><i class="bx bx-edit-alt"></i></button>
                                <button class="bg-red-500 text-white py-1 px-3 rounded hover:bg-red-300" onclick="openDeleteModal(${index})"><i class="bx bx-trash"></i></button>
                                <button class="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-400" onclick="openPrintModal(${index})">
                                  <i class="bx bx-printer"></i>
                                </button>
                              </td>
                            </tr>`
                        )
                        .join("")
                    : `<tr><td colspan="8" class="text-center py-4 text-gray-500">No programs available. Click "+ Add" to create one.</td></tr>`
                }
              </tbody>
            </table>
          </div>
        `;
        $("#mainContent").html(tableHTML);

        $("#addProgramButton").click(showAddProgramForm);
        $("#printButton").click(printTable);
      };

      // Generate Program Number for New Entry
      const generateProgramNo = () => {
        const nextNumber = programList.length + 1; // Assuming the programList holds all programs
        return `DP${nextNumber.toString().padStart(3, "0")}`;
      };

      // Add Program Form
      const showAddProgramForm = () => {
        const formHTML = `
        <main class=" sm:flex-row justify-between items-center bg-white p-5 mb-5 rounded-lg shadow">
    <div class="flex justify-between items-center mb-4 bg-white">
      <h1 class="text-2xl font-bold">Add Program</h1>
      <button id="backButton" class="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-400">
  <i class="bx bx-arrow-back"></i>
  Back
</button>
    </div>
    <form id="programForm" class="bg-white">
      <div class="grid grid-cols-2 gap-4">
        <div>
          <label>Program No</label>
          <input type="text" id="programNo" class="w-full p-2 border border-gray-300 rounded focus:border-sky-500 focus:outline-none" value="${generateProgramNo()}" disabled />
        </div>
        <div>
          <label>Program Date</label>
          <input type="date" id="date" class="w-full p-2 border border-gray-300 rounded focus:border-sky-500 focus:outline-none" required />
        </div>
        <div>
          <label>Due Date</label>
          <input type="date" id="dueDate" class="w-full p-2 border border-gray-300 rounded focus:border-sky-500 focus:outline-none" required />
        </div>
        <div>
          <label>Dyer</label>
          <input type="text" id="dyer" class="w-full p-2 border border-gray-300 rounded focus:border-sky-500 focus:outline-none" required />
        </div>
        <div>
          <label>PO No</label>
          <input type="text" id="poNo" class="w-full p-2 border border-gray-300 rounded focus:border-sky-500 focus:outline-none" required />
        </div>
        <div>
          <label>Issued By</label>
          <input type="text" id="issuedBy" class="w-full p-2 border border-gray-300 rounded focus:border-sky-500 focus:outline-none" required />
        </div>
        <div>
          <label>QC By</label>
          <input type="text" id="qcBy" class="w-full p-2 border border-gray-300 rounded focus:border-sky-500 focus:outline-none" required />
        </div>
      </div>
      <div class="mt-4">
        <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded">Save</button>
        <button id="cancelButton" type="button" class="bg-gray-500 text-white px-4 py-2 rounded">Cancel</button>
      </div>
    </form>
    </main>
  `;
        $("#mainContent").html(formHTML);

        $("#cancelButton, #backButton").click(loadProgramTable);

        $("#programForm").submit((e) => {
          e.preventDefault();

          const newProgram = {
            programNo: $("#programNo").val(), // This is auto-generated
            date: $("#date").val(),
            dueDate: $("#dueDate").val(),
            dyer: $("#dyer").val(),
            poNo: $("#poNo").val(),
            issuedBy: $("#issuedBy").val(),
            qcBy: $("#qcBy").val(),
          };

          programList.push(newProgram); // Add the new program to the list
          localStorage.setItem("programList", JSON.stringify(programList));
          loadProgramTable();
        });
      };

      /// Edit Program
      const editProgram = (index) => {
        const program = programList[index];
        showAddProgramForm();

        // Populate the form with the program's existing values
        $("#programNo").val(program.programNo).prop("disabled", true);
        $("#date").val(program.date);
        $("#dueDate").val(program.dueDate);
        $("#dyer").val(program.dyer);
        $("#poNo").val(program.poNo);
        $("#issuedBy").val(program.issuedBy);
        $("#qcBy").val(program.qcBy);

        // Update the submit function to handle editing
        $("#programForm")
          .off("submit")
          .submit((e) => {
            e.preventDefault();

            // Capture the updated values from the form
            const updatedProgram = {
              programNo: $("#programNo").val(),
              date: $("#date").val(),
              dueDate: $("#dueDate").val(),
              dyer: $("#dyer").val(),
              poNo: $("#poNo").val(),
              issuedBy: $("#issuedBy").val(),
              qcBy: $("#qcBy").val(),
            };

            // Update the program in the programList
            programList[index] = updatedProgram;

            // Save to localStorage
            localStorage.setItem("programList", JSON.stringify(programList));

            // Reload the table to reflect the changes
            loadProgramTable();
          });
      };
      window.editProgram = editProgram;

      // Delete Program
      const openDeleteModal = (index) => {
        deleteIndex = index;
        document.getElementById("deleteModal").classList.remove("hidden");
      };

      const closeDeleteModal = () => {
        document.getElementById("deleteModal").classList.add("hidden");
        deleteIndex = null;
      };
      window.openDeleteModal = openDeleteModal;

      // Delete Program
      const confirmDelete = () => {
        if (deleteIndex !== null) {
          // Remove the program
          programList.splice(deleteIndex, 1);

          // Reorder program numbers after deletion
          programList = programList.map((program, index) => {
            program.programNo = generateProgramNo(index + 1); // Re-generate programNo in ascending order
            return program;
          });

          // Update localStorage with the new list
          localStorage.setItem("programList", JSON.stringify(programList));

          // Reload the table to reflect the changes
          loadProgramTable();

          // Close the delete modal
          closeDeleteModal();
        }
      };
      window.confirmDelete = confirmDelete;

      const closeModalOutside = (event) => {
        if (event.target.id === "deleteModal") {
          closeDeleteModal();
        }
      };
      window.closeModalOutside = closeModalOutside;

      // Print Table
      const printTable = () => {
        const printContents = document.getElementById("programTable").outerHTML;
        const printWindow = window.open("", "", "width=800,height=600");
        printWindow.document.write(`
          <html>
          <head>
            <title>Print Program List</title>
            <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
          </head>
          <body>
            <h1 class="text-center text-2xl font-bold mb-4">Dyeing Program List</h1>
            ${printContents}
          </body>
          </html>
        `);
        printWindow.document.close();
        printWindow.print();
      };

      // Print Modal for Row
      const openPrintModal = (index) => {
        const program = programList[index];
        const printContent = `
          <html>
          <head>
            <title>Print Program</title>
            <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
          </head>
          <body>
            <h1 class="text-center text-2xl font-bold mb-4">Program Details</h1>
            <table class="min-w-full bg-white border border-gray-300">
              <tr><td class="px-6 py-4 border font-bold">Program No:</td><td class="px-6 py-4 border">${program.programNo}</td></tr>
              <tr><td class="px-6 py-4 border font-bold">Program Date:</td><td class="px-6 py-4 border">${program.date}</td></tr>
              <tr><td class="px-6 py-4 border font-bold">Due Date:</td><td class="px-6 py-4 border">${program.dueDate}</td></tr>
              <tr><td class="px-6 py-4 border font-bold">Dyer:</td><td class="px-6 py-4 border">${program.dyer}</td></tr>
              <tr><td class="px-6 py-4 border font-bold">PO No:</td><td class="px-6 py-4 border">${program.poNo}</td></tr>
              <tr><td class="px-6 py-4 border font-bold">Issued By:</td><td class="px-6 py-4 border">${program.issuedBy}</td></tr>
              <tr><td class="px-6 py-4 border font-bold">QC By:</td><td class="px-6 py-4 border">${program.qcBy}</td></tr>
            </table>
          </body>
          </html>
        `;
        const printWindow = window.open("", "", "width=800,height=600");
        printWindow.document.write(printContent);
        printWindow.document.close();
        printWindow.print();
      };
      window.openPrintModal = openPrintModal;

      // Initialize
      loadProgramTable();
}