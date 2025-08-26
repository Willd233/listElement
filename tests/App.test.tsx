// Dependencies.
import { userEvent } from "@testing-library/user-event";
import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";

// Components.
import App from "../src/App";

describe("<App />", () => {
  test("should add items and delete items", async () => {
    const user = userEvent.setup();

    render(<App />);

    // get input
    const input = screen.getByRole("textbox");
    expect(input).toBeDefined();

    // get form
    const form = screen.getByRole("form");
    expect(form).toBeDefined();

    // get button
    const button = form.querySelector("button");
    expect(button).toBeDefined();

    // create item
    await user.type(input, "House");
    await user.click(button!);

    // check list
    const list = screen.getByRole("list");
    expect(list).toBeDefined();
    expect(list.childNodes.length).toBe(1);

    // get new item
    const item = screen.getByText("House");
    expect(item).toBeDefined();

    // delete item
    const deleteButton = item.querySelector("button");
    expect(deleteButton).toBeDefined();
    await user.click(deleteButton!);

    // check no results
    const noResults = screen.queryByText("No items found");
    expect(noResults).not.toBeNull();
  });
});
