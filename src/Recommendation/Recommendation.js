import Button from "../Components/Button";


const Recommendation = ({ handleClick }) => {
  return (
    <>
      <div>
        <h2 className="recommendation-title">Recommendation</h2>
        <div className="recommendation-flex">
          <Button onClickHandler={handleClick} value="" title="All Products" />
          <Button onClickHandler={handleClick} value="Nike" title="Nike" />
          <Button onClickHandler={handleClick} value="Adidas" title="Adidas" />
          <Button onClickHandler={handleClick} value="Puma" title="Puma" />
          <Button onClickHandler={handleClick} value="Vans" title="Vans" />
        </div>
      </div>
    </>
  );
};

export default Recommendation;
