import { useState } from "react";
import Button from "../../ui/Button";
import CreateCabinForm from "../cabins/CreateCabinForm";
import Modal from "../../ui/Modal";
import CabinTable from "./CabinTable";

function AddCabin() {
  return (
    <Modal>
      <Modal.Open opens="cabin-form">
        <Button>Add new cabin</Button>
      </Modal.Open>
      <Modal.Window name="cabin-form">
        <CreateCabinForm />
      </Modal.Window>

      <Modal.Open opens="table">
        <Button>Show table</Button>
      </Modal.Open>
      <Modal.Window name="table">
        <CabinTable />
      </Modal.Window>
    </Modal>
  );
}

// function AddCabin() {
//   const [isOpenModal, setOpenModal] = useState(false);

//   return (
//     <div>
//       <Button onClick={() => setOpenModal((show) => !show)}>
//         {isOpenModal ? "Close" : "Add new cabin"}
//       </Button>
//       {isOpenModal && (
//         <Modal onClose={() => setOpenModal(false)}>
//           <CreateCabinForm onCloseModal={() => setOpenModal(false)} />
//         </Modal>
//       )}
//     </div>
//   );
// }

export default AddCabin;
