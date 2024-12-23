chrome.runtime.sendMessage('I am loading content script', (response) => {
    console.log(response);
    console.log('Content Script Yüklendi.');

})

window.onload = (event) => {
    console.log('Sayfa Yüklendi.');
};

declare module '*.png' {
    const value: string;
    export default value;
  }
  