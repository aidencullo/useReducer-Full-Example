import Button from "../Button";

export default function ActionButton({
  children,
  className,
  dispatch,
  type,
  payload
}) {
  return (
    <Button
      onClick={() => dispatch({ type: type, payload: payload })}
      className={className}
    >
      {children}
    </Button>
  );
}
