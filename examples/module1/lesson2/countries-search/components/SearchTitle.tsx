const SearchTitle = ({ name = '(Country search)' }: { name?: string }) => {
  return <h1 className="text-2xl">Wyszukiwarka państw {name}</h1>;
};

export default SearchTitle;
