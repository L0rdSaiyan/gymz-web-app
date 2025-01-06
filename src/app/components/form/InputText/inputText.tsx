
interface PropsTypes {
  text?: string;
  eventChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export default function InputText({ text, eventChange }: PropsTypes) {
  return (
    <input
      type="text"
      placeholder={text}
      onChange={eventChange}
      className="px-4 py-2 w-full md:w-1/2 lg:w-1/3 border border-gray-300 rounded-lg bg-black text-gray-700 focus:outline-none focus:border-blue-500"
      required={true}
    />
  );
}
