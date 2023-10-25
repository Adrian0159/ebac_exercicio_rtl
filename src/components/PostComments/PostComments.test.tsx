import { fireEvent, render, screen } from "@testing-library/react";
import PostComment from ".";

describe("Teste para o componente Post", () => {
  test('Deve adicionar "Primeiro comentário"', () => {
    render(<PostComment />);
    fireEvent.change(screen.getByTestId("campo-comentar"), {
      target: {
        value: "Primeiro comentário",
      },
    });
    fireEvent.click(screen.getByTestId("btn-comentar"));
    expect(screen.getByText("Primeiro comentário")).toBeInTheDocument();
  });

  test('Deve adicionar "Segundo comentário"', () => {
    render(<PostComment />);
    fireEvent.change(screen.getByTestId("campo-comentar"), {
      target: {
        value: "Segundo comentário",
      },
    });
    fireEvent.click(screen.getByTestId("btn-comentar"));
    expect(screen.getByText("Segundo comentário")).toBeInTheDocument();
  });
});
