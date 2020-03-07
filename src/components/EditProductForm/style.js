import styled,{css} from 'styled-components'


export const Wrapper = styled.section`
    padding: 4rem;
    border: 2px solid yellow;
    border-radius: 0.5rem;

    
`;

const color = css`color:yellow;`;

export const Input = styled.input`
    padding: ${props => props.theme.spacing.lg };
    border-radius: 0.5rem;
    background-color: ${ props => props.theme.colors.primary };
    color: ${ props => props.theme.colors.secondary };
    
    &[type='number'] {
        color: ${ props => props.value < 10 ? 'green' : 'red' };
    }
    

`;

export const LargeInput = styled(Input)`
    font-size: 2rem;
    &:hover {
        ${color}
    }
`;
