import Template from "../Template";

const code = `
  // need to know if user has switched to another Chrome tab,

  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'hidden') {
      // has switched to another tab
    } else {
      // the tab is active
    }
  })
`;
export default function VisibilityChange() {
  return <Template code={code} />;
}
