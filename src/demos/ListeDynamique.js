import { useState } from 'react'; // hooks

function ListeDynamique() {
  const [list, setList] = useState([]);

  return (
    <div>
      <button
        className="bg-gray-300"
        onClick={() => {
          setList([...list, 'toto']);
        }}
        type="button"
      >add toto {list.length}
      </button>
      <ul>
        {list.map((item) => <li>{item}</li>)}
      </ul>
    </div>
  );
}

export default ListeDynamique;
