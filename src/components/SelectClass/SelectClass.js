import { Component, useState } from "react";
import { CSClassNames } from "./CSClassNames";
import { CSClassNames2 } from "./CSClassNames";
import styled from "styled-components";

const Button = styled.button`
  background-color: #c5050c;
  color: white;
  font-size: 16px;
  padding: 10px 30px;
  border-radius: 10px;
  margin: 5px 0px;
  cursor: pointer;
  border-color: #9b0000;


  &:disabled {
    color: grey;
    opacity: 0.4;
    cursor: default;
  }
`;

const ButtonToggle = styled(Button)`
margin-left: 1%;  
margin-right: 1%;
  opacity: 0.6;
  ${({ active }) =>
    active &&
    `
    opacity: 1;
  `}
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
`

function ToggleGroup1() {
    const [active, setActive] = useState("");
    return (
        <div>
            <ButtonGroup>
                {CSClassNames.map(type => (
                <ButtonToggle
                    key={type}
                    active={active === type}
                    onClick={() => setActive(type)}
                >
                    {type}
                </ButtonToggle>
                ))}
            </ButtonGroup>
            <ButtonGroup>
                {CSClassNames2.map(type => (
                <ButtonToggle
                    key={type}
                    active={active === type}
                    onClick={() => setActive(type)}
                >
                    {type}
                </ButtonToggle>
                ))}
            </ButtonGroup>
        </div>
    );
  }

class SelectClass extends Component {

    render() {
        return(
            <div>
                <ToggleGroup1/>
            </div>
        );
    }
}

export default SelectClass;