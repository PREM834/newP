export function addOrderjs() {
  document.getElementById("addOrderForm").addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Order saved successfully!");
  });
}
