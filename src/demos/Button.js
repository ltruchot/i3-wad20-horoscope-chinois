import { useState } from 'react'; // hooks

function Button() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <button
        className="bg-gray-300"
        onClick={() => setCount(count + 1)}
        type="button"
      >increment
      </button> count: {count}
    </div>
  );
}

export default Button;
