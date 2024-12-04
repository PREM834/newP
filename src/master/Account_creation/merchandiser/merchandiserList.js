export default () => {
  return `
  <main class="w-full px-4">
        <div class="form-wrapper flex flex-col items-center w-full px-4">
      <!-- Form Container -->
      <div
        class="bg-white shadow-xl rounded-lg max-w-screen-lg w-full p-6 hidden"
        id="shippingFormContainer"
      >
        <div
          class="flex flex-col sm:flex-row justify-between items-center mb-4"
        >
          <h1 id="form-title" class="text-2xl font-bold">Add Spinner</h1>
          <button
            id="backButton"
            class="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-400 flex items-center gap-2 mt-4 sm:mt-0"
          >
            <i class="bx bx-arrow-back"></i> Back
          </button>
        </div>
        <form
          id="shippingForm"
          class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6"
        >
          <!-- Form Fields -->
          <!-- Account Name -->
          <div>
            <label
              for="accountName"
              class="block text-sm font-medium text-black"
              >Account Name</label
            >
            <input
              type="text"
              id="accountName"
              name="accountName"
              placeholder="Enter Account Name"
              class="block w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-sky-400"
            />
            <span class="error-message text-red-500 text-sm mt-1 hidden"></span>
          </div>

          <!-- Contact Person -->
          <div>
            <label
              for="contactPerson"
              class="block text-sm font-medium text-black"
              >Contact Person</label
            >
            <input
              type="text"
              id="contactPerson"
              name="contactPerson"
              placeholder="Enter Contact Name"
              class="block w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-sky-400"
            />
            <span class="error-message text-red-500 text-sm mt-1 hidden"></span>
          </div>

          <!-- Email -->
          <div>
            <label for="email" class="block text-sm font-medium text-black"
              >Email</label
            >
            <input
              type="email"
              id="email"
              name="email"
              placeholder="xyz@gmail.com"
              class="block w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-sky-400"
            />
            <span class="error-message text-red-500 text-sm mt-1 hidden"></span>
          </div>

          <!-- Guarantor -->
          <div>
            <label for="Guarantor" class="block text-sm font-medium text-black"
              >Guarantor</label
            >
            <input
              type="text"
              id="Guarantor"
              placeholder="Guarantor Name"
              class="block w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-sky-400"
            />
          </div>

          <!-- Address -->
          <div class="md:col-span-2">
            <label for="address" class="block text-sm font-medium text-black"
              >Address</label
            >
            <input
              type="text"
              id="address"
              placeholder="Enter Address"
              class="block w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-sky-400"
            />
          </div>

          <!-- Mobile No -->
          <div>
            <label for="mobileNo" class="block text-sm font-medium text-black"
              >Mobile Number</label
            >
            <input
              type="text"
              id="mobileNo"
              placeholder="Enter Your 10 digit Mobile Number"
              name="mobileNo"
              class="block w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-sky-400"
            />
            <span class="error-message text-red-500 text-sm mt-1 hidden"></span>
          </div>

          <!-- GSTIN Number -->
          <div>
            <label for="gstinNo" class="block text-sm font-medium text-black"
              >GSTIN Number</label
            >
            <input
              type="text"
              id="gstinNo"
              placeholder="Enter GST Number"
              name="gstinNo"
              class="block w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-sky-400"
            />
            <span class="error-message text-red-500 text-sm mt-1 hidden"></span>
          </div>

          <!-- L.S.T -->
          <div>
            <label for="lst" class="block text-sm font-medium text-black"
              >L.S.T</label
            >
            <input
              type="text"
              id="lst"
              placeholder="Enter L.S.T."
              class="block w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-sky-400"
            />
          </div>

          <!-- TDS (%) -->
          <div>
            <label for="tds" class="block text-sm font-medium text-black"
              >TDS (%)</label
            >
            <input
              type="text"
              id="tds"
              placeholder="Enter TDS (%)"
              class="block w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-sky-400"
            />
          </div>

          <!-- Payment Term Days -->
          <div>
            <label
              for="paymentTermDays"
              class="block text-sm font-medium text-black"
              >Payment Term Days</label
            >
            <input
              type="text"
              id="paymentTermDays"
              placeholder="Enter Payment Term Days"
              class="block w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-sky-400"
            />
          </div>

          <!-- Late Fine -->
          <div>
            <label for="lateFine" class="block text-sm font-medium text-black"
              >Late Fine (%)</label
            >
            <input
              type="number"
              id="lateFine"
              placeholder="Enter Late Fine"
              class="block w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-sky-400"
            />
          </div>

          <!-- Group Name -->
          <div>
            <label for="groupName" class="block text-sm font-medium text-black"
              >Group Name</label
            >
            <input
              type="text"
              id="groupName"
              value="SHIPPING COMPANY"
              class="block w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-sky-400"
            />
          </div>

          <!-- City -->
          <div>
            <label for="city" class="block text-sm font-medium text-black"
              >City</label
            >
            <input
              type="text"
              id="city"
              placeholder="Enter City"
              class="block w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-sky-400"
            />
            <span class="error-message text-red-500 text-sm mt-1 hidden"></span>
          </div>

          <!-- State -->
          <div>
            <label for="state" class="block text-sm font-medium text-black"
              >State</label
            >
            <input
              type="text"
              id="state"
              placeholder="Enter State"
              class="block w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-sky-400"
            />
            <span class="error-message text-red-500 text-sm mt-1 hidden"></span>
          </div>

          <!-- Code -->
          <div>
            <label for="code" class="block text-sm font-medium text-black"
              >Code</label
            >
            <input
              type="text"
              id="code"
              placeholder="Enter Code"
              class="block w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-sky-400"
            />
          </div>

          <!-- Bank Name -->
          <div>
            <label for="bankName" class="block text-sm font-medium text-black"
              >Bank Name</label
            >
            <input
              type="text"
              id="bankName"
              placeholder="Enter Bank Name"
              class="block w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-sky-400"
            />
          </div>

          <!-- Bank Branch -->
          <div>
            <label for="bankBranch" class="block text-sm font-medium text-black"
              >Bank Branch</label
            >
            <input
              type="text"
              id="bankBranch"
              placeholder="Enter Bank Branch"
              class="block w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-sky-400"
            />
          </div>

          <!-- A/C number -->
          <div>
            <label
              for="AccountNumber"
              class="block text-sm font-medium text-black"
              >Account Number</label
            >
            <input
              type="text"
              id="AccountNumber"
              placeholder="Enter Account Number"
              class="block w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-sky-400"
            />
            <span class="error-message text-red-500 text-sm mt-1 hidden"></span>
          </div>

          <!-- IFSC Code -->
          <div>
            <label for="IFSCCode" class="block text-sm font-medium text-black"
              >IFSC Code</label
            >
            <input
              type="text"
              id="IFSCCode"
              placeholder="Enter IFSC Code"
              class="block w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-sky-400"
            />
            <span class="error-message text-red-500 text-sm mt-1 hidden"></span>
          </div>

          <!-- Bank Address -->
          <div class="md:col-span-2">
            <label
              for="BankAddress"
              class="block text-sm font-medium text-black"
              >Bank Address</label
            >
            <input
              type="text"
              id="BankAddress"
              placeholder="Enter Bank Address"
              class="block w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-sky-400"
            />
          </div>

          <!-- Opening -->
          <div>
            <label for="Opening" class="block text-sm font-medium text-black"
              >Opening</label
            >
            <input
              type="text"
              id="Opening"
              name="Opening"
              class="block w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-sky-400"
            />
          </div>

          <!-- C.S.T -->
          <div>
            <label for="cst" class="block text-sm font-medium text-black"
              >C.S.T</label
            >
            <input
              type="text"
              id="cst"
              name="cst"
              class="block w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-sky-400"
            />
          </div>

          <!-- Aadhar Number -->
          <div>
            <label for="aadharNo" class="block text-sm font-medium text-black"
              >Aadhar Number</label
            >
            <input
              type="number"
              id="aadharNo"
              name="aadharNo"
              placeholder="Enter Aadhar Number"
              class="block w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-sky-400"
            />
            <span class="error-message text-red-500 text-sm mt-1 hidden"></span>
          </div>

          <!-- TIN Number -->
          <div>
            <label for="TINNo" class="block text-sm font-medium text-black"
              >TIN Number</label
            >
            <input
              type="text"
              id="TINNo"
              name="TINNo"
              class="block w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-sky-400"
            />
            <span class="error-message text-red-500 text-sm mt-1 hidden"></span>
          </div>

          <!-- PAN Number -->
          <div>
            <label for="panNo" class="block text-sm font-medium text-black"
              >PAN Number</label
            >
            <input
              type="text"
              id="panNo"
              name="panNo"
              placeholder="Enter PAN Number"
              class="block w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-sky-400"
            />
            <span class="error-message text-red-500 text-sm mt-1 hidden"></span>
          </div>

          <div class="flex justify-end gap-4">
            <button
              type="button"
              id="closeModal"
              class="bg-gray-600 text-white px-2 py-1 rounded hover:bg-gray-400"
            >
              <i class="bx bx-x"></i> Cancel
            </button>
            <button
              type="submit"
              class="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-300"
            >
              <i class="bx bx-save"></i> Save
            </button>
          </div>
          
        </form>
      </div>
    </div>

    <!-- Merchandiser List Container -->
    <div
      id="spinnerListContainer"
      class="container mx-auto mt-8 w-full max-w-screen-lg p-6 bg-white shadow-md rounded-lg"
    >
      <h1 class="text-2xl font-bold mb-4">Merchandiser List</h1>
      <button
        id="openModal"
        class="mb-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-300"
      >
        <i class="bx bx-plus"></i> Add
      </button>

      <!-- Merchandiser List Table -->
      <div class="overflow-x-auto">
        <table class="table-auto w-full border-collapse border border-gray-300">
          <thead class="bg-gray-200">
            <tr>
              <th class="border bg-blue-500 px-4 py-2 text-center">A/C Name</th>
              <th class="border bg-blue-500 px-4 py-2 text-center">A/C Code</th>
              <th class="border bg-blue-500 px-4 py-2 text-center">Email</th>
              <th class="border bg-blue-500 px-4 py-2 text-center">
                Mobile No
              </th>
              <th class="border bg-blue-500 px-4 py-2 text-center">
                Aadhar No
              </th>
              <th class="border bg-blue-500 px-4 py-2 text-center">Action</th>
            </tr>
          </thead>
          <tbody id="spinnerTableBody">
            <!-- Dynamic rows will be added here -->
          </tbody>
        </table>
        <p id="noRecordsMessage" class="text-center mt-4 text-gray-500">
          No matching records found
        </p>
      </div>
    </div>

    <!-- Delete Modal -->
    <div
      id="deleteModal"
      class="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center hidden"
    >
      <div class="bg-white p-6 rounded-lg shadow-lg">
        <p class="text-lg font-medium">
          Are you sure you want to delete this entry?
        </p>
        <div class="flex justify-end gap-4 mt-4">
          <button
            id="cancelDelete"
            class="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600"
          >
            Cancel
          </button>
          <button
            id="confirmDelete"
            class="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
    </main>
    `;
};
