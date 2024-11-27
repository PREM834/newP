export default () => {
  return `
        <main class="flex-1 p-6 bg-white border rounded-lg">
      <!-- Header -->
      <h1 class="text-2xl font-bold">User List</h1>
      <header
        class="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6"
      >
      <div class="flex flex-wrap gap-2 justify-end w-full">
        <button
          id="addButton"
          class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-300 flex items-center"
        >
          <i class="bx bx-plus-circle mr-2"></i>Add
        </button>
        <button
          id="exportPdfBtn"
          class="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-300 flex items-center"
        >
          <i class="bx bxs-file-pdf mr-2"></i> Export PDF
        </button>
        <button
          id="exportExcelBtn"
          class="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-300 flex items-center"
        >
          <i class="bx bxs-file-export mr-2"></i> Export Excel
        </button>
      </div>
      
      </header>

      <!-- Export Confirmation Modal for PDF -->
      <div
        id="exportModal"
        class="fixed flex inset-0 bg-black bg-opacity-50 justify-center items-center hidden"
      >
        <div class="bg-white p-6 rounded shadow-lg text-center">
          <p class="mb-4 text-xl">Do you want to export the table to PDF?</p>
          <div class="flex justify-center gap-4">
            <button
              id="confirmExportBtn"
              class="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-300 flex items-center"
            >
              <i class="bx bx-check-circle mr-2"></i> Yes
            </button>
            <button
              id="cancelExportBtn"
              class="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-300 flex items-center"
            >
              <i class="bx bx-x-circle mr-2"></i> No
            </button>
          </div>
        </div>
      </div>

      <!-- Export Confirmation Modal for Excel -->
      <div
        id="exportExcelModal"
        class="fixed flex inset-0 bg-black bg-opacity-50 justify-center items-center hidden"
      >
        <div class="bg-white p-6 rounded shadow-lg text-center">
          <p class="mb-4 text-xl">Do you want to export the table to Excel?</p>
          <div class="flex justify-center gap-4">
            <button
              id="confirmExportExcelBtn"
              class="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-300 flex items-center"
            >
              <i class="bx bx-check-circle mr-2"></i> Yes
            </button>
            <button
              id="cancelExportExcelBtn"
              class="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-300 flex items-center"
            >
              <i class="bx bx-x-circle mr-2"></i> No
            </button>
          </div>
        </div>
      </div>

      <!-- User Table -->
      <div id="userTableSection" class="overflow-x-auto">
        <div class="overflow-x-auto">
          <table
            class="min-w-full table-auto border-collapse border border-gray-300 bg-white text-sm"
          >
            <thead>
              <tr class="bg-sky-500 text-white">
                <th class="px-4 py-2 border text-left">SN</th>
                <th class="px-4 py-2 border text-left">Role</th>
                <th class="px-4 py-2 border text-left">Name</th>
                <th class="px-4 py-2 border text-left">User Name</th>
                <th class="px-4 py-2 border text-left">User Unit</th>
                <th class="px-4 py-2 border text-left">Mobile No</th>
                <th class="px-4 py-2 border text-left">Email ID</th>
                <th class="px-4 py-2 border text-left">Action</th>
              </tr>
            </thead>
            <tbody id="userTable">
              <!-- Table rows dynamically populated here -->
            </tbody>
          </table>
        </div>
      </div>

      <!-- Add User Form -->
      <div id="addUserForm" class="hidden mt-6 p-6 bg-white rounded shadow">
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
              class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-300 w-full sm:w-auto"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </main>
    `;
};
