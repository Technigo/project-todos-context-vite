import "./clearStorage.css";
export const ClearStorage = () => {
  const clearStorage = event => {
    event.preventDefault();
    localStorage.clear("To-Do");
  };

  return (
    <button
      className="btn"
      onClick={clearStorage}>
      Clear Storage
    </button>
  );
};
