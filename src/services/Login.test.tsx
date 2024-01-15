import { login } from './Login'

describe('Login service', () => {
  const mockAlert = jest.fn()
  window.alert = mockAlert
  it('should return an alert', () => {
    login()
    expect(mockAlert).toHaveBeenCalledWith('Welcome!')
  })
})
