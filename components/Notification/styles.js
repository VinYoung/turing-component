import styled, { keyframes } from 'styled-components';

export const slideIn = keyframes`
    from {
        opacity: 0;
        transform: translateY(-100%);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
`;

export const fadeOut = keyframes`
    from {
        opacity: 1;
        transform: translateY(0);
    }
    to {
        opacity: 0;
        transform: translateY(-100%);
    }
`;

export const NotificationWrapper = styled.div`
    position: fixed;
    top: 20px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 1000;
    display: flex;
    flex-direction: column;
    gap: 10px;
    pointer-events: none;
`;

export const NotificationItem = styled.div`
    display: flex;
    align-items: center;
    padding: 12px 24px;
    border-radius: 8px;
    background: ${props => props.$type === 'success'
        ? 'linear-gradient(45deg, rgba(69, 203, 156, 0.5), rgba(69, 203, 156, 0.7))'
        : 'linear-gradient(45deg, rgba(255, 121, 131, 0.5), rgba(255, 121, 131, 0.7))'
    };
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    animation: ${slideIn} 0.3s ease-out;
    pointer-events: auto;
    min-width: 300px;
    max-width: 500px;
    transition: all 0.3s ease-out;
    position: relative;

    &.removing {
        animation: ${fadeOut} 0.3s ease-out forwards;
    }
`;

export const IconWrapper = styled.div`
    font-size: 20px;
    margin-right: 12px;
    color: ${props => props.$type === 'success' ? '#45CB9C' : '#FF7983'};
`;

export const MessageText = styled.span`
    color: #333;
    flex: 1;
    font-size: 14px;
`;

export const CloseButton = styled.button`
    background: none;
    border: none;
    padding: 4px;
    margin-left: 12px;
    cursor: pointer;
    color: #999;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: color 0.3s;

    &:hover {
        color: #666;
    }
`; 