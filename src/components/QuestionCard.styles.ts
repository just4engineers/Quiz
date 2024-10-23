import styled from 'styled-components';

export const Wrapper = styled.div`
  max-width: 1100px;
  background: #FEFEFE; /* White card background */
  border-radius: 10px;
  border: 2px solid #C5CCD3; /* French gray border */
  padding: 20px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.15);
  text-align: center;

  p {
    font-size: 1rem;
    color: #111827; /* Rich black text */
  }
`;

type ButtonWrapperProps = {
  $userClicked: boolean;
};

export const ButtonWrapper = styled.div<ButtonWrapperProps>`
  transition: all 0.3s ease;

  :hover {
    opacity: 0.8;
  }

  button {
    cursor: pointer;
    user-select: none;
    font-size: 0.8rem;
    width: 100%;
    height: 40px;
    margin: 5px 0;
    background: ${({ $userClicked }) =>
      $userClicked
        ? '#001F3F' /* Navy blue for clicked */
        : '#3A6D8C'}; /* Lighter navy blue for default */
    border: 3px solid #FFFFFF; /* White border */
    box-shadow: 1px 2px 0px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    color: #FFFFFF; /* White text */
    text-shadow: 0px 1px 0px rgba(0, 0, 0, 0.25);
  }
`;
