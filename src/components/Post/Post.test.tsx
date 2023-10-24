import { render, screen } from "@testing-library/react";
import Post from ".";

describe("Teste para o componente Post", () => {
  test("Deve renderizar o componente corretamente", () => {
    render(<Post children={undefined} imageUrl={""} />);
    expect(screen.getByText("Comentar")).toBeInTheDocument();
  });
});
