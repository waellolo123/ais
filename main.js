const form = document.getElementById("generate-form");
const qr = document.getElementById("qrcode");

const onGenerateSubmit = (e) => {
  e.preventDefault();

  clearUI();

  const url = document.getElementById("url").value;
  const size = document.getElementById("size").value;

  if(url === ""){
    alert("please enter your url");
  } else {
    showSpinner();
    setTimeout(()=>{
      hideSpinner();

      generateQRCode(url, size);

      setTimeout(()=>{
       const saveUrl = qr.querySelector("img").src;
       createSaveBtn(saveUrl);
      }, 50);
    }, 1000);
  }
};

const generateQRCode = (url, size) => {
  const qrcode = new QRCode("qrcode", {
    text: url,
    width: size,
    height: size
  });
};

const showSpinner = () => {};

const hideSpinner = () => {};

const clearUI = () => {
  qr.innerHTML = "";
  const saveLink = document.getElementById("save-link");
  if(saveLink){
    saveLink.remove();
  }
}

const createSaveBtn = (saveUrl) => {
  const link = document.createElement("a");
  link.id = "save-link";
  link.classList = "mt-10 py-2 px6 w-1/3 bg-slate-500 text-white hover:opacity-80 transition font-semibold rounded-lg m-auto";
  link.href = saveUrl;
  link.download = "qrcode";
  link.innerHTML = "Download As Png";
  document.getElementById("generated").appendChild(link);

}

form.addEventListener("submit", onGenerateSubmit)


