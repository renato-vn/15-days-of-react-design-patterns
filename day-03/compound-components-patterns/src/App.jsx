import { useState } from "react";
// import Modal from "./messy/Modal";
import Modal from "./with-pattern/modal/Modal";
import AccordionDemo from "./with-pattern/accordion/AccordionDemo";
import Card from "./with-pattern/card/Card";
import CardMessy from "./messy/Card";
import Image from "./assets/image.png";

import "./App.css";
import TabsDemo from "./with-pattern/tabs/TabsDemo";
import CardDemo from "./with-pattern/card/CardDemo";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [tabActive, setTabActive] = useState("tab1");

  const handleTabActive = (id) => {
    setTabActive(id);
  };

  return (
    <div className="flex flex-col items-center">
      <button onClick={() => setIsOpen(true)}>Open Modal</button>

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <Modal.Header>
          <h2>Welcome!</h2>
        </Modal.Header>
        <Modal.Body>
          <p>This is a modal built with the Compound Component pattern.</p>
          <AccordionDemo />
        </Modal.Body>
        <Modal.Footer>
          <button onClick={() => setIsOpen(false)}>Close</button>
          <button onClick={() => alert("Action performed!")}>Do Action</button>
        </Modal.Footer>
      </Modal>

      <CardMessy
        imageUrl={Image}
        title="Perezoso Messy"
        body={
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint ullam
            quas impedit quod optio dolore in distinctio ab quo nostrum quam
            aliquid porro ex aspernatur, maxime ratione iste? Placeat,
            provident.
          </p>
        }
        secondaryAction={<button>See More Messy</button>}
        primaryAction={<button>Like</button>}
      />

      <CardDemo />

      <TabsDemo onTabActive={handleTabActive} tabActive={tabActive} />
    </div>
  );
}

export default App;
