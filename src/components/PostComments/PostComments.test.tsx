import { fireEvent, render, screen } from "@testing-library/react";
import Post from ".";
import PostComment from ".";

describe("Teste para o componente Post", () => {
  test("Deve renderizar o componente corretamente", () => {
    render(<Post />);
    expect(screen.getByText("Comentar")).toBeInTheDocument();
  });

  test("Deve adicionar um comentário", () => {
    render(<PostComment />);
    fireEvent.change(screen.getByTestId("campo-comentar"), {
      target: {
        value: "Teste",
      },
    });
    fireEvent.click(screen.getByTestId("btn-comentar"));
    expect(screen.getByText("Teste")).toBeInTheDocument();
  });
});
