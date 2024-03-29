import _, { add } from "lodash";
import React from "react";
import Input from "./input";

export default function Calculator() {
  const [augend, setAugend] = React.useState(0);
  const [addend, setAddend] = React.useState(0);

  const sum = React.useMemo(() => {
    return _.add(augend, addend);
  }, [augend, addend]);

  return (
    <div>
      <Input value={augend} setValue={setAugend} />
      <br />
      <Input value={addend} setValue={setAddend} />
      <p>Sum: {sum}</p>
    </div>
  );
}
