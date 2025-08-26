// Icons.
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// types.
import type { TCreateItemsProps } from "../types";

export function CreateItems({ onSubmit }: TCreateItemsProps) {
  return (
    <form onSubmit={onSubmit} aria-label="Add new item form" className="form">
      <div>
        <label htmlFor="item" className="label">
          New Item
        </label>
        <input
          type="text"
          id="item"
          name="item"
          required
          aria-label="New item title"
        />
      </div>
      <button type="submit" className="button">
        Add item
        <FontAwesomeIcon icon={faPlus} />
      </button>
    </form>
  );
}
