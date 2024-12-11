import React from 'react';
import PropTypes from 'prop-types';
import { CheckCircleFilled, CloseCircleFilled, CloseOutlined } from '@ant-design/icons';
import {
    NotificationItem as StyledNotificationItem,
    IconWrapper,
    MessageText,
    CloseButton
} from './styles';

const NotificationItem = ({ type, message, onClose }) => (
    <StyledNotificationItem $type={type}>
        <IconWrapper $type={type}>
            {type === 'success' ? <CheckCircleFilled /> : <CloseCircleFilled />}
        </IconWrapper>
        <MessageText>{message}</MessageText>
        <CloseButton onClick={onClose}>
            <CloseOutlined />
        </CloseButton>
    </StyledNotificationItem>
);

NotificationItem.propTypes = {
    type: PropTypes.oneOf(['success', 'error']).isRequired,
    message: PropTypes.string.isRequired,
    onClose: PropTypes.func.isRequired,
};

export default NotificationItem; 