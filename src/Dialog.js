function Dialog(props) {
  return <div className="model">{props.children}</div>;
}

function ConfirmationDialog() {
  returm(
    <Dialog color="blue">
      <h1 className="dialog-title">Thanks!</h1>
      <p className="dialog-message">
        We'll process your order in less than 24 hours
      </p>
    </Dialog>
  );
}
