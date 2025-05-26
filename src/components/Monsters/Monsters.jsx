import { useState, useEffect } from "react";
import { CardList } from "../Card/Card.components";
import { Search } from "../Search/Search.component.jsx";
import "./Monsters.styles.css";

export default function Monsters() {
  const [monsters, setMonsters] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    async function getUsers() {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users",
          {
            method: "GET",
          }
        );

        const users = await response.json();
        setMonsters(users);
      } catch (error) {
        console.log(error);
      }
    }
    getUsers();
  }, []);

  const filteredMonsters = monsters.filter((monster) => {
    return monster.name.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <>
      <h1>Monsters Rolodex</h1>
      <Search searchValue={setSearch} />
      <div className="card-list">
        {filteredMonsters.length === 0 ? (
          <h1>No monsters found</h1>
        ) : (
          filteredMonsters.map((monster) => (
            <CardList key={monster.id} monster={monster} />
          ))
        )}
      </div>
    </>
  );
}
