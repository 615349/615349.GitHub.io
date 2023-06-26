import Code from "./Code";
import Back from "./Back";

const FetchTimeout = () => {
  const code = `
    function fetchWithAbort(timeout) {
      return (url, options) => {
        const controller = new AbortController();
        options = options || {};
        options.signal = controller.signal;
        setTimeout(() => {
          controller.abort():
        }, timeout);
        return fetch(url, options):
      }
    }

    fetchWithAbort(100)('https://www.google.com')
  `;

  return (
    <>
      <Back />
      <Code code={code} />
    </>
  );
};

export default FetchTimeout;
