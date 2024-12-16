export default () => {
  return `
        <main class="w-full px-4 mb-3">
      <div class="container mx-auto px-4 py-8" id="mainContent"></div>
      <!-- Delete Confirmation Modal -->
      <div
        id="deleteModal"
        class="hidden fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50"
        onclick="closeModalOutside(event)"
      >
        <div
          class="bg-white rounded-lg p-6 w-96"
          onclick="event.stopPropagation()"
        >
          <h2 class="text-xl font-semibold mb-4">Confirm Deletion</h2>
          <p>Are you sure you want to delete this row?</p>
          <div class="flex justify-end gap-4 mt-6">
            <button
              class="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400"
              onclick="closeDeleteModal()"
            >
              Cancel
            </button>
            <button
              class="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
              onclick="confirmDelete()"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </main>
    `;
};
