import { describe, expect, it } from "vitest";
import { getResultLookupMessage } from "@/pages/Results";

describe("getResultLookupMessage", () => {
  it("does not show a lookup message for an empty roll number", () => {
    expect(getResultLookupMessage("  ")).toBe("");
  });

  it("clearly says official results are not available for a submitted roll number", () => {
    expect(getResultLookupMessage("123456")).toContain("Live result lookup is not available");
    expect(getResultLookupMessage("123456")).toContain("official BBISE result service");
  });
});
