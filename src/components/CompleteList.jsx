import { useComplete } from "../context/CompleteContext";

const CompleteList = () => {
  const { complete, removeComplete } = useComplete();
  // const deleteComplete = e => {
  //   const completeToRemove = e.target.value;
  //   removeComplete(completeToRemove);
  // };
  return (
    <ul className="complete-list">
      {complete.map(item => (
        ////replace the value of the key and some attr with item.timestamp later
        <li key={item.task}>
          <input
            id={item.task}
            type="checkbox"
            defaultChecked
            value={item.task}
            disabled
          />
          <label htmlFor={item.task}>{item.task}</label>
          <button value={item.task} onClick={() => removeComplete(item)}>
            delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default CompleteList;
