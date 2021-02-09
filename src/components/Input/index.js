
import styled from 'styled-components'
import PropTypes from 'prop-types'

const InputBase = styled.input`
    width: 100%;
    padding: 15px;
    font-size: 14px;
    border: 1px solid ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.black};
    background-color: ${({ theme }) => theme.colors.white};
    border-radius: ${({ theme }) => theme.borderRadius};
    outline: 0;
    margin-bottom: 25px;

`



export default function Input({onChange, placeholder, name, value}){
    



    return (
        <InputBase
            onChange={onChange}
            placeholder={placeholder}
            name={name}
            value = {value}
            />
    )
}

Input.defaultProps = {
    value: '',

}

Input.propTypes = {
    onChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
}