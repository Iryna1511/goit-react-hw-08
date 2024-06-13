import { useId } from "react";
import { changeFilter } from "../../redux/filters/slice";
import css from "./SearchBox.module.css";
import { useDispatch } from "react-redux";

const SearchBox = () => {
  const id = useId();

  const dicpatch = useDispatch();
  const handleSearch = (e) => {
    dicpatch(changeFilter(e.target.value));
  };
  return (
    <div className={css.container}>
      <label className={css.text} htmlFor={id}>
        Find contacts by name
      </label>
      <input
        onChange={handleSearch}
        className={css.input}
        name="value"
        id={id}
        type="text"
      />
    </div>
  );
};

export default SearchBox;
