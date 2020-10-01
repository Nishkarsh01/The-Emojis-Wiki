import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia";

const emoji = (emojiTerm) => {
  return (
    <Entry
      key={emojiTerm.id}
      emoji={emojiTerm.emoji}
      name={emojiTerm.name}
      description={emojiTerm.meaning}
    />
  );
};

function App() {
  return (
    <div>
      <h1>
        <span>The Emojis Wiki</span>
      </h1>
      <dl className="dictionary">{emojipedia.map(emoji)}</dl>
    </div>
  );
}

export default App;
