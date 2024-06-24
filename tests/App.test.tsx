import React from "react";

import { render } from "@testing-library/react";

// eslint-disable-next-line import/no-unresolved
import "@testing-library/jest-dom/extend-expect";

function TestComponent() {
    return (
        <div id="root">
            <div>Test</div>
        </div>
    );
}

test("html, body, and #root should have a height of 100%", () => {
    const { container } = render(<TestComponent />);

    return expect(container.querySelector("html")).toHaveProperty("height: 100%");
});
