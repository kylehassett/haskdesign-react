import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';


function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Hi! Welcome to haskdesign.</p>
        <p>The site is currently under construction. Thanks for visiting!</p>
        <p>{props.userInterfaceMode}</p>
      </header>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    userInterfaceMode: state.userInterface.userInterfaceMode
  };
};

export default withRouter(connect(mapStateToProps)(Home));
