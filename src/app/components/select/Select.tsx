interface OptionType {
    value: string;
    label: string;
}

interface PropsTypes {
    labelTittle: string;
    multipleAllowed: boolean;
    eventChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void; 
    defaultValue ?: string;
    options: OptionType[];
}

export default function Select({ labelTittle, multipleAllowed, options, eventChange, defaultValue}: PropsTypes) {
    return (
        <>
            <label className="text-white">{labelTittle}</label>
            <select multiple={multipleAllowed} onChange={eventChange} value={defaultValue} className="px-4 text-white py-2 w-full md:w-1/2 lg:w-1/3 border border-gray-300 rounded-lg bg-black focus:outline-none focus:border-blue-500">
                {options.map((option, index) => (
                    <option key={index} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </>
    );
}
