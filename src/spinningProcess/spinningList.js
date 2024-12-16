export default () => {
  return `
        <main class="w-full px-4 mb-3">
    <div class="container mx-auto px-4 py-8 bg-white p-5 mb-5 rounded-lg shadow" id="mainContent">

    </div>
</main>
    <!-- Delete Modal -->
    <div
      id="deleteModal"
      class="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center hidden"
    >
      <div class="bg-white p-6 rounded-lg shadow-lg">
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

    `;
};
