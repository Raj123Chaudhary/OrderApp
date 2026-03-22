import { useState } from "react";

import "./App.css";

function App() {
  const validate = () => {
    const errors = {};
    if (!formData.customerName.trim()) {
      errors.customerName = "Customer Name is Required";
    } else if (!formData.customerName.length > 3)
      errors.customerName = "Name should be al least 3 character";
    if (!formData.phoneNumber) {
      errors.phoneNumber = "phone number required";
    } else if (!/^\d{10}$/.test(formData.phoneNumber)) {
      errors.phoneNumber = "Phone number must be 10 digits";
    }
    if (!formData.address.trim()) {
      errors.address = "Add address";
    }
    return errors;
  };
  const [formData, setFormData] = useState({
    customerName: "",
    phoneNumber: "",
    address: "",
    serviceType: "A",
    pickupSlot: "Today Morning",
  });
  const [errors, setErrors] = useState({});
  const [orders, setOrders] = useState([]);
  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });

    console.log(formData);
  };
  const handleSubmit = (e) => {
    // console.log("i am in handle sumbit");
    e.preventDefault();
    const validationErrors = validate();
    console.log(validationErrors);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setOrders([formData, ...orders]);
    console.log(orders);
    setFormData({
      customerName: "",
      phoneNumber: "",
      address: "",
      serviceType: "A",
      pickupSlot: "Today Morning",
    });
  };
  return (
    <div className=" w-full m-2 p-2 ">
      {/* section 1  Create orders  */}
      <h1 className="text-2xl  text-center font-semibold text-red-400 ">
        Create your orders
      </h1>
      <div className="w-full md:w-[50%] p-2 mt-10 mx-auto">
        <form onSubmit={handleSubmit} action="">
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

          {errors.customerName && (
            <p className="text-red-500 text-sm mt-1">{errors.customerName}</p>
          )}

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
          {errors.phoneNumber && (
            <p className="text-red-500 text-sm mt-1">{errors.phoneNumber}</p>
          )}
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
          {errors.address && (
            <p className="text-red-500 text-sm mt-1">{errors.address}</p>
          )}
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
            className="px-5 w-full mt-5 py-2 bg-yellow-300 text-black border-none "
            type="submit"
            value={"Submit"}
          />
        </form>
      </div>

      {/* section 2 your orders  */}

      <div>
        <div className="md:w-[80%] w-full p-2 mx-auto mt-5">
          {orders.length === 0 ? (
            <h1 className="text-center text-2xl font-semibold text-red-400">
              No orders yet
            </h1>
          ) : (
            <table className="w-full border border-gray-300">
              <thead className="bg-gray-200">
                <tr>
                  <th className="border p-2">Name</th>
                  <th className="border p-2">Phone</th>
                  <th className="border p-2">Address</th>
                  <th className="border p-2">Service</th>
                  <th className="border p-2">Slot</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order, index) => (
                  <tr key={index} className="text-center">
                    <td className="border p-2">{order.customerName}</td>
                    <td className="border p-2">{order.phoneNumber}</td>
                    <td className="border p-2">{order.address}</td>
                    <td className="border p-2">{order.serviceType}</td>
                    <td className="border p-2">{order.pickupSlot}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
