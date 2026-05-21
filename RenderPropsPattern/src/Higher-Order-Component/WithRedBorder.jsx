const withRedBorder = (WrappedComponent) => {
    return function NewComponentWithBorder(props) {
        return (
            <div style={{ border: "2px solid red", padding: "20px", margin: "10px" }}>
              <WrappedComponent  {...props}/>
            </div>
          );
      };
};

export default withRedBorder;