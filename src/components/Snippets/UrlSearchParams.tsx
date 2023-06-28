import Code from "../Code";
import Back from "../Back";

const UrlSearchParams = () => {
  const code = `
    const params = new URLSearchParams({
      dc: encodeURIComponent('NSW Epping')
    });
    console.log(params.toString()); //dc=NSW%2520Epping, while we expect dc=NSW%20Epping
    // basically it would insert some strange characters when do encoding
    // we can do something like:
    const paramsObj = {
      dc: encodeURIComponent('NSW Epping'),
      ct: 'consumer',
    };

    const params = Object.entries(paramsObj)
        .map(([key, value]) => {
          let result = key;
          result += '=';
          result += value; //use back tick would result in error
        })
        .join('&');
  `;

  return (
    <>
      <Back />
      <Code code={code} />
    </>
  );
};

export default UrlSearchParams;
