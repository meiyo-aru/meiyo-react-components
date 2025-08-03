import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from './Button'; 

describe('Button', () => {
  it('should render the button with the correct text', () => {
    render(<Button content="Comprar Agora" />);
    expect(screen.getByRole('button', { name: 'Comprar Agora' })).toBeInTheDocument();
  });

  it('should call events handler', () => {
    const handleClick = vi.fn();
    const handleHover = vi.fn();

    render(<Button content="Adicionar ao Carrinho" onClick={handleClick} onMouseEnter={handleHover} onMouseLeave={handleHover} />);
    const button = screen.getByRole('button', { name: 'Adicionar ao Carrinho' });

    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
    fireEvent.mouseEnter(button); 
    expect(handleHover).toHaveBeenCalledTimes(1);

    fireEvent.mouseLeave(button); 
    expect(handleHover).toHaveBeenCalledTimes(1);
  });



  it('should not call events when disabled', () => {
    const handleClick = vi.fn();
    const handleHover = vi.fn();

    render(<Button content="Desabilitado" onClick={handleClick} onMouseEnter={handleHover} onMouseLeave={handleHover} disabled />);
    const button = screen.getByRole('button', { name: 'Desabilitado' });

    fireEvent.click(button);
    expect(handleClick).not.toHaveBeenCalled();

    fireEvent.mouseEnter(button)
    expect(handleHover).not.toHaveBeenCalled();
    
    fireEvent.mouseLeave(button)
    expect(handleHover).not.toHaveBeenCalled();
  });
});