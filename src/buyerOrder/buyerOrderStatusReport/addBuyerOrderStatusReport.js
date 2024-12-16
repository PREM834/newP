// Exporting the BuyerOrderStatusReport function
export function BuyerOrderStatusReport() {
  // Ensure the DOM elements exist before adding event listeners
  const getReportBtn = document.getElementById("getReportBtn");

  if (getReportBtn) {
    // Event Listener for Get Report Button
    getReportBtn.addEventListener("click", function () {
      // Get input values
      const buyerCode = document.getElementById("buyerCode").value;
      const poNumber = document.getElementById("poNumber").value;
      const withDesign = document.getElementById("withDesign").checked;

      // Generate a Report Message
      const reportMessage = `
            Buyer Code: ${buyerCode || "Not Selected"}<br>
            PO Number: ${poNumber || "Not Entered"}<br>
            With Buyer Design & Color: ${withDesign ? "Yes" : "No"}
          `;

      // Show Report
      const reportContainer = document.getElementById("reportContainer");
      const reportContent = document.getElementById("reportContent");

      if (reportContainer && reportContent) {
        reportContainer.classList.remove("hidden");
        reportContent.innerHTML = reportMessage;
      }
    });
  }
}

// Call the function on page load when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  BuyerOrderStatusReport();
});
