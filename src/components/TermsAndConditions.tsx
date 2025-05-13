import { useId, useState } from 'react';

const Terms = () => {
  const [isChecked, setIsChecked] = useState(false);
  const id = useId();
  return (
    <div>
      <h1>Terms</h1>
      <p>Hehehe</p>
      <form>
        <label htmlFor={id}></label>
        <input role="checkbox" type="checkbox" onChange={(e) => setIsChecked(e.target.checked)} checked={isChecked} name="terms" id={id} />
        <button disabled={!isChecked} type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Terms;
