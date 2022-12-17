// import Movies from "../movies_rnexgr.json";

const Section = (props) => {
  return (
    <>
      <h1>{props.category}</h1>
      <covers>
        {props.pictures.map((element, index) => {
          return (
            <img index={index} className="cover" src={element} alt="cover" />
          );
        })}
      </covers>
    </>
  );
};

export default Section;
