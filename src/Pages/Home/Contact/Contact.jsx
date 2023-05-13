import calender from "./../../../assets/icons/check.svg";

const Contact = () => {
  return (
    <footer className="footer p-10 bg-neutral text-neutral-content my-6">
      <div className="grid grid-flow-col grid-cols-1 md:grid-cols-3 gap-6 mx-auto">
        <div className="flex gap-3">
          <img src={calender} alt="" />
          <div>
            <p>We are open monday-friday</p>
            <h2 className="text-2xl font-bold">7:00 am - 9:00 pm</h2>
          </div>
        </div>
        <div className="flex gap-3">
          <img src={calender} alt="" />
          <div>
            <p>Have a question?</p>
            <h2 className="text-2xl font-bold">+2546 251 2658</h2>
          </div>
        </div>
        <div className="flex gap-3">
          <img src={calender} alt="" />
          <div>
            <p>Need a repair? our address</p>
            <h2 className="text-2xl font-bold">Liza Street, New York</h2>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
