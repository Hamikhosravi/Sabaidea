import classes from "./ListBoxModal.module.css";

type ListBoxModalProps = {
    options: string[];
    selectedOptions: string[];
    handleCheckboxChange: (option:string) => void;
}

const ListBoxModal = ({ options, selectedOptions, handleCheckboxChange }: ListBoxModalProps) => {
    return (
        <div className={classes.listBox}>
            {options.map((option) => (
                <div key={option} className={classes.listItem}>
                    <label className={classes.label}>
                        <input
                            type="checkbox"
                            checked={selectedOptions.includes(option)}
                            onChange={() => handleCheckboxChange(option)}
                        />
                        {option}
                    </label>
                </div>
            ))}
        </div>
    );
};

export default ListBoxModal;
