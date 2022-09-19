// Tambahkan kode JavaScript kalian di file ini
function getFormData() {
  const namaDepan = document.getElementById("first-name").value;
  const namaBelakang = document.getElementById("last-name").value;
  const asalKota = document.getElementById("city").value;
  const kodePos = document.getElementById("zip-code").value;
  const cek = document.getElementById("check").checked;

  return {
    firstName: namaDepan,
    lastName: namaBelakang,
    city: asalKota,
    zipCode: kodePos,
    check: cek,
  };
}

function isNumber(string) {
  if (isNaN(string) == false) {
    return true;
  } else {
    return false;
  }
}

function isLength(string, integer) {
  if (string.length == integer) {
    return true;
  } else {
    return false;
  }
}

function checkboxIsChecked() {
  if (document.getElementById("check").checked) {
    return true;
  } else {
    return false;
  }
}

function validateFormData(objek) {
  if (objek != null && isNumber(objek.zipCode) && checkboxIsChecked()) {
    return true;
  } else {
    return false;
  }
}

function submit() {
  document.getElementById("warning").style.color = "#FF0000";
  if (!validateFormData(getFormData())) {
    document.getElementById("warning").innerHTML =
      "Periksa form anda sekali lagi";
  } else {
    warning.innerHTML = "";
  }
}

function resetForm() {
  document.getElementById("first-name").value = "";
  document.getElementById("last-name").value = "";
  document.getElementById("city").value = "";
  document.getElementById("zip-code").value = "";
  document.getElementById("check").checked = false;
}
