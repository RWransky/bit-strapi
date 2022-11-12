// adapted from react-strapi-img
import React from "react";
import { ContextProps } from "@rwransky/bit-strapi.common.types";

const Context = React.createContext<ContextProps>({
  className: "",
  prefix: "",
  style: "",
  stylePlaceholder: "",
  styleImg: "",
});

export default Context;
