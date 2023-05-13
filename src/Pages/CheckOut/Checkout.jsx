import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const Checkout = () => {
  const service = useLoaderData();
  const { user } = useContext(AuthContext);
  const { title, service_id, img, _id, price } = service;

  const handleService = (e) => {
    e.preventDefault();

    const form = e.target;
    const email = user?.email;
    const name = form.name.value;

    const date = form.date.value;
    const order = {
      service: title,
      email,
      customerName: name,
      date,
      img,
      serviceId: _id,
      price,
    };
    console.log(order);

    fetch("http://localhost:5000/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          alert("booking done");
        }
      });
  };
  return (
    <div>
      <form onSubmit={handleService}>
        <div className="card-body">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="name"
                name="name"
                defaultValue={user?.displayName}
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Date</span>
              </label>
              <input type="date" name="date" className="input input-bordered" />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                name="email"
                placeholder="email"
                defaultValue={user?.email}
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <input
                type="text"
                defaultValue={price}
                className="input input-bordered"
              />
            </div>
          </div>
          <div className="form-control mt-6">
            <input
              className="btn btn-block btn-warning"
              type="submit"
              value="Order Confirm"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Checkout;
