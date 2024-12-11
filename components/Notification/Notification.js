import React from 'react';
import { createRoot } from 'react-dom/client';
import NotificationItem from './NotificationItem';
import { NotificationWrapper } from './styles';

let notifications = {
    success: [],
    error: []
};

let notificationContainer = null;
let root = null;

const NotificationComponent = ({ items }) => {
    return (
        <NotificationWrapper>
            {items.map(({ key, message, type }) => (
                <NotificationItem
                    key={key}
                    type={type}
                    message={message}
                    onClose={() => removeNotification(key, type)}
                />
            ))}
        </NotificationWrapper>
    );
};

const initContainer = () => {
    if (!notificationContainer) {
        notificationContainer = document.createElement('div');
        document.body.appendChild(notificationContainer);
        root = createRoot(notificationContainer);
    }
};

const renderNotifications = () => {
    const allNotifications = [
        ...notifications.success.map(item => ({ ...item, type: 'success' })),
        ...notifications.error.map(item => ({ ...item, type: 'error' }))
    ];

    root.render(<NotificationComponent items={allNotifications} />);
};

const removeNotification = (key, type) => {
    if (type === 'success') {
        notifications.success = notifications.success.filter(item => item.key !== key);
    } else {
        notifications.error = notifications.error.filter(item => item.key !== key);
    }
    renderNotifications();
};

export const successNotification = (message) => {
    initContainer();
    const key = Date.now();

    if (notifications.success.length >= 2) {
        notifications.success.shift();
    }

    notifications.success.push({ key, message });
    renderNotifications();

    setTimeout(() => {
        removeNotification(key, 'success');
    }, 5000);
};

export const errorNotification = (message) => {
    initContainer();
    const key = Date.now();

    if (notifications.error.length >= 2) {
        notifications.error.shift();
    }

    notifications.error.push({ key, message });
    renderNotifications();
};

const NotificationProvider = ({ children }) => children;

export default NotificationProvider; 