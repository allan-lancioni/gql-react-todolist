import React from "react";
import { Link } from "react-router-dom";
import * as S from "./styles";

interface CategorieItemProps {
  name: string;
  color: string;
}

const CategorieItem: React.FC<CategorieItemProps> = ({ name, color }) => {
  return (
    <Link to={"/categorie/" + name} style={{ textDecoration: "none" }}>
      <S.Categorie>
        <S.ColorTag color={color} />
        <S.ListName>{name}</S.ListName>
      </S.Categorie>
    </Link>
  );
};

export default CategorieItem;
