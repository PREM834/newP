export default()=>{
    return `
        <!-- Buyer List Section -->
        <main class="p-2 overflow-y-auto">
    <div id="buyer-list" class="bg-white p-5 mb-5 rounded-lg shadow">
      <div class="flex justify-between items-center mb-4">
        <h1 class="text-2xl font-bold">Buyer List</h1>
        <button
          id="addButton"
          class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-300 flex items-center gap-2 mt-4 sm:mt-0"
        >
          <i class="bx bx-plus"></i> Add Buyer
        </button>
      </div>
      <div class="overflow-x-auto">
      <table class="w-full text-left border-collapse">
        <thead>
          <tr class="bg-sky-500 text-white">
            <th class="border p-2">Buyer Code</th>
            <th class="border p-2">Contact Person</th>
            <th class="border p-2">Buyer Company</th>
            <th class="border p-2">Email</th>
            <th class="border p-2">Mobile No</th>
            <th class="border p-2">Actions</th>
          </tr>
        </thead>
        <tbody id="buyerTableBody">
          <!-- Dynamic Rows -->
        </tbody>
      </table>
    </div>
  </div>

    <!-- Add/Edit Buyer Form Section -->
    <div id="addBuyerForm" class="hidden bg-white p-5 rounded-lg shadow">
      <div class="flex flex-col sm:flex-row justify-between items-center mb-4">
        <h1 id="form-title" class="text-2xl font-bold">Add Buyer Account</h1>
        <button
          id="backButton"
          class="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-400 flex items-center gap-2 mt-4 sm:mt-0"
        >
          <i class="bx bx-arrow-back"></i> Back
        </button>
      </div>
      <form id="buyerForm">
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label class="block text-gray-700">Contact Person</label>
            <input
              type="text"
              id="contactPerson"
              class="w-full p-2 border rounded focus:border-sky-500 focus:outline-none"
              required
            />
          </div>
          <div>
            <label class="block text-gray-700">Buyer Company</label>
            <input
              type="text"
              id="buyerCompany"
              class="w-full p-2 border rounded focus:border-sky-500 focus:outline-none"
              required
            />
          </div>
          <div>
            <label class="block text-gray-700">Buyer Code</label>
            <input
              type="text"
              id="buyerCode"
              class="w-full p-2 border rounded focus:border-sky-500 focus:outline-none"
              readonly
            />
          </div>
          <div>
            <label class="block text-gray-700">Email</label>
            <input
              type="email"
              id="buyerEmail"
              class="w-full p-2 border rounded focus:border-sky-500 focus:outline-none"
            />
          </div>
          <div>
            <label class="block text-gray-700">Mobile No</label>
            <input
              type="text"
              id="mobileNo"
              class="w-full p-2 border rounded focus:border-sky-500 focus:outline-none"
            />
          </div>
          <div>
            <label class="block text-gray-700">Buyer Address</label>
            <input
              type="text"
              id="buyerAddress"
              class="w-full p-2 border rounded focus:border-sky-500 focus:outline-none"
            />
          </div>
          <div>
            <label class="block text-gray-700">State Code</label>
            <input
              type="text"
              id="stateCode"
              class="w-full p-2 border rounded focus:border-sky-500 focus:outline-none"
            />
          </div>
          <div>
            <label class="block text-gray-700">Pack Format</label>
            <input
              type="text"
              id="packFormat"
              class="w-full p-2 border rounded focus:border-sky-500 focus:outline-none"
            />
          </div>
          <div>
            <label class="block text-gray-700">Marka</label>
            <input
              type="text"
              id="marka"
              class="w-full p-2 border rounded focus:border-sky-500 focus:outline-none"
            />
          </div>
          <div>
            <label class="block text-gray-700">Swift Code</label>
            <input
              type="text"
              id="swiftCode"
              class="w-full p-2 border rounded focus:border-sky-500 focus:outline-none"
            />
          </div>
          <div>
            <label class="block text-gray-700">Terms & Conditions</label>
            <input
              type="text"
              id="termsConditions"
              class="w-full p-2 border rounded focus:border-sky-500 focus:outline-none"
            />
          </div>
          <div>
            <label class="block text-gray-700">Buyer Bank Details</label>
            <input
              type="text"
              id="buyerBankDetails"
              class="w-full p-2 border rounded focus:border-sky-500 focus:outline-none"
            />
          </div>
        </div>
        <button
          type="submit"
          class="bg-blue-500 text-white px-4 py-2 rounded mt-4 hover:bg-blue-300 flex items-center gap-2"
        >
          <i class="bx bx-save"></i> Save
        </button>
      </form>
    </div>

    <!-- Delete Confirmation Modal -->
    <div id="deleteModal" class="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center hidden">
      <div
        class="bg-white p-6 rounded-lg shadow-lg"
        id="deleteModalContent"
      >
        <h2 class="text-xl font-bold mb-4">Are you sure you want to delete this buyer?</h2>
        <div class="flex justify-between">
          <button id="cancelDelete" class="bg-gray-500 text-black hover:bg-gray-300 px-4 py-2 rounded">Cancel</button>
          <button id="confirmDelete" class="bg-red-500 text-white hover:bg-red-300 px-4 py-2 rounded">Delete</button>
        </div>
      </div>
    </div>
    </main>
    `
}