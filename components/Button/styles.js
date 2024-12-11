import styled, { keyframes } from 'styled-components';
import { Button as AntButton } from 'antd';

// 定义主题色
export const theme = {
    primary: {
        gradient: 'linear-gradient(135deg, #42d392, #647eff)',
        gradientHover: 'linear-gradient(135deg, #3bc185, #536dff)',
        gradientActive: 'linear-gradient(135deg, #35ae78, #4259ff)',
        shadow: 'rgba(66, 211, 146, 0.2)',
    },
    secondary: {
        color: '#42d392',
        colorHover: '#3bc185',
        colorActive: '#35ae78',
    },
    danger: {
        gradient: 'linear-gradient(135deg, #ff7875, #ff7ecb)',
        gradientHover: 'linear-gradient(135deg, #ff8885, #ff69b4)',
        gradientActive: 'linear-gradient(135deg, #ff6b6b, #ff5aa5)',
        color: '#ff7875',
        colorHover: '#ff6b6b',
        colorActive: '#ff5aa5',
    }
};

export const pressAnimation = keyframes`
    0% { transform: scale(1); }
    50% { transform: scale(0.98); }
    100% { transform: scale(1); }
`;

export const StyledButton = styled(AntButton)`
    // ... (保持原有的 styled-components 样式代码)
`; 