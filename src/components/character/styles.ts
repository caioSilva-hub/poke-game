import styled from "styled-components";
import Image from "next/image";

interface Props {
  position: {
    x: number;
    y: number;
  };
}

export const CharacterStyle = styled.div<Props>`
  position: absolute;
  left: ${(props) => `${props.position.x}px`};
  top: ${(props) => `${props.position.y}px`};
  outline: none;
`;

export const Sprits = styled(Image)`
  position: absolute;
`;
