import React from "react";

const headerNavButtons = [
  {
    label: "Shows",
    path: "/shows",
    button: false,
    secondaryButton: false
  },
  {
    label: "About Us",
    path: "/aboutus",
    button: false,
    secondaryButton: false
  },
  {
    label: "Login",
    path: "/login",
    button: true,
    secondaryButton: true
  },
  {
    label: "SUBSCRIBE",
    path: "/subscriber",
    button: true,
    secondaryButton: false
  }
];

const footerNavButtons = [
  {
    label: "Community Guidelines",
    path: "/communityguidelines",
    button: false,
    secondaryButton: false
  },
  {
    label: "Privacy Policy",
    path: "/privacypolicy",
    button: false,
    secondaryButton: false
  },
  {
    label: "Term & Conditions",
    path: "/termconditions",
    button: false,
    secondaryButton: false
  }
];

export {
  headerNavButtons,
  footerNavButtons,
}
