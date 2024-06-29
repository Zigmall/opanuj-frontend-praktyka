const QueryField = ({
  query,
  setQuery,
}: {
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
}) => {
  return (
    <label className="flex flex-col">
      Query
      <input
        className="border h-7 mt-1 indent-2"
        type="text"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </label>
  );
};

export default QueryField;
