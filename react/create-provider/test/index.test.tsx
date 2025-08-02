
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Counter } from './counter';

describe('Provider with Counter.tsx', () => {
  it('應該渲染兩個計數器，並且共享同一個計數狀態', () => {
    render(<Counter />)
    const counterDisplays = screen.getAllByText('0')
    expect(counterDisplays).toHaveLength(2)
  })
})

// AI EXAMPLE
// describe('Counter', () => {
//   it('應該渲染兩個計數器，並且共享同一個計數狀態', () => {
//     render(<Counter />);
//
//     // 找到所有顯示計數的 div 元素
//     const counterDisplays = screen.getAllByText('0');
//     expect(counterDisplays).toHaveLength(2);
//
//     // 找到按鈕元素
//     const button = screen.getByRole('button');
//
//     // 點擊按鈕
//     fireEvent.click(button);
//
//     // 驗證兩個計數器都更新為 1
//     const updatedCounterDisplays = screen.getAllByText('1');
//     expect(updatedCounterDisplays).toHaveLength(2);
//   });
//
//   it('應該在多次點擊後正確更新計數', () => {
//     render(<Counter />);
//
//     const button = screen.getByRole('button');
//
//     // 點擊按鈕三次
//     fireEvent.click(button);
//     fireEvent.click(button);
//     fireEvent.click(button);
//
//     // 驗證兩個計數器都顯示為 3
//     const counterDisplays = screen.getAllByText('3');
//     expect(counterDisplays).toHaveLength(2);
//   });
// });