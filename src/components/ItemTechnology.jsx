export function ItemTechnology({ tech }) {
  return (
    <div className="container-technology">
      {/* <div className={`${tech.class}`}> */}
      <img className="technology-icon" src={tech.image} alt="" />
      <p>{tech.name}</p>
      {/* </div> */}
    </div>
  );
}
