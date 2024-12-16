export function addViewOrderList() {
    let editingIndex = null;
    let deleteIndex = null;
  
    // Add Row Function
    document.getElementById("add-row-btn").addEventListener("click", function () {
      const orderList = document.getElementById("order-list");
  
      const newRow = document.createElement("tr");
      newRow.classList.add("hover:bg-gray-100");
  
      newRow.innerHTML = `
        <td class="border border-gray-300 p-2">
          <input type="text" placeholder="Buyer" class="w-full p-2 border border-gray-300 rounded focus:border-sky-500 focus:outline-none" />
        </td>
        <td class="border border-gray-300 p-2">
          <input type="text" placeholder="Buy Ord" class="w-full p-2 border border-gray-300 rounded focus:border-sky-500 focus:outline-none" />
        </td>
        <td class="border border-gray-300 p-2">
          <input type="date" class="w-full p-2 border border-gray-300 rounded focus:border-sky-500 focus:outline-none" />
        </td>
        <td class="border border-gray-300 p-2">
          <input type="date" class="w-full p-2 border border-gray-300 rounded focus:border-sky-500 focus:outline-none" />
        </td>
        <td class="border border-gray-300 p-2">
          <input type="number" placeholder="Pcs" class="w-full p-2 border border-gray-300 rounded focus:border-sky-500 focus:outline-none" />
        </td>
        <td class="border border-gray-300 p-2">
          <input type="number" placeholder="Area" class="w-full p-2 border border-gray-300 rounded focus:border-sky-500 focus:outline-none" />
        </td>
        <td class="border border-gray-300 p-0">
          <select class="w-full p-2 border border-gray-300 rounded focus:border-sky-500 focus:outline-none">
            <option value="Meter">Meter</option>
            <option value="Feet">Feet</option>
          </select>
        </td>
        <td class="border border-gray-300 p-2">
          <select class="w-full p-2 border border-gray-300 rounded focus:border-sky-500 focus:outline-none">
            <option value="PROCESSING">PROCESSING</option>
            <option value="COMPLETED">COMPLETED</option>
          </select>
        </td>
        <td class="border border-gray-300 p-2 flex gap-2">
          <button class="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-400" onclick="editRow(this)">
            <i class="bx bx-edit-alt"></i>
          </button>
          <button class="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600" onclick="openDeleteModal(this)">
            <i class="bx bx-trash"></i>
          </button>
        </td>
      `;
      orderList.appendChild(newRow);
    });
  
    // Edit Row Function
    window.editRow = (button) => {
      const row = button.closest("tr");
      const inputs = row.querySelectorAll("input, select");
  
      const isEditing = button.classList.contains("bg-green-500");

        if (isEditing) {
          button.innerHTML = `<i class="bx bx-edit-alt"></i>`;
          button.classList.replace("bg-green-500", "bg-blue-500");
        } else {
          button.innerHTML = `<i class="bx bx-save"></i>`;
          button.classList.replace("bg-blue-500", "bg-green-500");
        }
        
      inputs.forEach((input) => {
        input.disabled = !input.disabled; // Toggle disabled state
      });
    };
  
    // Remove Row Function
    window.removeRow = () => {
      if (deleteIndex !== null) {
        const rows = document.querySelectorAll("#order-list tr");
        rows[deleteIndex]?.remove();
        closeDeleteModal();
        deleteIndex = null;
      }
    };
  
    // Open Delete Modal
    window.openDeleteModal = (button) => {
      const row = button.closest("tr");
      deleteIndex = Array.from(row.parentNode.children).indexOf(row);
      document.getElementById("deleteModal").classList.remove("hidden");
    };
  
    // Close Delete Modal
    window.closeDeleteModal = () => {
      document.getElementById("deleteModal").classList.add("hidden");
      deleteIndex = null;
    };
    window.closeModalOutside = (event) => {
        const modal = document.getElementById("deleteModal");
      
        // Check if the click target has the 'data-modal-background' attribute
        if (event.target.hasAttribute("data-modal-background")) {
          modal.classList.add("hidden");
        }
      };
  }
  