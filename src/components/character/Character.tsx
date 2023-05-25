import React, { useEffect, useRef, useState } from "react";
import { handleKeyDown, handleKeyUp } from "./CharacterMovement";
import { spriteAshDown } from "./constants";
import { CharacterStyle, Sprits } from "./styles";

export const Character = () => {
  const [position, setPosition] = useState({ x: 900, y: 400 });
  const [isKeyPressed, setIsKeyPressed] = useState(false);
  const [currentSprite, setCurrentSprite] = useState<string[]>(spriteAshDown);
  const [indice, setIndice] = useState(0);
  const characterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const elemento = characterRef.current;
    if (elemento) {
      elemento.focus();
      elemento.addEventListener("blur", () => {
        setTimeout(() => {
          if (!elemento.contains(document.activeElement)) {
            elemento.focus();
          }
        }, 0);
      });
    }
  }, []);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    const updateSprite = () => {
      setIndice((prevIndice) => {
        let newIndice = prevIndice + 1;
        if (newIndice >= currentSprite.length) {
          newIndice = 0;
        }
        return newIndice;
      });

      timeoutId = setTimeout(updateSprite, 250); // Ajuste o intervalo de acordo com a velocidade desejada
    };
    if (isKeyPressed) {
      timeoutId = setTimeout(updateSprite, 300); // Inicie a primeira chamada
    }
    return () => {
      clearTimeout(timeoutId);
    };
  }, [isKeyPressed]);

  useEffect(() => {
    const handleWindowScroll = () => {
      const characterElement = characterRef.current;
      if (characterElement) {
        characterElement.scrollIntoView({
          behavior: "auto",
          block: "center",
          inline: "center",
        });
      }
    };

    window.addEventListener("scroll", handleWindowScroll);
    return () => {
      window.removeEventListener("scroll", handleWindowScroll);
    };
  }, []);

  return (
    <CharacterStyle
      position={position}
      ref={characterRef}
      onKeyDown={(event) =>
        handleKeyDown(
          event,
          setPosition,
          setIsKeyPressed,
          setCurrentSprite,
          isKeyPressed
        )
      }
      onKeyUp={() => handleKeyUp(setIsKeyPressed, setIndice)}
      tabIndex={0}
      id="Ash"
    >
      <Sprits
        src={currentSprite[indice]}
        alt="ash-down"
        priority
        suppressHydrationWarning
      />
    </CharacterStyle>
  );
};
