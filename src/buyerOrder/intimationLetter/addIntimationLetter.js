export function addIntimationLetter() {
  let rowToPrint = null;

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
            <input type="text" placeholder="Our Ord" class="w-full p-2 border border-gray-300 rounded focus:border-sky-500 focus:outline-none" />
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
          <td class="border border-gray-300 p-2">
            <select class="w-full p-2 border border-gray-300 rounded focus:border-sky-500 focus:outline-none">
              <option value="Meter">Meter</option>
              <option value="Feet">Feet</option>
              <option value="Inch">Inch</option>
            </select>
          </td>
          <td class="border border-gray-300 p-2">
            <select class="w-full p-2 border border-gray-300 rounded focus:border-sky-500 focus:outline-none">
              <option value="INR">INR</option>
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
              <option value="GBP">GBP</option>
              <option value="JPY">JPY</option>
              <option value="AUD">AUD</option>
            </select>
          </td>
          <td class="border border-gray-300 p-2">
            <select class="w-full p-2 border border-gray-300 rounded focus:border-sky-500 focus:outline-none">
              <option value="PROCESSING">PROCESSING</option>
              <option value="COMPLETED">COMPLETED</option>
            </select>
          </td>
          <td class="border border-gray-300 p-2">
            <button class="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-400" onclick="openPrintModal(this)">
              <i class="bx bx-printer"></i>
            </button>
          </td>
        `;
    orderList.appendChild(newRow);
  });

  // Open Print Modal
  function openPrintModal(button) {
    rowToPrint = button.closest("tr");
    const data = Array.from(rowToPrint.querySelectorAll("input, select")).map(
      (el) =>
        el.tagName === "SELECT" ? el.options[el.selectedIndex].text : el.value
    );
    document.getElementById("printDetails").textContent =
      "The following row will be printed:\n" + data.join(", ");
    document.getElementById("printModal").classList.remove("hidden");
  }
  window.openPrintModal = openPrintModal;

  // Close Print Modal
  function closePrintModal() {
    rowToPrint = null;
    document.getElementById("printModal").classList.add("hidden");
  }
  window.closePrintModal = closePrintModal;

  // Confirm Print
  function confirmPrint() {
    alert("Printing row data...");
    closePrintModal();
  }
  window.confirmPrint = confirmPrint;

  // Close Modal When Clicking Outside Content
  function closeModalOutside(event) {
    if (event.target.hasAttribute("data-modal-background")) {
      closePrintModal();
    }
  }
  window.closeModalOutside = closeModalOutside;
}
