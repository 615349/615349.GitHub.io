import { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import Template from "../Template";

const Wrapper = styled.div`
  max-width: 990px;
  margin: 30px auto;
`;

const code = `
  import { useState, useRef, useEffect } from "react";

  const PerPageArray = [5, 10, 15];

  export default function App() {
    const ref = useRef<boolean>(false);
    const [hitsArray, setHitsArray] = useState<number[]>([]);

    useEffect(() => {
      if (ref.current) {
        return;
      }
      ref.current = true;

      const fetchHits = (perPage: number) => {
        const url = 'https://hn.algolia.com/api/v1/search_by_date?tags=story&hitsPerPage=' + perPage;
        return fetch(url)
          .then((response) => {
            return response.json();
          })
          .then((response) => {
            setHitsArray((prev) => prev.concat([response.hits.length]));
          });
      };

      PerPageArray.reduce((acc, perPage) => {
        return acc.then(() => {
          return fetchHits(perPage);
        });
      }, Promise.resolve());
    }, []);

    return (
      <div className="App">
        {hitsArray.map((hit, idx) => (
          <div key={idx}>hits: {hit}</div>
        ))}
      </div>
    );
  }
`;

const PerPageArray = [5, 10, 15];

export default function SequenceRequests() {
  const ref = useRef<boolean>(false);
  const [hitsArray, setHitsArray] = useState<number[]>([]);

  useEffect(() => {
    if (ref.current) {
      return;
    }
    ref.current = true;

    const fetchHits = (perPage: number) => {
      const url = `https://hn.algolia.com/api/v1/search_by_date?tags=story&hitsPerPage=${perPage}`;
      return fetch(url)
        .then((response) => {
          return response.json();
        })
        .then((response) => {
          setHitsArray((prev) => prev.concat([response.hits.length]));
        });
    };

    PerPageArray.reduce((acc, perPage) => {
      return acc.then(() => {
        return fetchHits(perPage);
      });
    }, Promise.resolve());
  }, []);

  return (
    <Template code={code}>
      <Wrapper>
        <div className="App">
          {hitsArray.map((hit, idx) => (
            <div key={idx}>hits: {hit}</div>
          ))}
        </div>
      </Wrapper>
    </Template>
  );
}
