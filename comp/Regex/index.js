import { useEffect, useState } from "react";
// https://splunktool.com/regex-javascript-match-multiple-search-terms-ignoring-their-order

const lookStrings =
  "React,ReactNative,react-router,reactive,reactivity,react-node,react-accessible-modal".split(
    ","
  );

const searchStrings =
  "Tim Burton,Tim Bulmer,Tom Brink,Thomas Burrden,Thomas Biden,Tom Bruton,Thom Bork,Thomer Bimson,Tommy Bank".split(
    ","
  );
const Page = () => {
  return (
    <main>
      <h1>Regex </h1>
      <p>
        Great tool for developing regex{" "}
        <a href="https://regexr.com/">https://regexr.com/</a>
      </p>
      <Search />
      <Look />
    </main>
  );
};

const regexScore = (str, rgx) => {
  const match = str.match(rgx);
  if (!match) return 0;
  return match.length;
};

const searchScore = (str, query) => {
  if (!query) return 0;
  const words = query
    .trim()
    .split(" ")
    .map((word) => `(?:${word})`)
    .join("|");

  // const expression = words.join("*") + (words.length === 1 ? "+" : "*");
  const rgx = new RegExp(words, "ig");
  const score = regexScore(str, rgx);
  return score;
};

const Search = () => {
  const [query, setQuery] = useState("");

  return (
    <div>
      <h2>Regex search</h2>
      <div>
        <label>
          searches for several query words, return either or, space separated,
          only when letters appear consecutively
        </label>
        <input
          type="text"
          value={query}
          onChange={(ev) => setQuery(ev.target.value)}
        />
      </div>
      <div>Search in :</div>
      <div>
        <div>
          {searchStrings.map((str, i) => {
            const score = searchScore(str, query);
            return (
              <div key={i} style={{ fontWeight: score > 0 ? "bold" : "" }}>
                {score} - {str}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Page;

const lookaheadScore = (str, query) => {
  if (!query) return 0;
  const letter = "[\\w-]*";
  let expr = query.split("").join(letter);
  expr = letter + expr + letter;
  const rgx = new RegExp(expr, "i");
  const score = regexScore(str, rgx);
  return score;
};

const Look = () => {
  const [query, setQuery] = useState("");

  return (
    <div>
      <h3>Lookahead</h3>
      <div>
        <label>
          vs code style lookahead that finds query characters (in order) in
          single lines
        </label>
        <input
          type="text"
          value={query}
          onChange={(ev) => setQuery(ev.target.value)}
        />
      </div>
      <div>
        {lookStrings.map((str) => {
          //
          const score = lookaheadScore(str, query);

          return (
            <div style={{ fontWeight: score ? "bold" : "" }}>
              {str} - {score}
            </div>
          );
        })}
      </div>
    </div>
  );
};
