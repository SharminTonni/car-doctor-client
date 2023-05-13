import logo1 from "../../../assets/icons/deliveryt.svg";

const Features = () => {
  const features = [
    "Expert Team",
    "Timely Delivery",
    "24/7 Support",
    "Best Equipment ",
    "100% Guranty",
  ];
  return (
    <div className="my-12">
      <div className=" text-center space-y-5">
        <h2 className="text-2xl font-bold text-orange-600">Core Features</h2>
        <h1 className="text-5xl font-bold">Why Choose Us? </h1>
        <p>
          the majority have suffered alteration in some form, by injected
          humour, or randomised <br /> words which donot look even slightly
          believable.
        </p>
      </div>
      <div className="lg:flex gap-3">
        {features.map((feature) => (
          <>
            <div className="card border mt-6 py-4 card-compact w-96 bg-base-100 shadow-xl hover:bg-orange-600">
              <figure>
                <img src={logo1} alt="Shoes" />
              </figure>
              <div className="card-body">
                <p className=" text-center font-bold">{feature}</p>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default Features;
