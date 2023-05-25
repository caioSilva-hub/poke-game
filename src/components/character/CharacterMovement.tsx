import React from "react";
import {
  spriteAshDown,
  spriteAshLeft,
  spriteAshRight,
  spriteAshUp,
} from "./constants";

export const handleKeyDown = (
  event: React.KeyboardEvent<HTMLDivElement>,
  setPosition: React.Dispatch<React.SetStateAction<{ x: number; y: number }>>,
  setIsKeyPressed: React.Dispatch<React.SetStateAction<boolean>>,
  setCurrentSprite: React.Dispatch<React.SetStateAction<string[]>>,
  isKeyPressed: boolean
) => {
  switch (event.key) {
    case "ArrowUp":
    case "w":
      if (isKeyPressed) {
        setPosition((prevPosition) => ({
          x: prevPosition.x,
          y: Math.max(prevPosition.y - 5, 0),
        }));
      }
      setIsKeyPressed(true);
      setCurrentSprite(spriteAshUp);
      break;
    case "ArrowDown":
    case "s":
      if (isKeyPressed) {
        setPosition((prevPosition) => ({
          x: prevPosition.x,
          y: Math.min(prevPosition.y + 5, window.innerHeight - -1015),
        }));
      }
      setIsKeyPressed(true);
      setCurrentSprite(spriteAshDown);
      break;
    case "ArrowLeft":
    case "a":
      if (isKeyPressed) {
        setPosition((prevPosition) => ({
          x: Math.max(prevPosition.x - 5, 0),
          y: prevPosition.y,
        }));
      }
      setIsKeyPressed(true);
      setCurrentSprite(spriteAshLeft);
      break;
    case "ArrowRight":
    case "d":
      if (isKeyPressed) {
        setPosition((prevPosition) => ({
          x: Math.min(prevPosition.x + 5, window.innerWidth - -5),
          y: prevPosition.y,
        }));
      }
      setIsKeyPressed(true);
      setCurrentSprite(spriteAshRight);
      break;
    default:
      break;
  }
};

export const handleKeyUp = (
  setIsKeyPressed: React.Dispatch<React.SetStateAction<boolean>>,
  setIndice: React.Dispatch<React.SetStateAction<number>>
) => {
  setIsKeyPressed(false);
  setIndice(0);
};
