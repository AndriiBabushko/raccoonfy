import { FC, FormEventHandler, MouseEventHandler } from "react";

interface MyButtonProps {
  buttonText: string;
  buttonType: "button" | "reset" | "submit";
  className: string;
  onClickEvent?: MouseEventHandler<HTMLButtonElement>;
  onSubmitEvent?: FormEventHandler<HTMLButtonElement>;
  buttonId?: string;
  buttonName?: string;
}

const MyButton: FC<MyButtonProps> = ({
  buttonText,
  buttonId,
  buttonName,
  className,
  onClickEvent,
  onSubmitEvent,
  buttonType = "button",
}) => {
  console.log(className);

  return (
    <button
      type={buttonType}
      id={buttonId}
      name={buttonName}
      onClick={onClickEvent}
      onSubmit={onSubmitEvent}
      className={className}
    >
      {buttonText}
    </button>
  );
};

export default MyButton;
