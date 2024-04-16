

export function ButtonLink({obj}) {
  
  return (
    <div className="container-links">
      <a
        className={`${obj.class}`}
        href={obj.url}
        target="_blank"
        rel="noreferrer"
      >
        <img src={obj.icon} alt="" />
        {obj.name}
      </a>
    </div>
  );
}
