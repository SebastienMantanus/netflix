// import Movies from "../movies_rnexgr.json";

const Section = (props) => {
  return (
    <>
      <h1>{props.category}</h1>
      <div className="covers">
        {props.pictures.map((element, index) => {
          return <img index={index} src={element} alt="cover" />;
        })}
      </div>
    </>
  );
};

export default Section;
