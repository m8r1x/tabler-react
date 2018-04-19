import * as React from "react";
import { shallow } from "enzyme";
import { Icon } from "../src/components";

describe("Icon", () => {
  it("should render `i` with .icon-name", () => {
    const component = shallow(<Icon name="icon-name" />);
    expect(component.hasClass("fe")).toBe(true);
    expect(component.hasClass("fe-icon-name")).toBe(true);
  });
  it("should render `i` with .icon-name and .other-class", () => {
    const component = shallow(
      <Icon name="icon-name" className="other-class" />
    );
    expect(component.hasClass("fe")).toBe(true);
    expect(component.hasClass("fe-icon-name")).toBe(true);
    expect(component.hasClass("other-class")).toBe(true);
  });
  it("should render `a` with .icon-name", () => {
    const component = shallow(<Icon name="icon-name" link />);
    expect(component.hasClass("icon")).toBe(true);
    expect(
      component.contains(
        <a className="icon">
          <i className="fe fe-icon-name" />
        </a>
      )
    ).toBe(true);
  });
  it("should render `a` with .icon and `i` with .icon-name and .other-class", () => {
    const component = shallow(
      <Icon name="icon-name" className="other-class" link />
    );
    expect(component.hasClass("icon")).toBe(true);
    expect(
      component.contains(
        <a className="icon">
          <i className="fe fe-icon-name other-class" />
        </a>
      )
    ).toBe(true);
  });
  it("should render `a` with .icon-name and aria-hidden=true", () => {
    const component = shallow(<Icon name="icon-name" link isAriaHidden />);
    expect(component.hasClass("icon")).toBe(true);
    expect(
      component.contains(
        <a className="icon" aria-hidden="true">
          <i className="fe fe-icon-name" />
        </a>
      )
    ).toBe(true);
  });
});
