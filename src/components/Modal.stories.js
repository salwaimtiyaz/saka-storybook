import React, { useState } from 'react';
import Modal from './Modal';

export default {
    title: 'Components/Modal',
    component: Modal,
};

const Template = (args) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <button onClick={() => setIsOpen(true)} className="modal-button">Open Modal</button>
            <Modal {...args} isOpen={isOpen} onClose={() => setIsOpen(false)} />
        </>
    );
};

export const Default = Template.bind({});
Default.args = {
    title: 'My Modal',
    children: <p>This is the content of the modal!</p>,
};