import { useState } from "react";

import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    customerName: "",
    phoneNumber: "",
    address: "",
    serviceType: "A",
    pickupSlot: "Today Morning",
  });

  const [orders, setOrders] = useState([]);
  const handleChange = (event) => {
    setFormData({
  [event.target.name] :event.target.value;
    })
  
    console.log(formData);
  };

  return (
    <div className=" w-full m-2 p-2 border border-red-400">
      {/* section 1  Create orders  */}
      <h1 className="text-2xl  text-center font-semibold text-red-400 ">
        Create your orders
      </h1>
      <div className="w-[30%] mt-10 mx-auto">
        <form action="">
          <div className="flex justify-between">
            <label className="w-full" htmlFor="">
              Customer Name
            </label>
            <input
              onChange={handleChange}
              placeholder="Enter Name"
              className="border px-3 py-1 w-full  focus:outline-none "
              type="text"
              name="customerName"
              id=""
              value={formData.customerName}
            />
          </div>
          <div className="flex mt-2 justify-between">
            <label className="w-full" htmlFor="">
              Phone Number
            </label>
            <input
              onChange={handleChange}
              placeholder="Phone Number"
              className="border px-3 py-1 w-full  focus:outline-none "
              type="number"
              name="phoneNumber"
              id=""
              value={formData.phoneNumber}
            />
          </div>
          <div className="flex mt-2 justify-between">
            <label className="w-full" htmlFor="">
              Address
            </label>
            <input
              onChange={handleChange}
              placeholder="Address"
              className="border px-3 py-1 w-full  focus:outline-none "
              type="text"
              name="address"
              id=""
              value={formData.address}
            />
          </div>
          <div className="flex mt-2 justify-between">
            <label className="w-full" htmlFor="">
              Service Type
            </label>
            <select
              onChange={handleChange}
              className="w-full px-2 py-1 border focus:outline-none"
              name="serviceType"
              id=""
              value={formData.serviceType}
            >
              <option value="Today Morning">Today Morning</option>
              <option value="Today Evening">Today Evening</option>
            </select>
          </div>
          <div className="flex mt-2 justify-between">
            <label className="w-full" htmlFor="">
              Pickup Slot
            </label>
            <select
              onChange={handleChange}
              className="w-full focus:outline-none border py-1 px-2"
              name="pickupSlot"
              id=""
              value={formData.pickupSlot}
            >
              <option value="A">A</option>
              <option value="B">B</option>
            </select>
          </div>

          <input
            onChange={handleChange}
            className="px-5 w-full mt-5 py-2 bg-yellow-300 text-black border-none "
            type="button"
            value={"Submit"}
          />
        </form>
      </div>

      {/* section 2 your orders  */}
      <h1 className="text-2xl text-red-400 font-semibold text-center mt-10">
        Your Order
      </h1>
    </div>
  );
}

export default App;
