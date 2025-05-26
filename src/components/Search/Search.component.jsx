import "./Search.styles.css";

export function Search({ searchValue }) {
  const onSearchChange = (event) => {
    event.preventDefault();
    const targetValue = event.target.value;
    searchValue(targetValue);
  };

  return (
    <>
      <form>
        <input
          className="search"
          type="text "
          name="search"
          id="search"
          placeholder="search monsters"
          // value={data.search}
          onChange={onSearchChange}
        />
      </form>
    </>
  );
}
