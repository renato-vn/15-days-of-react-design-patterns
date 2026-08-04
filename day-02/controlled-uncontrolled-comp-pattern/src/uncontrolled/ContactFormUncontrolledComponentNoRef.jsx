const ContactFormUncontrolledComponentNoRef = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    console.log({ data });
  };

  return (
    <form className="flex flex-col gap-5 min-w-80" onSubmit={handleSubmit}>
      <h2 className="text-2xl text-purple-500 font-semibold italic">
        Contact Form Uncontrolled Component No Ref
      </h2>
      <input
        type="text"
        name="name"
        placeholder="Name..."
        className="controlled-input"
      />

      <input
        type="text"
        name="lastName"
        placeholder="Last Name..."
        className="controlled-input"
      />

      <input
        type="email"
        name="email"
        placeholder="Email..."
        className="controlled-input"
      />

      <input
        type="text"
        name="phone"
        placeholder="Phone..."
        className="controlled-input"
      />

      <textarea
        name="interest"
        placeholder="Interest..."
        rows={5}
        className="controlled-input"
      />

      <input
        type="text"
        name="address"
        placeholder="Address..."
        className="controlled-input"
      />

      <button className="px-4 py-2 bg-purple-600 hover:bg-purple-600/75 rounded-lg text-white cursor-pointer">
        Submit
      </button>
    </form>
  );
};

export default ContactFormUncontrolledComponentNoRef;
