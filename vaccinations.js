class MockState {

  deepClone(state) {
    return Object.assign({}, state); //Temporary
  }

  setState(state) {
    this.state = this.deepClone(state);
  }

  setDispatch(dispatch) {
    this.dispatch = dispatch;
  }

  getState() {
    return this.state;
  }

}

let mockState = new MockState();

export const setupTests = ({ getState, dispatch }, next, action) => {
  console.log('Setting up state');
  mockState.setState(getState());
  mockState.setDispatch(dispatch);
};

export const acceptAction = ({getState}, action) => {
  const state = getState();
};

export const Components = {
  App: (props, Component) => {
    return props;
  }
};