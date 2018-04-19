import * as React from "react";
import { shallow } from "enzyme";
import { Avatar } from "../src/components";

describe("Avatar", () => {
  it("should render span with .avatar", () => {
    const component = shallow(<Avatar />);
    expect(component.hasClass("avatar")).toBe(true);
  });
  it("should render span with .avatar and children", () => {
    const component = shallow(<Avatar>NG</Avatar>);
    expect(component.hasClass("avatar")).toBe(true);
    expect(component.contains(<span className="avatar">NG</span>)).toBe(true);
  });
  it("should render span with .avatar .avatar-placeholder", () => {
    const component = shallow(<Avatar placeholder />);
    expect(component.hasClass("avatar")).toBe(true);
    expect(component.hasClass("avatar-placeholder")).toBe(true);
  });
  it("should render span with .avatar .avatar-sm", () => {
    const component = shallow(<Avatar size="sm" />);
    expect(component.hasClass("avatar")).toBe(true);
    expect(component.hasClass("avatar-sm")).toBe(true);
  });
  it("should render span with .avatar and background-image", () => {
    const component = shallow(<Avatar image="/path/to/image.ext" />);
    expect(component.hasClass("avatar")).toBe(true);
    expect(
      component.contains(
        <span
          className="avatar"
          style={{
            backgroundImage: "url(/path/to/image.ext)",
          }}
        />
      )
    ).toBe(true);
  });
  it("should render span with .avatar and a red status", () => {
    const component = shallow(<Avatar status="red" />);
    expect(component.hasClass("avatar")).toBe(true);
    expect(
      component.contains(
        <span className="avatar">
          <span className="avatar-status bg-red" />
        </span>
      )
    ).toBe(true);
  });
  it("should render span with .avatar and icon", () => {
    const component = shallow(<Avatar icon="icon-name" />);
    expect(component.hasClass("avatar")).toBe(true);
    /* expect(
      component.contains(
        <span className="avatar">
          <i className="fe fe-icon-name" />
        </span>
      )
    ).toBe(true); */
  });
  it("should render span with .avatar-[`color`]", () => {
    const component = shallow(<Avatar color="blue" />);
    expect(component.hasClass("avatar")).toBe(true);
    expect(component.hasClass("avatar-blue")).toBe(true);
  });
});

describe("Avatar.List", () => {
  it("should render div with .avatar-list", () => {
    const component = shallow(
      <Avatar.List>
        <Avatar />
        <Avatar />
      </Avatar.List>
    );
    expect(component.hasClass("avatar-list")).toBe(true);
    expect(component.contains(<Avatar />)).toBe(true);
  });
});
