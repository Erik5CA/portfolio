

export function ButtonLink({obj, url}) {
  
  return (
    <div className="container-links">
      <a
        className={`${obj.class}`}
        href={obj.url ? obj.url : url }
        target="_blank"
        rel="noreferrer"
      >
        <img src={obj.icon} alt="" />
        {obj.name}
      </a>
    </div>
  );
}
