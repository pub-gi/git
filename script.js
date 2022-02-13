const url = "https://api.github.com/users?since=10";

function Header() {
  return /*#__PURE__*/(
    React.createElement("div", { className: "header" }, /*#__PURE__*/
    React.createElement("p", { className: "title" }, "GitHub Users")));


}

function Footer() {
  return /*#__PURE__*/(
    React.createElement("div", { className: "footer" }, /*#__PURE__*/
    React.createElement("p", { className: "text" }, "This is just for the demo of fetching data from Api in React Js")));




}

function User({ name, image, link }) {
  return /*#__PURE__*/(
    React.createElement("div", { className: "user" }, /*#__PURE__*/
    React.createElement("img", { src: image, alt: name }), /*#__PURE__*/
    React.createElement("h3", null, name), /*#__PURE__*/
    React.createElement("a", { className: "btn", href: link }, "View Profile")));




}

function App() {
  const [users, setUsers] = React.useState([]);
  const [input, setInput] = React.useState("");
  const [searchResults, setSearchResults] = React.useState([]);

  const fetchUsers = async () => {
    try {
      const res = await fetch(url);
      const users = await res.json();
      setUsers(users);
    } catch (error) {
      console.log("Error in the ", error.message);
    }
  };

  const searchProfile = e => {
    const inputText = e.target.value;
    setInput(inputText);
    const results = users.filter((user) =>
    user.login.toLowerCase().includes(inputText.toLowerCase()));

    setSearchResults(results);
  };

  React.useEffect(() => fetchUsers(), []);

  return /*#__PURE__*/(
    React.createElement(React.Fragment, null, /*#__PURE__*/
    React.createElement(Header, null), /*#__PURE__*/
    React.createElement("input", {
      type: "text",
      className: "search-bar",
      placeholder: "seach Github User",
      value: input,
      name: "input",
      onChange: searchProfile }), /*#__PURE__*/

    React.createElement("div", { className: "container" },
    input.length > 0 ?
    searchResults.map(user => {
      return /*#__PURE__*/(
        React.createElement(User, {
          key: user.id,
          name: user.login,
          image: user.avatar_url,
          link: user.html_url }));


    }) :
    users.map(user => {
      return /*#__PURE__*/(
        React.createElement(User, {
          key: user.id,
          name: user.login,
          image: user.avatar_url,
          link: user.html_url }));


    })), /*#__PURE__*/

    React.createElement(Footer, null)));


}

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById("root"));