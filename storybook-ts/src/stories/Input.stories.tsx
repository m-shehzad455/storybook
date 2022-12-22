import { storiesOf } from "@storybook/react";
import Input from "../components/Input";

export default {
  title: "Input",
  component: Input,
};

storiesOf("Input", module)
  .add("default", () => <Input placeholder="Enter your name" />)
  .add("with label", () => <Input label="firstName" placeholder="Enter your name" />)
  .add("disabled", () => (<Input label="lastName" placeholder="Enter your name" disabled />
  ));
