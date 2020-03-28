import React from "react";
import useStore from "./use-store";

const connect = (mapStateToProps, mapDispatchToProps) => Component => {
  
  const WrappedComponent = (props) => {
    const { getState, dispatch } = useStore();

    return (
      <Component
          {...props}
          {...mapStateToProps(getState(), props)}
          {...mapDispatchToProps(dispatch, props)}
    />
    );
  };
  return WrappedComponent;
};

export default connect;
