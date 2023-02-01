import React, { useState } from 'react';
import { Button, Modal } from 'antd';

const DtailsModal= ({isModalOpen, setIsModalOpen}) => {


  const handleOk = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={() => setIsModalOpen(false)}>
        <p className='text-2xl font-medium p-5'>Product Details here</p>
      </Modal>
    </>
  );
};

export default DtailsModal;