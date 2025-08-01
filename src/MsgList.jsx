import { Msg } from "./Msg";

export function MsgList() {
  const names = ["Abhishek", "Murkesh", "Veera", "Vicky", "Latha"];

  // Array of Strings -> Array of JSX (Transform)
  return (
    <div>
      {names.map((nm) => (
        <Msg name={nm} />
      ))}
    </div>
  );
}