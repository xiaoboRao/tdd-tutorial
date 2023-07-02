import React from 'react'
import { render } from '@testing-library/react'
import { Provider } from 'react-redux'
import { initStore } from '../store/todo'

interface BaseLayoutProps {
  children?: React.ReactNode
}
// if store not passed when called, store is created uniquely, otherwise store is the same when used by other test
export const renderWithRedux = (ui: React.ReactElement, { store, ...renderOptions } = { store: initStore() }) => {
  const Wrapper: React.FC<BaseLayoutProps> = ({ children }) => {
    return <Provider store={store}>{children}</Provider>
  }

  return render(ui, { wrapper: Wrapper, ...renderOptions })
}
