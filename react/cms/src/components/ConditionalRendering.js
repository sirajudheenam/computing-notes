import '../stylesheets/style.css';

function RegularComponent() {
  return <h3>This is RegularComponent</h3>;
}

function SecretComponent() {
  return <h3>This is SecretComponent.</h3>;
}

function NightComponent() {
  return <h3>This is NightComponent</h3>;
}

function DayComponent() {
  return <h3>This is DayComponent.</h3>;
}
function DayOrNight({ day }) {
  return (
    day ? (<DayComponent />) : (<NightComponent />)
  )
}

// function ConditionalRendering(props) {
// Object Restructuring
function ConditionalRendering({ authorized, day }) {
  // if (props.authorized) {
  //   return <SecretComponent />;
  // } else {
  //   return <RegularComponent />;
  // }
  return (
    <div className="ConditionalRendering">
      {authorized ? <SecretComponent /> : <RegularComponent />}
      {/* { props.authorized ? <SecretComponent /> : <RegularComponent /> } */}
      {/* { day ? <DayComponent /> : <NightComponent />} */}
      {/* { props.day ? <DayComponent /> : <NightComponent />} */}
      <DayOrNight day="true" />
    </div>
  )
}

export default ConditionalRendering;
