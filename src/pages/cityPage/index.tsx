import React from "react";
import { Character } from "../../components/character/Character";
import { Background } from "./styles";

const CityPage: React.FC = () => {
  return (
    <div style={{ width: "2000px", height: "2000px", border: "1px solid" }}>
      <Background>
        <Character />
      </Background>
    </div>
  );
};

export default CityPage;
