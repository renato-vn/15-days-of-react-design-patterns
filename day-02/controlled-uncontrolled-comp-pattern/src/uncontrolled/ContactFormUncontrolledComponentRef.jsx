import { useRef } from "react";

const ContactFormUncontrolledComponentRef = () => {
  const nameRef = useRef(null);
  const lastNameRef = useRef(null);
  const emailRef = useRef(null);
  const phoneRef = useRef(null);
  const interestRef = useRef(null);
  const addressRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const name = nameRef.current.value;
    const lastName = lastNameRef.current.value;
    const email = emailRef.current.value;
    const phone = phoneRef.current.value;
    const interest = interestRef.current.value;
    const address = addressRef.current.value;

    const data = {
      name,
      lastName,
      email,
      phone,
      interest,
      address,
    };

    console.log({ data });
  };

  return (
    <form className="flex flex-col gap-5 min-w-80" onSubmit={handleSubmit}>
      <h2 className="text-2xl text-purple-500 font-semibold italic">
        Contact Form Uncontrolled Component Ref
      </h2>
      <input
        ref={nameRef}
        type="text"
        name="name"
        placeholder="Name..."
        className="controlled-input"
      />

      <input
        ref={lastNameRef}
        type="text"
        name="lastName"
        placeholder="Last Name..."
        className="controlled-input"
      />

      <input
        ref={emailRef}
        type="email"
        name="email"
        placeholder="Email..."
        className="controlled-input"
      />

      <input
        ref={phoneRef}
        type="text"
        name="phone"
        placeholder="Phone..."
        className="controlled-input"
      />

      <textarea
        ref={interestRef}
        name="interest"
        placeholder="Interest..."
        rows={5}
        className="controlled-input"
      />

      <input
        ref={addressRef}
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

export default ContactFormUncontrolledComponentRef;
