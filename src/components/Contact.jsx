import { createElement as h } from "react";

export default function Contact({ onSend }) {
  return h("section", { id: "contact", className: "sec" }, h("h2", null, "Contact us"), h("p", null, "Questions about an order or sizing? Send a message and we will reply within one working day."),
    h("div", { className: "cf", style: { maxWidth: 480 } }, h("input", { placeholder: "Your name", "aria-label": "Name" }), h("input", { type: "email", placeholder: "Email address", "aria-label": "Email" }), h("textarea", { placeholder: "How can we help?", "aria-label": "Message" }),
      h("button", { className: "cta", style: { alignSelf: "flex-start" }, onClick: onSend }, "Send message")));
}
