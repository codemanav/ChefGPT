import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ShoppingListModal from '../ShoppingListModal';

describe('ShoppingListModal', () => {
  const mockShoppingList = [
    { id: 1, name: 'Apples', checked: false },
    { id: 2, name: 'Bananas', checked: true },
    { id: 3, name: 'Milk', checked: false },
  ];

  const mockOnClose = jest.fn();
  const mockOnCheckboxChange = jest.fn();

  beforeEach(() => {
    render(
      <ShoppingListModal
        shoppingList={mockShoppingList}
        onClose={mockOnClose}
        onCheckboxChange={mockOnCheckboxChange}
      />
    );
  });

  test('renders the modal with the correct title', () => {
    expect(screen.getByText('Shopping List')).toBeInTheDocument();
  });

  test('displays all items in the shopping list', () => {
    mockShoppingList.forEach(item => {
      expect(screen.getByText(item.name)).toBeInTheDocument();
    });
  });

  test('sorts items with unchecked items first', () => {
    const listItems = screen.getAllByRole('listitem');
    expect(listItems[0]).toHaveTextContent('Apples');
    expect(listItems[1]).toHaveTextContent('Milk');
    expect(listItems[2]).toHaveTextContent('Bananas');
  });

  test('renders checkboxes for each item', () => {
    const checkboxes = screen.getAllByRole('checkbox');
    expect(checkboxes).toHaveLength(mockShoppingList.length);
  });

  test('applies correct text decoration for checked items', () => {
    const bananasItem = screen.getByText('Bananas').closest('li');
    expect(bananasItem).toHaveStyle('text-decoration: line-through');
  });

  test('calls onCheckboxChange with correct item ID when a checkbox is clicked', () => {
    fireEvent.click(screen.getByLabelText('Apples'));
    expect(mockOnCheckboxChange).toHaveBeenCalledWith(1);
  });

  test('renders a close button', () => {
    expect(screen.getByRole('button', { name: 'Close' })).toBeInTheDocument();
  });

  test('calls onClose when the close button is clicked', () => {
    fireEvent.click(screen.getByRole('button', { name: 'Close' }));
    expect(mockOnClose).toHaveBeenCalled();
  });

  test('displays "No items in the shopping list" message when the list is empty', () => {
    const { rerender } = render(
      <ShoppingListModal
        shoppingList={[]}
        onClose={mockOnClose}
        onCheckboxChange={mockOnCheckboxChange}
      />
    );
    expect(screen.getByText('No items in the shopping list')).toBeInTheDocument();
  });

  test('applies correct styling to the modal container', () => {
    const modalContainer = screen.getByTestId('modal-container');
    expect(modalContainer).toHaveClass('modal');
  });

  test('ensures each list item has a unique key prop', () => {
    const listItems = screen.getAllByRole('listitem');
    const keys = listItems.map(item => item.getAttribute('data-key'));
    expect(new Set(keys).size).toBe(mockShoppingList.length);
  });

  test('verifies that the component re-renders when shoppingList prop changes', () => {
    const { rerender } = render(
      <ShoppingListModal
        shoppingList={mockShoppingList}
        onClose={mockOnClose}
        onCheckboxChange={mockOnCheckboxChange}
      />
    );

    const newShoppingList = [...mockShoppingList, { id: 4, name: 'Bread', checked: false }];
    rerender(
      <ShoppingListModal
        shoppingList={newShoppingList}
        onClose={mockOnClose}
        onCheckboxChange={mockOnCheckboxChange}
      />
    );

    expect(screen.getByText('Bread')).toBeInTheDocument();
  });

  test('ensures the modal has proper ARIA attributes for accessibility', () => {
    const modal = screen.getByRole('dialog');
    expect(modal).toHaveAttribute('aria-labelledby');
    expect(modal).toHaveAttribute('aria-describedby');
  });

  test('verifies that long item names are displayed correctly without breaking the layout', () => {
    const longItemName = 'This is a very long item name that should not break the layout of the shopping list modal';
    const longShoppingList = [...mockShoppingList, { id: 4, name: longItemName, checked: false }];

    const { rerender } = render(
      <ShoppingListModal
        shoppingList={longShoppingList}
        onClose={mockOnClose}
        onCheckboxChange={mockOnCheckboxChange}
      />
    );

    const longItemElement = screen.getByText(longItemName);
    expect(longItemElement).toBeInTheDocument();
    expect(longItemElement.closest('li')).toHaveStyle('word-wrap: break-word');
  });
  
});