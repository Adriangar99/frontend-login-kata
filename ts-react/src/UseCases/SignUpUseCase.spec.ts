import { describe, expect, it } from "vitest";
import { SignUpUseCase } from "./SignUpUseCase";

describe("SignUpUseCase", () => {
  it("should return true if the signup is correct", async () => {
    const sut = new SignUpUseCase();

    await expect(
      sut.execute({
        email: "test@test.com",
        password: "Test1234",
      })
    ).resolves.not.toThrow();
  });

  it("should return false if the signup is not correct", async () => {
    const sut = new SignUpUseCase();

    await expect(
      sut.execute({
        email: "",
        password: "",
      })
    ).rejects.toThrow();
  });
});
