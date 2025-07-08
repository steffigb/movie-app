type SearchProps = {
    searchTerm: string,
    setSearchTerm: React.Dispatch<React.SetStateAction<string>>
}

const Search = ({searchTerm, setSearchTerm}: SearchProps, ) => {
    
    return (
        <div className="search">
            <div>
                <img src="search.svg" alt="Search" />

                <input
                    type="text"
                    placeholder="Search a movie"
                    value={searchTerm}
                    onChange={(event) => setSearchTerm(event.target.value)}
                />
            </div>
        </div>

    )
}
export default Search