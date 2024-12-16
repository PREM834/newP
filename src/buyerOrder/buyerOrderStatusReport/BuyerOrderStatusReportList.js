export default () => {
  return `
        <main class="w-full px-4 mb-3">
            <!-- Page Container -->
    <div class="container mx-auto p-6 mt-10 bg-white shadow-lg rounded-lg">
      <!-- Header -->
      <h1 class="text-2xl font-semibold mb-6 text-gray-800">
        Buyer Order Status Report
      </h1>

      <!-- Form -->
      <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
        <!-- Buyer Code Dropdown -->
        <div>
          <label for="buyerCode" class="block text-sm font-medium text-black">
            Buyer Code
          </label>
          <select
            id="buyerCode"
            class="w-full p-2 border border-gray-300 rounded focus:border-sky-500 focus:outline-none"
          >
            <option value="">Select Buyer Code</option>
            <option value="NK">NK</option>
            <option value="ZC">ZC</option>
            <option value="LA-07">LA-07</option>
            <option value="CR-33">CR-33</option>
            <option value="CR-15">CR-15</option>
            <option value="IL-129">IL-129</option>
            <option value="LA-49">LA-49</option>
            <option value="AZ-02">AZ-02</option>
            <option value="LG">LG</option>
          </select>
        </div>

        <!-- PO Number Input -->
        <div>
          <label for="poNumber" class="block text-sm font-medium text-black">
            PO NO
          </label>
          <input
            type="text"
            id="poNumber"
            placeholder="Enter PO Number"
            class="w-full p-2 border border-gray-300 rounded focus:border-sky-500 focus:outline-none"
          />
        </div>

        <!-- Checkbox -->
        <div class="flex items-center mt-7">
          <input
            type="checkbox"
            id="withDesign"
            class="h-4 w-4 border-gray-300 rounded"
          />
          <label for="withDesign" class="ml-2 text-sm text-black">
            With Buyer Design & Color
          </label>
        </div>

        <!-- Get Report Button -->
        <div class="flex items-center justify-end mt-7">
          <button
            id="getReportBtn"
            class="px-4 py-2 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-300 transition"
          >
            Get Report
          </button>
        </div>
      </div>
    </div>

    <!-- Placeholder for Report -->
    <div id="reportContainer" class="container mx-auto mt-6 hidden">
      <div
        class="bg-gray-50 border border-gray-300 rounded-lg p-4 text-gray-700"
      >
        <h2 class="text-xl font-semibold mb-2">Report Generated</h2>
        <p id="reportContent">Your selected filters will be displayed here.</p>
      </div>
    </div>
        </main>
    `;
};
