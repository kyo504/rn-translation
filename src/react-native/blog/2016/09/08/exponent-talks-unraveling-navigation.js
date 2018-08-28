/**
 * @generated
 */
var React = require("React");
var Layout = require("BlogPostLayout");
var content = `
[Adam Miskiewicz](https://twitter.com/skevy) from [Expo](https://expo.io/) talks about mobile navigation and the [\`ex-navigation\`](https://github.com/exponent/ex-navigation) React Native library at Expo's office hours last week.
`;
var Post = React.createClass({
  statics: { content: content },
  render: function() {
    return (
      <Layout metadata={{"path":"2016/09/08/exponent-talks-unraveling-navigation.html","content":"\n[Adam Miskiewicz](https://twitter.com/skevy) from [Expo](https://expo.io/) talks about mobile navigation and the [`ex-navigation`](https://github.com/exponent/ex-navigation) React Native library at Expo's office hours last week.\n","publishedAt":"2016-09-08","excerpt":"Adam Miskiewicz from Expo talks about mobile navigation and the ex-navigation React Native library at Expo's office hours last week.","title":"Expo Talks: Adam on Unraveling Navigation","author":"Héctor Ramos","authorTitle":"Developer Advocate at Facebook","authorURL":"https://twitter.com/hectorramos","authorImage":"https://s.gravatar.com/avatar/f2223874e66e884c99087e452501f2da?s=128","authorTwitter":"hectorramos","youtubeVideoId":"oeSjTxVkMhc","category":"videos"}}>
        {content}
      </Layout>
    );
  }
});
module.exports = Post;