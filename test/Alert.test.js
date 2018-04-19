import * as React from "react";
import { shallow } from "enzyme";
import { Alert } from "../src/components";

describe("Alert", () => {
  it("should render div with .alert .alert-primary and role='alert'", () => {
    const component = shallow(<Alert type="primary">Alert!</Alert>);
    expect(
      component.contains(
        <div className="alert alert-primary" role="alert">
          Alert!
        </div>
      )
    ).toBe(true);
  });
});
