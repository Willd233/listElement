// Dependencies.
import { useEffect } from "react";

// Types.
type TUseSEO = {
  title: string;
  description: string;
};

export function UseSeo(props: TUseSEO) {
  const { title, description } = props;

  useEffect(() => {
    setTimeout(() => {
      document.title = title;
      document
        .querySelector("meta[name='description']")
        ?.setAttribute("content", description);
    }, 500);
  }, [title, description]);
}
