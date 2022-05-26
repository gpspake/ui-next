import React from "react";
import { render } from "@testing-library/react";

import Icon from "./Icon";

describe("Icon", () => {
  test("renders the Icon component", () => {
    render(
      <Icon
        customStyling={{}}
        onClick={() => {}}
        onFocus={() => {}}
        onMouseDown={() => {}}
        className="testing123"
        color="primary"
        icon="download"
        rotate={0}
        size={'large'} />);
  });
});
