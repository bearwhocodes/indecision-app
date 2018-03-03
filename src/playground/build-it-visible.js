class VisibilityToggle extends React.Component {
  constructor(props) {
    super(props);
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.state = {
      title: 'Visibility Toggle',
      visible: false
    };
  }

  handleButtonClick() {
    this.setState((prevState) => {
      return {
        visible: !prevState.visible
      };
    });
  }

  render() {
    return (
      <div>
        <h1>{ this.state.title }</h1>
        <button onClick={ this.handleButtonClick }>{ this.state.visible ? 'Hide Details' : 'Show Details'}</button>
        { this.state.visible && <p>Here are some details</p>}
      </div>
    );
  }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));

// const appRoot = document.getElementById('app');

// const app = {
//   title: 'Visibility Toggle',
//   visible: false,
// }

// const onButtonClick = (e) => {
//   e.preventDefault();
//   app.visible = !app.visible;
//   render();
// }

// const render = () => {
//   const template = (
//     <div>
//       <h1>{ app.title }</h1>
//       <button onClick={ onButtonClick }>{ app.visible ? 'Hide Details' : 'Show Details' }</button>
//       { app.visible && <p>Here are some details</p>}
//     </div>
//   );
//   ReactDOM.render(template, appRoot);
// };

// render();