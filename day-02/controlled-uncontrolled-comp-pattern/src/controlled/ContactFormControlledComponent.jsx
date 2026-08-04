import { useState } from "react";

const INITIAL_STATE = {
  name: "",
  lastName: "",
  email: "",
  phone: "",
  interest: "",
  address: "",
};

const ContactForm = () => {
  const [form, setForm] = useState(INITIAL_STATE);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ form });
  };

  return (
    <form className="flex flex-col gap-5 min-w-80" onSubmit={handleSubmit}>
      <h2 className="text-2xl text-purple-500 font-semibold italic">
        Contact Form Controlled Component
      </h2>
      <input
        type="text"
        name="name"
        value={form.name}
        placeholder="Name..."
        className="controlled-input"
        onChange={handleChange}
      />

      <input
        type="text"
        name="lastName"
        value={form.lastName}
        placeholder="Last Name..."
        className="controlled-input"
        onChange={handleChange}
      />

      <input
        type="email"
        name="email"
        value={form.email}
        placeholder="Email..."
        className="controlled-input"
        onChange={handleChange}
      />

      <input
        type="text"
        name="phone"
        value={form.phone}
        placeholder="Phone..."
        className="controlled-input"
        onChange={handleChange}
      />

      <textarea
        name="interest"
        value={form.interest}
        placeholder="Interest..."
        rows={5}
        className="controlled-input"
        onChange={handleChange}
      />

      <input
        type="text"
        name="address"
        value={form.address}
        placeholder="Address..."
        className="controlled-input"
        onChange={handleChange}
      />

      <button className="px-4 py-2 bg-purple-600 hover:bg-purple-600/75 rounded-lg text-white cursor-pointer">
        Submit
      </button>
    </form>
  );
};

export default ContactForm;
