import React, { useState } from 'react'

import ModalContext from '../contexts/ModalContext'

const ModalProvider = ({ children }) => {
  const [modalVisible, setModalVisible] = useState(false)
  const [whichModal, setWhichModal] = useState('')

  return (
    <ModalContext.Provider
      value={{ modalVisible, setModalVisible, whichModal, setWhichModal }}
    >
      {children}
    </ModalContext.Provider>
  )
}

export default ModalProvider
