import styled from 'styled-components';
import { Alert } from 'antd';

export const StyledAlert = styled(Alert)`
    background: ${props => props.$type === 'success'
        ? 'linear-gradient(45deg, rgba(66, 211, 146, 0.5), rgba(66, 211, 146, 0.7))'
        : 'linear-gradient(45deg, rgba(255, 174, 0, 0.5), rgba(255, 174, 0, 0.7))'};
`; 