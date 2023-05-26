import {Button, Modal } from 'flowbite-react';
import React, { Fragment } from 'react'
import {useCreateHospitalModal} from "../../hooks/superadmin/useCreateHospitalModal";
import Text from "../global/Text";

interface CreateHospitalModalProps {
  showModal: boolean
  close: () => void
}

const CreateHospitalModal = ({showModal, close}:CreateHospitalModalProps) => {
  const {
    // Fields
    name,

    // Functions
    createNewOrganization,
  } = useCreateHospitalModal()

  return (
    <Fragment>
      <Modal
        onClose={close}
        dismissible
        position="center"
        show={showModal}
        size="6xl"
      >
        <Modal.Header>
          <Text
            text={`Add Organization`}
            size="2xl"
            weight={600}
            className="text-ds-primary-700 dark:text-ds-primary-200 font-extrabold"
          />
        </Modal.Header>
        <Modal.Body>
          <div className="space-y-6 p-6">
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.
            </p>
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them.
            </p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={createNewOrganization}>
            I accept
          </Button>
          <Button
            color="gray"
            onClick={close}
          >
            Decline
          </Button>
        </Modal.Footer>
      </Modal>
    </Fragment>
  )
}

export default CreateHospitalModal