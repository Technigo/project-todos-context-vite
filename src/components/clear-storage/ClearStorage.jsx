import "./clearStorage.css";
export const ClearStorage = () => {
  const clearStorage = event => {
    event.preventDefault();
    localStorage.clear();
    window.location.reload();
  };

  return (
    <button
      className="btn"
      onClick={clearStorage}>
      Clear storage and reload
    </button>
  );
};
