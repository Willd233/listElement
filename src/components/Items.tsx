// Icons.
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Types.
import type { TItemsProps } from "../types";

export function Items({ items, handleDelete }: TItemsProps) {
  return (
    <ul aria-label="List of items" className="list">
      {items.length > 0 ? (
        <>
          {items.map(({ id, title }) => (
            <li key={id} className="list-item">
              {title}
              <button
                type="button"
                onClick={() => {
                  handleDelete(id);
                }}
                className={`${"button"} ${"button--delete"}`}
              >
                Delete
                <FontAwesomeIcon icon={faTrash} />
              </button>
            </li>
          ))}
        </>
      ) : (
        <h3>No items found</h3>
      )}
    </ul>
  );
}
