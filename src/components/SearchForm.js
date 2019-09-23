import React from "react";

export default function SearchForm(props) {
  const { search, setSearch } = props;
  const handleChange = e => {
    setSearch({ ...search, [e.target.id]: e.target.value });
  };
  return (
    <>
      <h3>Search by Name</h3>

      <form onSubmit={e => e.preventDefault()}>
        <input
          id="name"
          name="name"
          type="text"
          value={search.name}
          onChange={handleChange}
          placeholder="Search character name"
        />
      </form>
    </>
  );
}
