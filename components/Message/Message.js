import React from 'react';
import { createRoot } from 'react-dom/client';
import { StyledAlert } from './styles';

let messageContainer = null;
let root = null;

const showMessage = (content, type = 'success') => {
    // ... (保持原有的逻辑代码)
    root.render(
        <StyledAlert
            message={content}
            type={type}
            showIcon
            $type={type}
        />
    );
    // ...
};

export const showSuccessMessage = (content) => showMessage(content, 'success');
export const showWarningMessage = (content) => showMessage(content, 'warning');

export default showMessage; 