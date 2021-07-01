import React from "react";
import { useSelector } from "react-redux"
import CardCategory from "../components/CardCategory";
import { isEmpty } from "../components/Utils";


const Categories = () => {
  const categories = useSelector(state => state.categoryReducer)

  return (
    <>
    <div className="jumbotron text-center">
        <h1 className="display-4">Afficher par catégorie</h1>
        <p className="lead">Choisissez uniquement les enchères qui vous intéressent</p>
    </div>
    <div className="grid-container">{!isEmpty(categories) && categories.map( (category) => <CardCategory key={category.id} image={category.image} title={category.title} />)}</div>
    </>
  );
}

export default Categories;