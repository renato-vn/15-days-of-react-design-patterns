const SortFilterControls = ({
  search,
  sortOrder,
  onSearchChange,
  onSortChange,
}) => {
  return (
    <div className="sort-filter-controls">
      <div className="control-group">
        <select
          value={sortOrder}
          onChange={(e) => onSortChange(e.target.value)}
        >
          <option value="">Select an option</option>
          <option value="low">Price: low to high</option>
          <option value="high">Price: high to low</option>
        </select>
      </div>
      <div className="control-group">
        <input
          type="search"
          placeholder="Search..."
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
        />
      </div>
    </div>
  );
};

export default SortFilterControls;
