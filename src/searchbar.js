const SearchBar = () =>{
  return(
    <form action="/" method="get">
      <label>
        Search Blog Posts
      </label>
      <input type="number" placeholder="Search Postal Code" />
      <button type="submit">Search</button>
    </form>
  )

}

export default SearchBar;
