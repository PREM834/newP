export default () => {
  return `
        <main class="w-full px-4 mb-3">
            <div class="max-w-4xl mx-auto bg-white p-6 sm:p-8 rounded shadow-md">
      <h1 class="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Add Order</h1>
      <form id="addOrderForm" class="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
        <!-- Company -->
        <div>
          <label class="block text-sm font-medium mb-1">Company *</label>
          <select
            class="w-full p-2 border border-gray-300 rounded focus:border-sky-500 focus:outline-none"
            id="company"
            required
          >
            <option>XYZ </option>
          </select>
        </div>
        <!-- Merchandiser -->
        <div>
          <label class="block text-sm font-medium mb-1">Merchandiser *</label>
          <select
            class="w-full p-2 border border-gray-300 rounded focus:border-sky-500 focus:outline-none"
            id="merchandiser"
            required
          >
            <option value="">Select Merchandiser</option>
            <option value="1">AARIF KHAN</option>
            <option value="2">FARHAN SHARIQUE</option>
            <option value="3">MOHD SHAHBAZ</option>
          </select>
        </div>
        <!-- Buyer -->
        <div>
          <label class="block text-sm font-medium mb-1">Buyer *</label>
          <input
            type="text"
            class="w-full p-2 border border-gray-300 rounded focus:border-sky-500 focus:outline-none"
            id="buyer"
            placeholder="New"
            required
          />
        </div>
        <!-- Buyer Order No -->
        <div>
          <label class="block text-sm font-medium mb-1">Buyer Ord. NO *</label>
          <input
            type="text"
            class="w-full p-2 border border-gray-300 rounded focus:border-sky-500 focus:outline-none"
            id="buyerOrderNo"
            required
          />
        </div>
        <!-- Dispatch Date -->
        <div>
          <label class="block text-sm font-medium mb-1">Dispatch Date</label>
          <input
            type="date"
            class="w-full p-2 border border-gray-300 rounded focus:border-sky-500 focus:outline-none"
            id="dispatchDate"
          />
        </div>
        <!-- Order Date -->
        <div>
          <label class="block text-sm font-medium mb-1">Ord. Date *</label>
          <input
            type="date"
            class="w-full p-2 border border-gray-300 rounded focus:border-sky-500 focus:outline-none"
            id="orderDate"
            value="2024-12-07"
            required
          />
        </div>
        <!-- Unit -->
        <div>
          <label class="block text-sm font-medium mb-1">Unit *</label>
          <select
            class="w-full p-2 border border-gray-300 rounded focus:border-sky-500 focus:outline-none"
            id="unit"
            required
          >
            <option value="">Select Unit</option>
            <option value="KG">Meter</option>
            <option value="PCS">Feet</option>
            <option value="PCS">Yard</option>
          </select>
        </div>
        <!-- Currency -->
        <div>
          <label class="block text-sm font-medium mb-1">Currency *</label>
          <select
            class="w-full p-2 border border-gray-300 rounded focus:border-sky-500 focus:outline-none"
            id="currency"
            required
          >
            <option value="">Select Currency</option>
            <option value="USD">USD</option>
            <option value="INR">INR</option>
            <option value="INR">EURO</option>
          </select>
        </div>
        <!-- Shipping -->
        <div>
          <label class="block text-sm font-medium mb-1">Shipping</label>
          <select
            class="w-full p-2 border border-gray-300 rounded focus:border-sky-500 focus:outline-none"
            id="shipping"
          >
            <option value="">Select Shipping</option>
            <option value="Air">Commercial</option>
            <option value="Sea">Free Trade</option>
            <option value="Sea">TBD</option>
          </select>
        </div>
        <!-- Shipping Type -->
        <div>
          <label class="block text-sm font-medium mb-1">Shipping Type *</label>
          <select
            class="w-full p-2 border border-gray-300 rounded focus:border-sky-500 focus:outline-none"
            id="shippingType"
            required
          >
            <option value="">Select Type</option>
          </select>
        </div>
        <!-- Status -->
        <div>
          <label class="block text-sm font-medium mb-1">Status *</label>
          <select
            class="w-full p-2 border border-gray-300 rounded focus:border-sky-500 focus:outline-none"
            id="status"
            required
          >
            <option value="">Select Status</option>
            <option value="Pending">DRAFT</option>
            <option value="Confirmed">PROCESSEING</option>
            <option value="Confirmed">CLOSE</option>
          </select>
        </div>
        <!-- Forwarder -->
        <div>
          <label class="block text-sm font-medium mb-1">Forwarder</label>
          <select
            class="w-full p-2 border border-gray-300 rounded focus:border-sky-500 focus:outline-none"
            id="forwarder"
          >
            <option value="">Select</option>
            <option value="">GLS</option>
            <option value="">OCL</option>
            <option value="">DSV</option>
            <option value="">PANALPINA</option>
            <option value="">GAC</option>
            <option value="">HTL LOGISTICS</option>
            <option value="">DTDC</option>
            <option value="">TO BE DECIDED</option>
            <option value="">DHL</option>
          </select>
        </div>
        <!-- CHA -->
        <div>
          <label class="block text-sm font-medium mb-1">CHA</label>
          <select
            class="w-full p-2 border border-gray-300 rounded focus:border-sky-500 focus:outline-none"
            id="cha"
          >
            <option value="">Select</option>
            <option value="">ATCL</option>
            <option value="">OCL</option>
            <option value="">GLS</option>
            <option value="">PANALPINA</option>
            <option value="">DSV</option>
            <option value="">HTL LOGISTICS</option>
            <option value="">DTDC</option>
            <option value="">TO BE DECIDED</option>
            <option value="">DHL</option>
          </select>
        </div>
        <!-- Transporter -->
        <div>
          <label class="block text-sm font-medium mb-1">Transporter</label>
          <select
            class="w-full p-2 border border-gray-300 rounded focus:border-sky-500 focus:outline-none"
            id="transporter"
          >
            <option value="">Select</option>
          </select>
        </div>
        <!-- Submit Button -->
        <div class="col-span-1 sm:col-span-2">
          <button
          type="submit"
          class="bg-blue-500 text-white px-4 py-2 rounded mt-4 hover:bg-blue-300 flex justify-end gap-2"
        >
          <i class="bx bx-save"></i> Save
        </button>
        </div>
      </form>
    </div>
        </main>
    `;
};
