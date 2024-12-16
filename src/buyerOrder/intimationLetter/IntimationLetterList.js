export default () => {
  return ` 
        <main class="w-full px-4 mb-3">
            <div class="container mx-auto bg-white shadow-md rounded-lg p-6">
      <h1 class="text-2xl font-bold mb-4">Buyer Order List</h1>

      <!-- Add Row Button -->
      <div class="flex justify-end mb-4">
        <button
          id="add-row-btn"
          class="px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600"
        >
          + Add
        </button>
      </div>

      <!-- Responsive Table Container -->
      <div class="overflow-x-auto">
        <table class="table-auto w-full border-collapse border border-gray-300 text-sm">
          <thead>
            <tr class="bg-blue-500 text-white">
              <th class="border border-gray-300 p-2">Buyer</th>
              <th class="border border-gray-300 p-2">Our Ord</th>
              <th class="border border-gray-300 p-2">Buy Ord</th>
              <th class="border border-gray-300 p-2">Ord. Date</th>
              <th class="border border-gray-300 p-2">Due Date</th>
              <th class="border border-gray-300 p-2">Pcs</th>
              <th class="border border-gray-300 p-2">Area</th>
              <th class="border border-gray-300 p-2">Unit</th>
              <th class="border border-gray-300 p-2">Currency</th>
              <th class="border border-gray-300 p-2">Status</th>
              <th class="border border-gray-300 p-2">Action</th>
            </tr>
          </thead>
          <tbody id="order-list">
            <!-- Dynamic rows will be appended here -->
          </tbody>
        </table>
      </div>
    </div>

    <!-- Print Confirmation Modal -->
    <div
      id="printModal"
      class="hidden fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50"
      onclick="closeModalOutside(event)"
      data-modal-background
    >
      <div
        class="bg-white rounded-lg p-6 w-96"
        onclick="event.stopPropagation()"
      >
        <h2 class="text-xl font-semibold mb-4">Print Confirmation</h2>
        <p id="printDetails" class="mb-4 text-gray-700"></p>
        <div class="flex justify-end gap-4 mt-6">
          <button
            class="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400"
            onclick="closePrintModal()"
          >
            Cancel
          </button>
          <button
            class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            onclick="confirmPrint()"
          >
            Print
          </button>
        </div>
      </div>
    </div>
        </main>
    `;
};
