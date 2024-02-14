export type PrimaryButtonProps = {
  text: string;
  click: () => void;
};

export function PrimaryButton(props: PrimaryButtonProps) {
  return (
    <button
      className="text-lg mt-4  md:text-2xl lg:text-5xl border-2 border-white p-2 items-center rounded-sm bg-transparent hover:bg-white hover:text-black"
      onClick={props.click}
    >
      {props.text}
    </button>
  );
}
