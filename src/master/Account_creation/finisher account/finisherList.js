export default () => {
  return `
        <main class="w-full px-4 mb-3">
      <div class="w-full px-4">
        <!-- List Container -->

        <div
          id="spinnerListContainer"
          class="bg-white p-5 mb-5 rounded-lg shadow"
        >
          <h1 class="text-2xl font-bold">Finisher List</h1>
          <button
            id="addNewBtn"
            class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-300 flex items-center gap-2 mt-4 sm:mt-0"
          >
            <i class="bx bx-plus"></i>
            Add
          </button>
          <div class="overflow-x-auto mt-4">
            <table
              id="spinnerTable"
              class="min-w-full border-collapse table-auto w-full border border-gray-300"
            >
              <thead class="bg-blue-500">
                <tr>
                  <th class="border border-gray-300 px-4 py-2">Name</th>
                  <th class="border border-gray-300 px-4 py-2">Code</th>
                  <th class="border border-gray-300 px-4 py-2">Mobile No</th>
                  <th class="border border-gray-300 px-4 py-2">Aadhar No</th>
                  <th class="border border-gray-300 px-4 py-2">Granter</th>
                  <th class="border border-gray-300 px-4 py-2">Actions</th>
                </tr>
              </thead>
              <tbody id="spinnerTableBody"></tbody>
            </table>
            <div id="noRecordsMessage" class="text-center mt-4 hidden">
              No matching records found.
            </div>
          </div>
        </div>
        <!-- Form Container -->
        <div
          class="bg-white shadow-xl rounded-lg max-w-screen-lg w-full p-6 hidden"
          id="shippingFormContainer"
        >
          <div
            class="flex flex-col sm:flex-row justify-between items-center mb-4"
          >
            <h1 id="form-title" class="text-2xl font-bold">Add Finisher</h1>
            <button
              id="backButton"
              class="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-400 flex items-center gap-2 mt-4 sm:mt-0"
            >
              <i class="bx bx-arrow-back"></i> Back
            </button>
          </div>
          <div class="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
            <form id="shippingForm" class="space-y-6">
              <!-- Account Information -->
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    for="accountName"
                    class="block text-sm font-medium text-gray-700"
                    >Account Name
                  </label>
                  <input
                    type="text"
                    id="accountName"
                    placeholder="Enter account name"
                    class="w-full p-2 border border-gray-300 rounded focus:border-sky-500 focus:outline-none"
                    required
                  />
                  <span
                    id="accountName-error"
                    class="text-red-500 hidden"
                  >Please fill Account Name</span>
                </div>

                <div>
                  <label
                    for="accountCode"
                    class="block text-sm font-medium text-gray-700"
                    >Account Code</label
                  >
                  <input
                    type="text"
                    id="accountCode"
                    placeholder="Enter account code"
                    class="w-full p-2 border border-gray-300 rounded focus:border-sky-500 focus:outline-none"
                    required
                  />
                  <span
                    id="accountCode-error"
                    class="text-red-500 hidden"
                  ></span>
                </div>
                <div>
                  <label
                    for="Granter"
                    class="block text-sm font-medium text-gray-700"
                  >
                    Granter
                  </label>
                  <input
                    type="text"
                    id="Granter"
                    placeholder="Enter granter name"
                    class="w-full p-2 border border-gray-300 rounded focus:border-sky-500 focus:outline-none"
                    required
                  />
                  <span id="Granter-error" class="text-red-500 hidden">Enter Granter Name</span>
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700"
                    >Father Name</label
                  >
                  <input
                    type="text"
                    id="fatherName"
                    placeholder="Enter father name"
                    class="w-full p-2 border border-gray-300 rounded focus:border-sky-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label for="mobileNo" class="block text-sm font-medium text-gray-700"
                    >Mobile No</label
                  >
                  <input
                    type="text"
                    id="mobileNo"
                    placeholder="Enter mobile number"
                    class="w-full p-2 border border-gray-300 rounded focus:border-sky-500 focus:outline-none"
                  />
                  <span id="mobileNo-error" class="text-red-500 hidden">Enter 10 digits Mobile Number</span>
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700"
                    >Phone No</label
                  >
                  <input
                    type="text"
                    id="phoneNo"
                    placeholder="Enter phone number"
                    class="w-full p-2 border border-gray-300 rounded focus:border-sky-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700"
                    >Address</label
                  >
                  <input
                    type="text"
                    id="address"
                    placeholder="Enter address"
                    class="w-full p-2 border border-gray-300 rounded focus:border-sky-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700"
                    >State</label
                  >
                  <input
                    type="text"
                    id="state"
                    placeholder="Enter state"
                    class="w-full p-2 border border-gray-300 rounded focus:border-sky-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700"
                    >State Code</label
                  >
                  <input
                    type="text"
                    id="stateCode"
                    placeholder="Enter state code"
                    class="w-full p-2 border border-gray-300 rounded focus:border-sky-500 focus:outline-none"
                  />
                </div>
              </div>

              <!-- Bank Information -->
              <h2 class="text-lg font-semibold">Bank Information</h2>
              <div class="grid grid-cols-2 gap-4">
                <div>
                  <label class="block text-sm font-medium text-gray-700"
                    >Bank Name</label
                  >
                  <input
                    type="text"
                    id="bankName"
                    placeholder="Enter bank name "
                    class="w-full p-2 border border-gray-300 rounded focus:border-sky-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700"
                    >Bank Branch</label
                  >
                  <input
                    type="text"
                    id="bankBranch"
                    placeholder="Enter bank branch"
                    class="w-full p-2 border border-gray-300 rounded focus:border-sky-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700"
                    >Bank Address</label
                  >
                  <input
                    type="text"
                    id="bankAddress"
                    placeholder="Enter bank address"
                    class="w-full p-2 border border-gray-300 rounded focus:border-sky-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700"
                    >A/C Number</label
                  >
                  <input
                    type="text"
                    id="accountNumber"
                    placeholder="Enter account number"
                    class="w-full p-2 border border-gray-300 rounded focus:border-sky-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700"
                    >IFSC Code</label
                  >
                  <input
                    type="text"
                    id="ifscCode"
                    placeholder="Enter IFSC code"
                    class="w-full p-2 border border-gray-300 rounded focus:border-sky-500 focus:outline-none"
                  />
                </div>
              </div>

              <!-- Additional Information -->
              <h2 class="text-lg font-semibold">Additional Information</h2>
              <div class="grid grid-cols-2 gap-4">
                <div>
                  <label class="block text-sm font-medium text-gray-700"
                    >PAN No</label
                  >
                  <input
                    type="text"
                    id="panNo"
                    placeholder="Enter PAN number"
                    class="w-full p-2 border border-gray-300 rounded focus:border-sky-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label
                    for="gstinNo"
                    class="block text-sm font-medium text-gray-700"
                    >GSTIN No</label
                  >
                  <input
                    type="text"
                    id="gstinNo"
                    placeholder="Enter GSTIN number"
                    class="w-full p-2 border border-gray-300 rounded focus:border-sky-500 focus:outline-none"
                    required
                  />
                  <span id="gstinNo-error" class="text-red-500 hidden"></span>
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700"
                    >TDS (%)</label
                  >
                  <input
                    type="text"
                    id="tds"
                    placeholder="Enter TDS percentage"
                    class="w-full p-2 border border-gray-300 rounded focus:border-sky-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700"
                    >Payment Term Days</label
                  >
                  <input
                    type="text"
                    id="paymentTerms"
                    placeholder="Enter payment term days"
                    class="w-full p-2 border border-gray-300 rounded focus:border-sky-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700"
                    >City</label
                  >
                  <input
                    type="text"
                    id="city"
                    placeholder="Enter city"
                    class="w-full p-2 border border-gray-300 rounded focus:border-sky-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label
                    for="aadharNo"
                    class="block text-sm font-medium text-gray-700"
                    >Aadhar No</label
                  >
                  <input
                    type="text"
                    id="aadharNo"
                    placeholder="Enter Aadhar number"
                    class="w-full p-2 border border-gray-300 rounded focus:border-sky-500 focus:outline-none"
                    required
                  />
                  <span id="aadharNo-error" class="text-red-500 hidden"></span>
                </div>
              </div>

              <!-- Job Work Names -->
              <h2 class="text-lg font-semibold mt-6">Job Work Name</h2>
              <div class="grid grid-cols-3 gap-4">
                <div>
                  <input type="checkbox" id="tapka" class="mr-2" />
                  <label for="tapka" class="text-gray-700">Tapka</label>
                </div>
                <div>
                  <input type="checkbox" id="berai" class="mr-2" />
                  <label for="berai" class="text-gray-700">Berai</label>
                </div>
                <div>
                  <input type="checkbox" id="washing" class="mr-2" />
                  <label for="washing" class="text-gray-700">Washing</label>
                </div>
                <div>
                  <input type="checkbox" id="streachingLand" class="mr-2" />
                  <label for="streachingLand" class="text-gray-700"
                    >Streaching Land</label
                  >
                </div>
                <div>
                  <input type="checkbox" id="embossing" class="mr-2" />
                  <label for="embossing" class="text-gray-700">Embossing</label>
                </div>
                <div>
                  <input type="checkbox" id="binding" class="mr-2" />
                  <label for="binding" class="text-gray-700">Binding</label>
                </div>
                <div>
                  <input type="checkbox" id="rawCleep" class="mr-2" />
                  <label for="rawCleep" class="text-gray-700">Raw Cleep</label>
                </div>
                <div>
                  <input type="checkbox" id="tapkaRepairing" class="mr-2" />
                  <label for="tapkaRepairing" class="text-gray-700"
                    >Tapka (Repairing)</label
                  >
                </div>
                <div>
                  <input type="checkbox" id="thokai" class="mr-2" />
                  <label for="thokai" class="text-gray-700">Thokai</label>
                </div>
                <div>
                  <input type="checkbox" id="bindingGathhi" class="mr-2" />
                  <label for="bindingGathhi" class="text-gray-700"
                    >Binding (Gathhi)</label
                  >
                </div>
                <div>
                  <input type="checkbox" id="gachhai" class="mr-2" />
                  <label for="gachhai" class="text-gray-700">Gachhai</label>
                </div>
              </div>
              <!-- Submit Button -->
              <div class="flex justify-end">
                <button
                  type="submit"
                  class="bg-blue-500 text-white px-4 py-2 rounded mt-4 hover:bg-blue-300 flex items-center gap-2"
                >
                  <i class="bx bx-save"></i>
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>

        <!-- delete model -->
        <div
          id="deleteModal"
          class="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center hidden"
        >
          <div
            class="bg-white p-6 rounded-lg shadow-lg"
            id="deleteModalContent"
          >
            <h2 class="text-xl font-bold mb-4">
              Are you sure you want to delete this entry?
            </h2>
            <div class="flex justify-between">
              <button
                id="cancelDelete"
                class="bg-gray-500 text-black hover:bg-gray-300 px-4 py-2 rounded"
              >
                Cancel
              </button>
              <button
                id="confirmDelete"
                class="bg-red-500 text-white hover:bg-red-300 px-4 py-2 rounded"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
    `;
};
