export function ItemTechnology({ tech }) {
  return (
    <div className="container-technology">
      <img className="technology-icon" src={tech.image} alt="" />
      <p>{tech.name}</p>
    </div>
  );
}
