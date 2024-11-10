import React from "react";

export default function AccessibilityStatement() {
  return (
    <div style={{ marginTop: "600px", marginBottom: "50px", width: "100vw" }}>
      <div
        style={{
          padding: "4vh 10vw",
          display: "flex",
          flexDirection: "column",
          gap: "15px",
        }}
      >
        <h1 style={{ textAlign: "center", fontWeight: "600" }}>
          {" "}
          Accessibility Statement
        </h1>
        <p>
          We are committed to ensuring you can readily access information about
          the products and services we promote on our websites. We have
          voluntarily taken efforts to comply with the World Wide Web
          Consortium’s Web Content Accessibility Guidelines 2.1, Level AA
          (“WCAG-2.1 AA”), a set of guidelines adopted by a private group
          designed to maximize accessibility of web content.
        </p>
        <p>
          Please note our websites may link to, or interface with, third-party
          websites we do not control. These third-party vendors may not have
          undertaken the efforts we have to comply with WCAG-2.1 AA standards.
          As the law and accessibility standards continue to change, and we
          strive to deliver the most up-to-date content online, please
          understand our efforts to improve online accessibility are ongoing.
        </p>
        <p>
          We encourage you to report any accessibility issues you encounter and
          inquire about alternative communication methods or accessibility
          formats. We thank you for your assistance in enhancing the
          accessibility of our website and we look forward to serving your
          needs.
        </p>
      </div>
    </div>
  );
}
