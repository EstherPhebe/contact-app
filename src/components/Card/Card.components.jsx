import "./Card.styles.css";

export function CardList({ monster }) {
  return (
    <>
      <div className="card-container">
        <img
          src={`https://robohash.org/${monster.id}?set=set2&size=180x180`}
          alt="monster"
        />
        <h3> {monster.name}</h3>
        <p>{monster.phone}</p>
        <p>{monster.email}</p>
      </div>
    </>
  );
}
